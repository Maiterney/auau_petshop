function cart() {
    console.log('Eu sou o carrinho');
}

const manageCart = (()=>{
    function startCart() {
        console.log('Iniciei o carrinho');
    }
    function endCart() {
        console.log('Finalizei o carrinho');
    }
    return {
        init:startCart,
        stop:endCart
    }
})();


export {
    cart, manageCart
}