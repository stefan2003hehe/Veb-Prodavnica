const products = [
    {
        "imgSrc": "images/product1.png",
        "productName": "iPhone 13 Pro ",
        "description": "The iPhone 13 Pro features a stunning Super Retina XDR display, A15 Bionic chip for blazing-fast performance, and advanced camera system for capturing pro-quality photos and videos.",
        "price": 999.00
    },
    {
        "imgSrc": "images/product2.jpg",
        "productName": "Samsung Galaxy S21 Ultra ",
        "description": "The Samsung Galaxy S21 Ultra boasts a 6.8-inch Dynamic AMOLED 2X display, powerful Exynos 2100 processor, and a versatile quad-camera setup, making it the ultimate smartphone for productivity and creativity.",
        "price": 1199.99
    },
    {
        "imgSrc": "images/product3.jpg",
        "productName": "MacBook Pro M1 ",
        "description": " The MacBook Pro M1 combines unprecedented performance with exceptional battery life, featuring Apple's M1 chip, stunning Retina display, and macOS Big Sur for seamless productivity on the go.",
        "price": 1299.00
    }
   ,
    {
        "imgSrc": "images/product4.jpg",
        "productName": "Google Pixel 6 Pro ",
        "description": "The Google Pixel 6 Pro features a brilliant 6.7-inch OLED display, powerful Tensor chip for AI-driven performance, and industry-leading camera system for capturing breathtaking photos and videos.",
        "price": 899.00
    }
    ,
    {
        "imgSrc": "images/product5.jpg",
        "productName": "Dell XPS 13 ",
        "description": "The Dell XPS 13 is a premium ultrabook with a stunning InfinityEdge display, powerful Intel Core processor, and sleek, lightweight design, perfect for professionals on the move.",
        "price": 999.99
    }
   
    
];

document.addEventListener("DOMContentLoaded", function() {
    const productContainer = document.getElementById('product-container');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.className+=' highlights-item';

        const img = document.createElement('img');
        img.src = product.imgSrc;
        img.alt = product.productName;
        productDiv.appendChild(img);

        const heading = document.createElement('h3');
        heading.textContent = product.productName;
        productDiv.appendChild(heading);

        const descParagraph = document.createElement('p');
        descParagraph.textContent = product.description;
        productDiv.appendChild(descParagraph);

        const priceParagraph = document.createElement('p');
        priceParagraph.textContent = `Price: $${product.price.toFixed(2)}`;
        priceParagraph.className='price';
        productDiv.appendChild(priceParagraph);

        const addButton = document.createElement('button');
        addButton.textContent = 'Add to Cart';
        addButton.className='button4';
        productDiv.appendChild(addButton);

        productContainer.appendChild(productDiv);
    });

 productContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('button4')) {
            addToCart1(event.target);
        }
    });



});








const addToCartButtons = document.querySelectorAll('.button4');

addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

function addToCart(event) {
    const productDiv = event.target.closest('.highlights-item');
    const productName = productDiv.querySelector('h3').textContent;
    const productPrice = productDiv.querySelector('.price').textContent;

    const product = {
        name: productName,
        price: productPrice
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
}



function addToCart1(button) {
    const productDiv = button.parentElement; // Get the parent product container
    const productName = productDiv.querySelector('h3').textContent;
    const productPrice = productDiv.querySelector('.price').textContent;

    const product = {
        name: productName,
        price: productPrice
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
}



















document.addEventListener('DOMContentLoaded', function() {
    const cartItemsList = document.getElementById('cart-items');
    const resetCartButton = document.getElementById('reset-cart');

    // Function to render cart items
    function renderCartItems() {
        cartItemsList.innerHTML = ''; // Clear existing items
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        cart.forEach(product => {
            const listItem = document.createElement('li');
            listItem.classList.add('cart-item');

            const productName = document.createElement('span');
            productName.textContent = product.name;
            listItem.appendChild(productName);

            // Extract the numeric part of the price and convert it to a float
            const productPrice = parseFloat(product.price.match(/\d+(\.\d+)?/)[0]);
            
            // Display the price as a float
            const priceAsFloat = document.createElement('span');
            priceAsFloat.textContent = productPrice.toFixed(2);
            listItem.appendChild(priceAsFloat);

            cartItemsList.appendChild(listItem);
        });
    }

    // Event listener for reset cart button
    resetCartButton.addEventListener('click', function() {
        localStorage.removeItem('cart'); // Remove cart from localStorage
        renderCartItems(); // Update UI
    });

    // Initial rendering of cart items
    renderCartItems();

     


});




















document.addEventListener('DOMContentLoaded', function() {
document.getElementById('reset-cart').addEventListener('click', function() {
    let textfields = document.getElementsByClassName('he1');
    let firstName = textfields[0].value; // Get the value of the first input field
    
    
    let keepValuesCheckbox = document.getElementById('keepValues');
    let keepValues = keepValuesCheckbox.checked;

  if (!keepValues) {
    // Clear all text fields
    for (let i = 0; i < textfields.length; i++) {
      textfields[i].value = '';
    }

    let textfields1 = document.getElementsByClassName('he2');
    // Clear all text fields
    for (let i = 0; i < textfields1.length; i++) {
      textfields1[i].value = '';
    }

    textfields1 = document.getElementsByClassName('he3');
    // Clear all text fields
    for (let i = 0; i < textfields1.length; i++) {
      textfields1[i].value = '';
    }
     
    textfields1 = document.getElementsByClassName('he4');
    // Clear all text fields
    for (let i = 0; i < textfields1.length; i++) {
      textfields1[i].value = '';
    }

    textfields1 = document.getElementsByClassName('he5');
    // Clear all text fields
    for (let i = 0; i < textfields1.length; i++) {
      textfields1[i].value = '';
    }
}
  



    // Update heading text
     document.querySelector('.mainHead').innerText = "Success! Thank you " + firstName + " for your purchase";
  });
    });



    document.getElementById('image').addEventListener('click', function() {
        this.classList.toggle('flipped');
      });

      document.getElementById('image1').addEventListener('click', function() {
        this.classList.toggle('flipped');
      });

      document.getElementById('image2').addEventListener('click', function() {
        this.classList.toggle('flipped');
      });


      document.getElementById('image3').addEventListener('click', function() {
        this.classList.toggle('flipped');
      });

      document.getElementById('image4').addEventListener('click', function() {
        this.classList.toggle('flipped');
      });

      document.getElementById('image5').addEventListener('click', function() {
        this.classList.toggle('flipped');
      });