import getData from "./getData";
import renderGoods from "./renderGoods";

const load = () => {
    const cartBtn = document.getElementById('cart')
    
    getData().then((data) => {
        renderGoods(data)
    })
}

export default load