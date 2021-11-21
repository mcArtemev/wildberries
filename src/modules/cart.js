const cart = () => {
    const cartBtn = document.querySelector('.button-cart');
    const cartForm = document.getElementById('modal-cart');
    const closeBtn = cartForm.querySelector('.modal-close');

    cartBtn.addEventListener('click', () => {
        cartForm.style.display = 'flex';
    })

    closeBtn.addEventListener('click', () => {
        cartForm.style.display = '';
    })
}

export default cart;