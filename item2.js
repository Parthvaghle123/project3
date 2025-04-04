document.addEventListener("DOMContentLoaded", () => {
    const products = [
        {
            id: 0,
            image: 'https://starbucksstatic.cognizantorderserv.com/Items/Small/105468.jpg',
            title: 'Cold Drink',
            per:'Our signature rich in flavour espresso blended with delicate...',
            price: 299,
            qty: 1

        },
        {
            id: 1,
            image: 'https://starbucksstatic.cognizantorderserv.com/Items/Small/100501.jpg',
            title: 'Java Chip Frappuccino',
            per: ' Mocha sauce and Frappuccino® chips blended with with Frappu...',
            price:  388,
            qty: 1
        },
        {
            id: 2,
            image: 'https://starbucksstatic.cognizantorderserv.com/Items/Small/100433.jpg',
            title: 'Cold Coffee',
            per:'  Captivating, cosy, coffee. Gift your loved ones this Starbucks Gift Card.',
            price:  278,
            qty: 1
        },
        {
            id: 3,
            image: 'https://starbucksstatic.cognizantorderserv.com/Items/Small/107707.jpg',
            title: 'Double Chip Cookie',
            per: 'A soft & chewy chocolate cookie topped with chocolate chips ...',
            price: 294,
            qty: 1
        },
        {
            id: 4,
            image: 'https://starbucksstatic.cognizantorderserv.com/Items/Small/103515.jpg',
            title: 'Double Frappuccino',
            per:'  Rich mocha-flavored sauce meets up with chocolaty chips, mil...',
            price: 420,
            qty: 1
        },
        {
            id: 5,
            image: 'https://starbucksstatic.cognizantorderserv.com/Items/Small/100100_1.png',
            title: 'Chicken  Sandwich',
            per: ' Marinated tandoori paneer filling, sliced cheese, and whole...',
            price: 283,
            qty: 1
        },
        {
            id: 6,
            image: 'https://starbucksstatic.cognizantorderserv.com/Items/Small/115751_1.png',
            title: 'Cookie Creme Latte',
            per:" Handcrafted espresso from the world's top 3% Arabica with st...",
            price:430,
            qty: 1
        },
        {
            id: 7,
            image: 'https://starbucksstatic.cognizantorderserv.com/Items/Small/115987.png',
            title: 'Classic Iced Coffee',
            per:'   Savour our premium coffee made with top 3% Arabica beans in ...',
            price: 236,
            qty: 1
        },
        {
            id: 8,
            image: 'https://starbucksstatic.cognizantorderserv.com/Items/Small/115986.png',
            title: 'Classic Hot Coffee',
            per: 'Savour our premium coffee made with top 3% Arabica beans in ...',
            price:  157 ,         
             qty: 1

        },
        {
            id: 9,
            image: 'https://starbucksstatic.cognizantorderserv.com/Items/Small/100512.jpg',
            title: 'Doppio Espresso',
            per: '   Our smooth signature Espresso Roast and its caramelly sweetn...',
            price: 278,
            qty: 1
        },
        {
            id: 10,
            image: 'https://starbucksstatic.cognizantorderserv.com/Items/Small/103973.jpg',
            title: 'Flat White',
            per: 'Expertly steamed milk poured over shots of ristretto and fin...',
            price: 330,
            qty: 1

        },
        {
            id: 11,
            image: 'https://starbucksstatic.cognizantorderserv.com/Items/Small/107933.jpg',
            title: 'Hazelnut Cortado',
            per: ' A perfect espresso shot and hazelnut syrup, topped with stea...',
            price:  351,
            qty: 1
        },
    ];

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const displayItems = (items) => {
        const root = document.getElementById('root1');
        if (root) {
            if (items.length === 0) {
                root.innerHTML = `<h3 style="color: red; text-align: center;">No Product Found </h3>`;
            } else {
                root.innerHTML = items.map((item) =>
                    `<div class='box'>
                        <div class='img-box'>
                            <img class='img' src="${item.image}" alt="${item.title}">
                        </div>
                        <div class='bottom'>
                            <h2>${item.title}</h2>
                            <h4>${item.per}</h4>
                            <h3>₹${item.price}.00</h3>
                            <button class="btn2 btn-success" onclick="addToCart(${item.id})">Add Item</button>
                        </div>
                    </div>`
                ).join('');
            }
        }
    };
    const updateCartCount = () => {
        const cartCountElement = document.getElementById('cart-count');
        const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
        cartCountElement.innerText = totalItems;
        cartCountElement.style.display = totalItems > 0 ? 'inline-block' : 'none';
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
        updateCartCount();
    };

    const displayCart = () => {
        const cartContainer = document.getElementById('cart');
        const totalElement = document.getElementById('total');

        if (!cartContainer || !totalElement) return;

        if (cart.length === 0) {
            cartContainer.innerHTML = `<h3 style="color: red; text-align: center;">Cart is Empty </h3>`;
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
        updateCartCount();

    };

    window.decreaseQty = (index) => {
        if (cart[index].qty > 1) {
            cart[index].qty--;
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
        updateCartCount();

    };

    window.removeFromCart = (index) => {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
        updateCartCount();

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
        updateCartCount();

    }
});