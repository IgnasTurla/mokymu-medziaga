// document.addEventListener("DOMContentLoaded", () => {
//     fetchProducts();
// });

// async function fetchProducts() {
//     try {
//         const response = await fetch("https://fakestoreapi.com/products");
//         const products = await response.json();
//         displayProducts(products);
//     } catch (error) {
//         console.error("Klaida gaunant produktus:", error);
//     }
// }

// function displayProducts(products) {
//     const container = document.getElementById("product-list");
//     container.innerHTML = ""; // Išvalome turinį

//     products.forEach(product => {
//         const productCard = document.createElement("div");
//         productCard.classList.add("col-md-4", "mb-4");
//         productCard.innerHTML = `
//             <div class="card h-100 shadow-sm">
//                 <img src="${product.image}" class="card-img-top p-3" alt="${product.title}">
//                 <div class="card-body">
//                     <h5 class="card-title">${product.title}</h5>
//                     <p class="card-text">${product.description.substring(0, 100)}...</p>
//                     <h6 class="text-primary">$${product.price}</h6>
//                     <button class="btn btn-primary">Pirkti</button>
//                 </div>
//             </div>
//         `;
//         container.appendChild(productCard);
//     });
// }


// function addProductsIntoDiv(products){
//     console.log(products)
// };

// window.addEventListener('load', () => {
//     fetch('https://fakestoreapi.com/products')
//     .then(response => response.json())
//     .then(data => addProductsIntoDiv(data)  );
// })


// document.addEventListener("DOMContentLoaded", () => {
//     fetchProducts();
// });

// async function fetchProducts() {
//     try {
//         const response = await fetch("https://fakestoreapi.com/products");
//         const products = await response.json();
//         addProductsIntoDiv(products);
//     } catch (error) {
//         console.error("Klaida gaunant produktus:", error);
//     }
// }

// function addProductsIntoDiv(products) {
//     const container = document.getElementById("product-list");
//     if (!container) {
//         console.error("Elementas #product-list nerastas!");
//         return;
//     }

//     container.innerHTML = ""; // Išvalome turinį

//     products.forEach(product => {
//         const productCard = document.createElement("div");
//         productCard.classList.add("col-md-4", "mb-4");
//         productCard.innerHTML = `
//             <div class="card h-100 shadow-sm">
//                 <img src="${product.image}" class="card-img-top p-3" alt="${product.title}">
//                 <div class="card-body">
//                     <h5 class="card-title">${product.title}</h5>
//                     <p class="card-text">${product.description.substring(0, 100)}...</p>
//                     <h6 class="text-primary">$${product.price}</h6>
//                     <button class="btn btn-primary">Pirkti</button>
//                 </div>
//             </div>
//         `;
//         container.appendChild(productCard);
//     });
// }


function addProductsIntoDiv(products) {
    let productsDiv = document.getElementById('products');
let productCard = '';
    for (let product of products){
productCard += `
<div class="product-card">
<img src="${product.image}">
<h4>${product.description}</h4>
<button>perziureti</button>
</div>`
    }

    console.log(products)
productsDiv.innerHTML = productCard;
};



window.addEventListener('load', () => {
    fetch('https://fakestoreapi.com/products/')
        .then(reponse => reponse.json())
        .then(data => addProductsIntoDiv(data));
});


