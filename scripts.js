const productsArray = extractProducts();
const cart = [];

function addToCart(productId) {
    const product = productsArray.find(p => p.id === productId);
    if (product) {
        const cartItem = cart.find(item => item.id === productId);
        if (cartItem) {
            cartItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        displayCart();
    }
}

function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        cart.splice(index, 1);
    }
    displayCart();
}

function updateQuantity(productId, quantity) {
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity = quantity;
    }
    displayCart();
}

function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartEmptyMessage = document.getElementById('cart-empty');
    cartItemsContainer.innerHTML = ''; // Clear existing cart items

    if (cart.length === 0) {
        cartEmptyMessage.classList.remove('hidden');
    } else {
        cartEmptyMessage.classList.add('hidden');
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.imgSrc}" alt="${item.title}">
                <div class="cart-item-details">
                    <p class="cart-item-title">${item.title}</p>
                    <div class="cart-item-quantity">
                        <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${item.id}, this.value)">
                        <button class="cart-item-remove" onclick="removeFromCart(${item.id})">Remove</button>
                    </div>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
    }
}

function Cartbar() {
    const cartElement = document.getElementById('cart');
    cartElement.classList.toggle('hidden');
}

// Extract products and initialize the cart on page load
document.addEventListener('DOMContentLoaded', () => {
    extractProducts();
    displayCart();
});
