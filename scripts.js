// Add interactivity to the website

// Example: Add to Cart functionality
document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.product button');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const product = this.closest('.product');
            const productName = product.querySelector('h3').innerText;
            const productPrice = product.querySelector('p').innerText;
            alert(`${productName} added to cart!`);
            // You can add logic here to update the cart in localStorage or send data to a server
        });
    });

    // Example: Remove item from cart
    const removeButtons = document.querySelectorAll('.cart-item button');

    removeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const cartItem = this.closest('.cart-item');
            cartItem.remove();
            alert('Item removed from cart!');
            // You can add logic here to update the cart in localStorage or send data to a server
        });
    });

    // Example: Form validation for checkout and contact forms
    const checkoutForm = document.querySelector('.checkout-form form');
    const contactForm = document.querySelector('.contact-form form');

    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function (e) {
            const fullName = document.getElementById('fullname').value;
            const email = document.getElementById('email').value;
            const address = document.getElementById('address').value;

            if (!fullName || !email || !address) {
                e.preventDefault();
                alert('Please fill out all required fields.');
            }
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !message) {
                e.preventDefault();
                alert('Please fill out all required fields.');
            }
        });
    }
});