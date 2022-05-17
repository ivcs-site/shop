const cart = () => {
    const cartModal = document.querySelector('.cart')
    const cartBtnOpen = document.getElementById('cart')
    const cartBtnClose = cartModal.querySelector('.cart-close')

    const cartOpen = () => {
        cartModal.style.display = 'flex'
    }

    const cartClose = () => {
        cartModal.style.display = 'none'
    }

    cartBtnOpen.addEventListener('click', cartOpen)
    cartBtnClose.addEventListener('click', cartClose)
}

export default cart