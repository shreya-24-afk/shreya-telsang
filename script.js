const products = [
{id: 1,name:"Radio",Image:"https://images-na.ssl-images-amazon.com/images/I/81mmZElIjdL._AC_SL1500_.jpg",price:500},
{id: 2,name:"Mobile",Image:"https://th.bing.com/th/id/OIP.ILP1rB4RgDbRWEYeEoh4uwHaGA?w=207&h=180&c=7&r=0&o=5&pid=1.7",price:700},
{id: 3,name:"laptop",Image:"https://th.bing.com/th/id/OIP.Ir29KH8ifMH_oEOBLg6uYwHaHa?w=176&h=180&c=7&r=0&o=5&pid=1.7",price:60000},
{id: 4,name:"smart watch",Image:"https://th.bing.com/th/id/OIP.z8FnZH-EdzeOPJLvW86V_QHaHa?w=200&h=200&c=7&r=0&o=5&pid=1.7",price:5000},
{id: 5,name:"toy",Image:"https://th.bing.com/th/id/OIP.z8FnZH-EdzeOPJLvW86V_QHaHa?w=200&h=200&c=7&r=0&o=5&pid=1.7",price:678},
{id: 7,name:"Mobile",Image:"https://th.bing.com/th/id/OIP.ILP1rB4RgDbRWEYeEoh4uwHaGA?w=207&h=180&c=7&r=0&o=5&pid=1",price:800},
{id: 8,name:"Laptop",Image:"https://th.bing.com/th/id/OIP.Ir29KH8ifMH_oEOBLg6uYwHaHa?w=176&h=180&c=7&r=0&o=5&pid=1.7",price:600},
{id: 9,name:"smart watch",Image:"https://th.bing.com/th/id/OIP.z8FnZH-EdzeOPJLvW86V_QHaHa?w=200&h=200&c=7&r=0&o=5&pid=1.7",price:900},
{id: 10,name:"toy",Image:"https://th.bing.com/th/id/OIP.z8FnZH-EdzeOPJLvW86V_QHaHa?w=200&h=200&c=7&r=0&o=5&pid=1.7",price:600},
{id: 11,name:"Radio",Image:"https://images-na.ssl-images-amazon.com/images/I/81mmZElIjdL._AC_SL1500_.jpg",price:800},
{id: 12,name:"Mobile",Image:"https://th.bing.com/th/id/OIP.ILP1rB4RgDbRWEYeEoh4uwHaGA?w=207&h=180&c=7&r=0&o=5&pid=1.7",price:5000},
{id: 13,name:"laptop",Image:"https://th.bing.com/th/id/OIP.Ir29KH8ifMH_oEOBLg6uYwHaHa?w=176&h=180&c=7&r=0&o=5&pid=1.7",price:800},
{id: 14,name:"smart watch",Image:"https://th.bing.com/th/id/OIP.z8FnZH-EdzeOPJLvW86V_QHaHa?w=200&h=200&c=7&r=0&o=5&pid=1.7",price:900},
{id:15,name:"Bottle",Image:"https://th.bing.com/th/id/OIP.jwqmjtCoHoNRYA4XSOLWOwHaHa?w=210&h=210&c=7&r=0&o=5&pid=1.7",price:500},
{id:16,name:"TV",Image:"https://th.bing.com/th/id/OIP.cAt5yayGsNv6NgUlRjohLwHaHa?w=192&h=192&c=7&r=0&o=5&pid=1.7",price:80000},
]

//Render Products

function renderProducts(products,productList){
const container = document.getElementById(productList);
container.innerHTML="";
products.forEach(product => {
const productDiv = document.createElement("div");
productDiv.classList.add("product-item");
productDiv.innerHTML= `
<img src= "${product.Image}"/>
<h3>${product.name}</h3>
<h2>${product.price}</h2>
<button onclick="addToCart(${product.id})">Add to Cart</button>
`
container.appendChild(productDiv);
})
}

//Search functionality
function searchProducts(query){
    const filterProducts = products.filter(product =>
        product.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    )
    renderProducts(filterProducts,"productList");
}

//Add EventListner to button
document.getElementById("SearchButton")?.addEventListener("click",() => {
    const query = document.getElementById("productSearch").value;
    searchProducts(query);
})

//Sorting
function sortProducts(criteria){
if(criteria === "price"){
    return products.sort((a,b) => a.price-b.price);
}
return products;
}

//Adding Event listners
document.getElementById("sortOptions")?.addEventListener("change",(event)=>{
const sortedProducts = sortProducts(event.target.value);
renderProducts(sortedProducts,"productList");
})

//Add to cart

function addToCart(productId){
    const product = products.find(p => p.id === productId);
    let cart = JSON.parse(localStorage.getItem("cart"))||[];
    cart.push(product);
    localStorage.setItem("cart",JSON.stringify(cart));
    alert(`${product.name} is added to cart`)
    renderCart();
}

//Render items in cart

function renderCart(){
const cart  = JSON.parse(localStorage.getItem("cart"))||[];
const container = document.getElementById("cartItems");
container,innerHTML="";
if(cart.length == 0){
    container.innerHTML="<h1>Your Cart is Empty</h1>"
}
cart.forEach(item =>{
const cartDiv = document.createElement("div");
cartDiv.classList.add("cart-item");
cartDiv.innerHTML=`
<img src= "${item.Image}"/>
<h3>${item.name}</h3>
<h2>${item.price}</h2>
<button onclick="removeFromCart(${item.id})">Remove</button>
`
container.appendChild(cartDiv);
})
renderSubtotal(cart);
}

//Remove from cart
function removeFromCart(productId){
    let cart = JSON.parse(localStorage.getItem("cart"))||[];
    cart =cart.filter(item => item.id !== productId);
    localStorage.setItem("cart",JSON.stringify(cart));
    alert("product is removed successfully");
    renderCart();
}

//Calculate subtotal
function renderSubtotal(cart){
    const subtotal = cart.reduce((total,item) => total + item.price,0);
    const subtotalContainer = document.getElementById("subtotal");
    if(cart.length > 0){
        subtotalContainer.innerHTML = `Subtotal : Rs. ${subtotal}`
      }else{
        subtotalContainer.innerHTML = `No items in the cart`
        }
    }


if(document.getElementById("productList"))renderProducts(products,"productList");
if(document.getElementById("cartItems"))renderCart();