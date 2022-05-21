function changeButtonStyleAndContent(color, content) {
    var link1 = document.createElement('link');
    link1.type = 'preconnect';
    link1.href = 'https://fonts.googleapis.com'
    var link2 = document.createElement('link');
    link2.rel = 'preconnect';
    link1.href = 'https://fonts.gstatic.com';
    link2.crossorigin = true;
    var link3 = document.createElement('link');
    link3.rel = 'stylesheet';
    link3.href = 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap';
    document.head.appendChild(link1);
    document.head.appendChild(link2);
    document.head.appendChild(link3);
    // targeting by ID (unique) ensures that that's the only element that will update the style. Another approach would have been manipulating the class name, but it could lead to updating other elements with the same CSS class (unwanted behaviour).
    var addToBasketBtn = document.getElementById('product-addtocart-button');
    addToBasketBtn.style.fontFamily = 'Open Sans, Lato, Helvetica, Arial, sans-serif';
    addToBasketBtn.style.borderRadius = '22px';
    // max compatibility (IE6+) form 'cssgradient.io'
    addToBasketBtn.style.boxShadow = '0px 4px 4px rgba(0, 0, 0, 0.25)';
    addToBasketBtn.style.background = 'rgb(195,78,10)';
    addToBasketBtn.style.background = '-moz-' + color;
    addToBasketBtn.style.background = '-webkit-' + color;
    addToBasketBtn.style.background = color;
    var price = document.body.querySelector('meta[itemprop="price"]').content;
    addToBasketBtn.style.textTransform = 'none';
    var labelText = addToBasketBtn.innerText;
    addToBasketBtn.innerText = '€' + price + ' - ' + content;
    // label font-family detected from 'fontspring.com' seems to be one of 'Core Sans' variants, which would need to be downloaded and served or accessed via CDN 
    function setHoverStyle() {
        addToBasketBtn.style.opacity = '0.9';

    };

    function resetHoverStyle() {
        addToBasketBtn.style.opacity = '1';
    }
    addToBasketBtn.addEventListener('mouseover', setHoverStyle);
    addToBasketBtn.addEventListener('mouseout', resetHoverStyle);
};

function setCartPriceDisplayed(price) {
    document.getElementsByClassName('minicart-wrapper__summary-subtotal')[0].innerText = '€' + price;
};
changeButtonStyleAndContent('linear-gradient(91.01deg, #D26E4B 18.06%, #0CBBF4 118.35%)', 'Add to basket');
setCartPriceDisplayed(0.01);