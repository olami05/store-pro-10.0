let myDiv = document.getElementById("root")
let storeUrl = "http://fakestoreapi.com/products";

function padTo(digit , currency){
    let strDigit = digit.toString()
    let newDigit = strDigit.padStrart(strDigit.length + 1, currency)
    return newDigit 
}

 
async function getProducts(){
    let res = await fetch(storeUrl);
    let data = await res.json();
    console.log(data);
    myDiv.innerHTML = data
    .map((product) => {
        return `<div class="card">
        <img src=${product.image} alt="ab">
         <div>
            <p class="title">Name: ${product.title}</p>
            <p>Description: ${product.description.substr(0,25)}</p>
            <p>Price: ${product.price}</p>
          </div>
        </div>`;
    })
    .join("");
}

getProducts();