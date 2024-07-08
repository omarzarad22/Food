const cart = [];

function addToCart(productName, productPrice) {
    const product = { name: productName, price: productPrice };
    cart.push(product);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotalContainer = document.getElementById("cart-total");

    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Cart is empty</p>';
    } else {
        let total = 0;
        cart.forEach((item, index) => {
            const itemElement = document.createElement("div");
            itemElement.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItemsContainer.appendChild(itemElement);
            total += item.price;
        });
        cartTotalContainer.textContent = `Total: $${total.toFixed(2)}`;
    }
}
