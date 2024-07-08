document.addEventListener('DOMContentLoaded', function () {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const checkoutContainer = document.getElementById('checkout');

    if (cart.length === 0) {
        checkoutContainer.innerHTML = '<p>Your cart is empty</p>';
    } else {
        cart.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'product';
            productElement.innerHTML = `
                <img src="${product.img}" alt="${product.name}">
                <p>${product.name}</p>
            `;
            checkoutContainer.appendChild(productElement);
        });
    }
});
