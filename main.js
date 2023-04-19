/* Menú en desktop */
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
menuEmail.addEventListener('click', toggleDesktopMenu);
function toggleDesktopMenu(){
    const isShoppingCartOpen = productsShoppingCart.classList.contains('inactive')
    
    if(!isShoppingCartOpen){
        productsShoppingCart.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');

}

/* Menú en mobile */
const mobileMenu = document.querySelector('.mobile-menu');
const menuIconMobile = document.querySelector('.menu-mobile');
menuIconMobile.addEventListener('click', toggleMobileMenu);
function toggleMobileMenu(){
    const isShoppingCartOpen = productsShoppingCart.classList.contains('inactive')
    
    if(!isShoppingCartOpen){
        productsShoppingCart.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}


/* Shopping Cart en Mobile o Desktop */
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const productsShoppingCart = document.querySelector('.product-detail');
shoppingCart.addEventListener('click', toggleShoppingCart);
function toggleShoppingCart(){
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isMenuEmailClose = menuEmail.classList.contains('inactive');

    if(!isMenuEmailClose){
        desktopMenu.classList.add('inactive');
    }

    if (!isMobileMenuClose){
        mobileMenu.classList.add('inactive');
    }

    productsShoppingCart.classList.toggle('inactive');
}

const cards = document.querySelector('.cards-container')

/* Lista de Productos */
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Pantalla',
    price: 820,
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})

productList.push({
    name: 'Auto',
    price: 10020,
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})

productList.push({
    name: 'Patineta',
    price: 920,
    image: 'https://images.pexels.com/photos/5463089/pexels-photo-5463089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})


for ( product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price
    const productName = document.createElement('p');
    productName.innerText = product.name;

    const figure = document.createElement('figure');    
    const figureImg = document.createElement('img');
    figureImg.setAttribute('src', './icons/bt_add_to_cart.svg');


    figure.appendChild(figureImg);
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(figure);
    cards.appendChild(productCard);






}