
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon",
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    makeTable();
});

var makeTable = function(){
	connection.query("SELECT * FROM products", function(err, res) {
    	for (var i = 0; i <res.length; i++) {  
            console.log("ID# " + res[i].item_id);
        	console.log("Product Name: " + res[i].product_name);
        	console.log("Department: " + res[i].department_name);
			console.log("Price: " + res[i].price);
			console.log("Stock Quantity:  " + res[i].stock_quantity);
			console.log("--------------------------------------------------");
   		 }
   	promptCustomer(res);
    })
}

var promptCustomer = function(res){
	inquirer.prompt([{
		type:'input',
		name: 'choice',
		message: "Enter the ID# of item you would like to buy or Quit with [Q]"
	}]).then(function(answer){
var correct = false;
	if(answer.choice.toUpperCase()=="Q"){
		process.exit();
	}
for (var i = 0; i <res.length; i++) {
	if(res[i].item_id==answer.choice){
		correct=true;
var product=answer.choice;
var id=i;
	inquirer.prompt({
		type:"input",
		name:"quantity",
		message:"How many units of this product would you like to purchase?",
		validate: function(value){
			if(isNaN(value)==false){
				return true;
			} else {
				return false;
			}
		}
	}).then(function(answer){
        var quantity = answer.quantity
		if((res[id].stock_quantity-answer.quantity)>0){
			connection.query("UPDATE products SET stock_quantity='"+(res[id].stock_quantity-answer.quantity)+"' WHERE item_id='"+product+"'", function(err,res2){
            makeTable();
            var orderTotal = quantity * res[id].price;
            console.log("Product(s) Purchased! Your total charge was: " + orderTotal);

			})
		} else {
			console.log("Sorry, insufficient quantity in stock at this time.");
			promptCustomer(res);
					}
				})
			}
		}
		if(i==res.length && correct==false){
			console.log("Not a valid selection!");
			promptCustomer(res);
		}
	})
}
