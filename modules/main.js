import { cart, manageCart } from "./cart.js";

cart();
manageCart.init();
setTimeout(() => {
    manageCart.stop();
}, 1000);