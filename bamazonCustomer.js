var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazonDB"
});

// Connect to the database and create a function that display the products on sale
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    productOffered();
  });


// Show product on sale
var productOffered = function() {
  var query = 'SELECT * FROM products'
  console.log("List of Products on Sale:");
  connection.query(query, function(err, res) {
      for (var i = 0; i < res.length; i++) {
          console.log("Item ID: " + res[i].item_id + " || Product: " + res[i].product_name + " || Department: " + res[i].department_name + " || Price: " + res[i].price + " || Stock: " + res[i].stock_quantity);
      }
      userPurchase(res);
    })
};

function userPurchase(inventory) {
  inquirer
    .prompt({
      name: "choice",
      type: "input",
      message: "What is the item ID you'd like to buy?",

    })
    .then(function(answer) {
      // based on their answer, either call the bid or the post functions
      var choiceID = parseInt(answer.choice)
      console.log(choiceID);
      var product = checkInventory(choiceID, inventory);
      console.log(product);
      if(product) {
        shoppingCartQuantity(product)
      } else{
        console.log("we dont want it");
        productOffered();
      }
    });
}
function shoppingCartQuantity(product) {
  inquirer
  .prompt ([
    {
      type: "input",
      name: "quantity",
      message: "how many would you like to buy?"
    }
  ])
  .then(function(answer){
  var quantity = parseInt(answer.quantity)
  console.log("inside quantity ", quantity);
  if (quantity > product.stock_quantity){
    console.log("We don't have enough of that product in stock, please try again");
    productOffered()
  }  else {
        makePurchase(product, quantity)
      }
    })
  }
function makePurchase(product, quantity){
  connection.query(
    "update product", [quantity, product.item_id],
    function(err, res){
      console.log("\nSuccessfully purchased  " + quantity + ": " + product.product_name + "s for $" + product.price*quantity + "!" );
      productOffered();
    }
  )
}
function checkInventory(choiceID, inventory) {
  for (i = 0; i < inventory.length; i++) {
    if(inventory[i].item_id === choiceID) {
      return inventory[i];
    }
  }
  return null;
}