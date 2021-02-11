const cart = {
    "p92779": {
        "name": "Банановый торт",
        "url": "#",
        "image": "./image/banana.png",
        "price": 1100.00
    },
    "p93039": {
        "name": "Мечта",
        "url": "#",
        "image": "./image/dream.png",
        "price": 872.00
    },
    "p63553250": {
        "name": "Джулия",
        "url": "#",
        "image": "./image/gulia.png",
        "price": 484.00
    },
    "p93127": {
        "name": "Медовый торт",
        "url": "#",
        "image": "./image/honey.png",
        "price": 2880.00
    },
    "p79946990": {
        "name": "Могнолия",
        "url": "#",
        "image": "./image/magnolia.png",
        "price": 4238.00
    },
    "p6533206": {
        "name": "Малиновый торт",
        "url": "#",
        "image": "./image/malina.png",
        "price": 2416.00
    },
    "p6533207": {
        "name": "Щелкунчик",
        "url": "#",
        "image": "./image/nutcracker.png",
        "price": 900.00
    },
    "p6533208": {
        "name": "Пина-колада",
        "url": "#",
        "image": "./image/pinacolada.png",
        "price": 1000.00
    },
    "p6533209": {
        "name": "Красный бархат",
        "url": "#",
        "image": "./image/redvelvet.png",
        "price": 880.00
    },
}
let out = '<div class="pricing-table row">';
for (let key in cart) {

    out += `<div class="col col-md-6 col-lg-4">`;
    out += `<div class="package featured text-center">`;
    out += `<h2>${cart[key]['name']}</h2>`;
    out += `<img src="${cart[key]['image']}">`;
    out += `<p class="price">${cart[key]['price']} RUB</p>`;
    out += `<button class="to-cart button-primary" data-articul="${key}">В корзину</button>`;
    out += `</div>`;
    out += `</div>`;
}
out += `</div>`;
document.querySelector('.goods').innerHTML = out;

const data = {}; // сюда добавляю товары которые в корзину

document.querySelector('.goods').addEventListener('click', event => {
    if (event.target.classList.contains('to-cart')) {
        let articul = event.target.dataset['articul'];
        if (data[articul] !== undefined) {
            data[articul]['count']++;
        }
        else {
            data[articul] = cart[articul];
            data[articul]['count'] = 1;
        }
        localStorage.setItem('cart', JSON.stringify(data));
    }
})