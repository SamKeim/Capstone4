let tableHeaders = [
	"Name", "Price", "Add to Cart"
]
let store = [ 
	{
		id: 0,
		name: "Dried Pineapple",
		price: .49
	},
	{
		id: 1,
		name: "Abacaxi Pineapple",
		price: 2.49
	},
	{
		id: 2,
		name: "Smooth Cayenne Pineapple",
		price: 2.99
	},
	{
		id: 3,
		name: "Queen Pineapple",
		price: 1.49
	},
	{
		id: 4,
		name: "Red Spanish Pineapple",
		price: 1.99
	},
	{
		id: 5,
		name: "Candied Pineapple",
		price: .99
	}
]

function generate_store(){
	// Find body Div
	let bodyDiv = document.getElementById("bodyId");
	// Remove Show Store button
	let button = document.getElementById("create-store");
	bodyDiv.removeChild(button);
	
	// create header
	let header = document.createElement("h4");
	header.innerText = "Store";
	bodyDiv.appendChild(header);
	
	// create table with loop
	let table = document.createElement("table");
		let row = document.createElement("tr");
		// for first item in loop, create headers
		for (let header of tableHeaders){
			let cell = document.createElement("th");
			cell.innerText = header;
			row.appendChild(cell);
		}
		table.appendChild(row);
		
		// enhanced loop to loop through items in store
		for (let item of store){
			let row = document.createElement("tr");
			let cell = document.createElement("td");
			cell.innerText = item.name;
			row.appendChild(cell);
			cell = document.createElement("td");
			cell.innerText = "$" + item.price;
			row.appendChild(cell);
			cell = document.createElement("td");
			cell.innerHTML = "<button onclick=\"addToCart(" + item.id + ")\" class=\"btn btn-info\" type=\"button\">Add to Cart</button>";
			row.appendChild(cell);
			table.appendChild(row);
		}
	bodyDiv.appendChild(table);
}

function addToCart(id){
	// look for cart table
	let cartTable = document.getElementById("cartTable");
	
	// if it does not exist, create and assign to variable
	if (cartTable == null){
		cartTable = createCart();
	}
	
	// add to cart
	let cartSize = cartTable.rows.length;
	let cartRow = cartTable.insertRow(cartSize - 1);
	let cartCell = document.createElement("td");
	cartCell.innerText = store[id].name;
	cartRow.appendChild(cartCell);
	cartCell = document.createElement("td");
	cartCell.innerText = "$" + store[id].price;
	cartRow.appendChild(cartCell);
	
	// update total
	let box = document.getElementById("total");
	let sum = parseInt(box.textContent);
	sum += store[id].price;
	box.innerText = sum;
}

function createCart(){
	//create cart header
	let bodyDiv = document.getElementById("cartId");
	let header = document.createElement("h4");
	header.innerText = "Cart";
	bodyDiv.appendChild(header);
	
	//create empty table for cart with header row
	table = document.createElement("table");
	table.setAttribute("id", "cartTable");
	let row = document.createElement("tr");
	let cell = document.createElement("th");
	cell.innerText = tableHeaders[0];
	row.appendChild(cell);
	cell = document.createElement("th");
	cell.innerText = tableHeaders[1];
	row.appendChild(cell);
	table.appendChild(row);
	
	//create total line
	row = document.createElement("tr");
	cell = document.createElement("th");
	cell.innerHTML = "Total:";
	row.appendChild(cell);
	cell = document.createElement("th");
	cell.setAttribute("id", "total");
	cell.innerText = "0.00";
	row.appendChild(cell);
	table.appendChild(row);
	bodyDiv.appendChild(table);
	
	//returns table for use in called function
	return table;
}