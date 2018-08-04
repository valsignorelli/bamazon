# bamazon

This is an Amazon-like storefront using MySQL Database. The app will take in orders from customers and deplete stock from the store's inventory. The application presents two interfaces: customer and manager.

Customer Interface:

The Customer will see a list of the products on sale, then will chose the item ID that wants to purchase. After that, the customer will say how much of the item will purchase. Then the app will display the produc chosen, its quantity and price, and the total price to pay.

Valdineias-MBP:bamazon valsignorelli$ node bamazonCustomer.js
connected as id 20
List of Products on Sale:::::::::::::
Item ID: 1 || Product: Bananas || Department: Produce || Price: 1 || Stock: 500
Item ID: 2 || Product: Chocolate || Department: Grocery || Price: 2.5 || Stock: 300
Item ID: 3 || Product: Organic Apples || Department: Produce || Price: 2 || Stock: 400
Item ID: 4 || Product: Popsicles || Department: Grocery || Price: 2.5 || Stock: 350
Item ID: 5 || Product: Thomas and Friends Trackmaster || Department: Toys || Price: 15 || Stock: 50
Item ID: 6 || Product: Dinosaur T-Rex || Department: Toys || Price: 10 || Stock: 50
Item ID: 7 || Product: Water Guns || Department: Toys || Price: 5 || Stock: 75
Item ID: 8 || Product: iPhone || Department: Electronics || Price: 500 || Stock: 100
Item ID: 9 || Product: Tablet || Department: Electronics || Price: 300 || Stock: 70
Item ID: 10 || Product: Tylenol || Department: Pharmacy || Price: 3.5 || Stock: 125
? What is the item ID?? 4
4
RowDataPacket {
  item_id: 4,
  product_name: 'Popsicles',
  department_name: 'Grocery',
  price: 2.5,
  stock_quantity: 350 }
? how many would you like to buy? 5
inside quantity  5

Successfully purchased5Popsicless for $12.5!

Manager Interface:

The manager can choose what he/she wants to check. Choose one option to display. If the manager chooses to add items then the app will ask the proper questions to add the right item to the right category.

Valdineias-MBP:bamazon valsignorelli$ node bamazonManager.js
? Please choose an option: View Products for Sale
Existing Inventory:
...................

Item ID: 1  //  Product Name: Bananas  //  Department: Produce  //  Price: $1  //  Quantity: 500

Item ID: 2  //  Product Name: Chocolate  //  Department: Grocery  //  Price: $2.5  //  Quantity: 300

Item ID: 3  //  Product Name: Organic Apples  //  Department: Produce  //  Price: $2  //  Quantity: 400

Item ID: 4  //  Product Name: Popsicles  //  Department: Grocery  //  Price: $2.5  //  Quantity: 350

Item ID: 5  //  Product Name: Thomas and Friends Trackmaster  //  Department: Toys  //  Price: $15  //  Quantity: 50

Item ID: 6  //  Product Name: Dinosaur T-Rex  //  Department: Toys  //  Price: $10  //  Quantity: 50

Item ID: 7  //  Product Name: Water Guns  //  Department: Toys  //  Price: $5  //  Quantity: 75

Item ID: 8  //  Product Name: iPhone  //  Department: Electronics  //  Price: $500  //  Quantity: 100

Item ID: 9  //  Product Name: Tablet  //  Department: Electronics  //  Price: $300  //  Quantity: 70

Item ID: 10  //  Product Name: Tylenol  //  Department: Pharmacy  //  Price: $3.5  //  Quantity: 125

Valdineias-MBP:bamazon valsignorelli$ node bamazonManager.js
? Please choose an option: Add New Product
? Please enter the new product name. Pinneapple
? Which department does the new product belong to? Produce
? What is the price per unit? 2.50
? How many items are in stock? 65
Adding New Item:
    product_name = Pinneapple
    department_name = Produce
    price = 2.50
    stock_quantity = 65
New product has been added to the inventory under Item ID 11.
