const productsContainer = document.getElementById('products');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

// Fetch products from API
async function fetchProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    displayProducts(products);
}

// Display products in the container
function displayProducts(products) {
    productsContainer.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>$${product.price}</p>
        `;
        productsContainer.appendChild(productDiv);
    });
}

// Search functionality
searchButton.addEventListener('click', async () => {
    const query = searchInput.value.toLowerCase();
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(query));
    displayProducts(filteredProducts);
});

// Load products on page load
fetchProducts();
