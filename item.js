document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 0, image: 'https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/104997.webp', title: 'Cold Brew Black', price: 299, qty: 1 },
        { id: 1, image: 'https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/100447.webp', title: 'Signature Hot Chocolate', price: 309, qty: 1 },
        { id: 2, image: 'https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/112573.webp', title: 'Vanilla Milkshake', price: 378, qty: 1 },
        { id: 3, image: 'https://starbucksstatic.cognizantorderserv.com/Items/Small/109617_1.png', title: '250G Diwali Blend', price: 110, qty: 1 },
        { id: 4, image: 'https://starbucksstatic.cognizantorderserv.com/Items/Small/116569.png', title: 'Pink Drink', price: 367, qty: 1 },
        { id: 5, image: 'https://starbucksstatic.cognizantorderserv.com/Items/Small/100433.jpg', title: 'Tall Java Chip', price: 290, qty: 1 }
    ];

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const displayItems = (items) => {
        const root = document.getElementById('root1');
        if (root) {
            if (items.length === 0) {
                root.innerHTML = `<h3 style="color: red; text-align: center;">No Product Found 😭</h3>`;
            } else {
                root.innerHTML = items.map((item) =>
                    `<div class='box'>
                        <div class='img-box'>
                            <img class='img' src="${item.image}" alt="${item.title}">
                        </div>
                        <div class='bottom'>
                            <h2>${item.title}</h2>
                            <h4>₹${item.price}.00</h4>
                            <button class="btn2 btn-success" onclick="addToCart(${item.id})">Add Item</button>
                        </div>
                    </div>`
                ).join('');
            }
        }
    };

    const addToCart = (id) => {
        const product = products.find(p => p.id === id);
        const existing = cart.find(p => p.id === id);

        if (existing) {
            alert(`${product.title} Already in Cart!`);
        } else {
            cart.push({ ...product });
            alert(`${product.title} Added to Cart ✅`);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
    };

    const displayCart = () => {
        const cartContainer = document.getElementById('cart');
        const totalElement = document.getElementById('total');

        if (!cartContainer || !totalElement) return;

        if (cart.length === 0) {
            cartContainer.innerHTML = `<h3 style="color: red; text-align: center;">Cart is Empty 😭</h3>`;
            totalElement.innerText = `Total: ₹0`;
        } else {
            cartContainer.innerHTML = cart.map((item, index) =>
                `<div class='box'>
                    <div class='img-box'>
                        <img class='img' src="${item.image}" alt="${item.title}">
                    </div>
                    <div class='bottom'>
                        <h2>${item.title}</h2>
                        <h4>₹${item.price * item.qty}.00</h4>
                        <div>
                            <button onclick="decreaseQty(${index})">➖</button>
                            <span>${item.qty}</span>
                            <button onclick="increaseQty(${index})">➕</button>
                        </div>
                        <button class="btn btn-danger" onclick="removeFromCart(${index})">Remove</button>
                    </div>
                </div>`
            ).join('');

            const total = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
            totalElement.innerText = `Total: ₹${total}`;
        }
    };

    window.addToCart = addToCart;
    window.increaseQty = (index) => {
        cart[index].qty++;
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
    };

    window.decreaseQty = (index) => {
        if (cart[index].qty > 1) {
            cart[index].qty--;
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
    };

    window.removeFromCart = (index) => {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
    };

    const searchInput = document.getElementById('search');
    const searchButton = document.getElementById('searchButton');

    const filterAndDisplayItems = () => {
        const searchData = searchInput.value.toLowerCase();
        const filteredData = products.filter((item) =>
            item.title.toLowerCase().includes(searchData)
        );
        displayItems(filteredData);
    };

    searchInput?.addEventListener('input', () => {
        if (searchInput.value === "") {
            displayItems(products);
        }
    });

    searchButton?.addEventListener('click', (event) => {
        event.preventDefault();
        filterAndDisplayItems();
    });

    if (document.getElementById('root1')) {
        displayItems(products);
    }

    if (document.getElementById('cart')) {
        displayCart();
    }
});