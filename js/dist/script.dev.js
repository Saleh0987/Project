"use strict";

var shop = document.getElementById("shop");
var shopItemData = [{
  id: "1",
  img: "img/clothes-1.jpg",
  title: "Girl's Shirt",
  price: 129.99
}, {
  id: "2",
  img: "img/clothes-2.jpg",
  title: "pink Shirt",
  price: 129.99
}, {
  id: "3",
  img: "img/clothes-3.jpg",
  title: "Black Wear",
  price: 129.99
}, {
  id: "4",
  img: "img/clothes-4.jpg",
  title: "Girl's Shirt",
  price: 129.99
}]; // let basket = JSON.parse(localStorage.getItem("data")) || [];

var generateShop = function generateShop() {
  return shop.innerHTML = shopItemData.map(function (x) {
    var id = x.id,
        img = x.img,
        price = x.price,
        title = x.title; // let search = basket.find((x) => x.id === id) || [];

    return "\n    <div id=product-id-".concat(id, " class=\"col-md-6 col-lg-4 col-xl-3 px-1 py-2 \n    box-products womens\">\n              <div class=\"products-img position-relative\">\n                <img src=").concat(img, " alt=\"products-1\" class=\"w-100\">\n  <span class=\"position-absolute bg-primary text-white d-flex align-items-center justify-content-center \">-25%</span>\n              </div>\n  \n              <div class=\"px-1\">\n                <div class=\"rating mt-1 text-center\">\n                  <span class=\"starts\"><i class=\"fas fa-star\"></i></span>\n                  <span class=\"starts\"><i class=\"fas fa-star\"></i></span>\n                  <span class=\"starts\"><i class=\"fas fa-star\"></i></span>\n                  <span class=\"starts\"><i class=\"fas fa-star\"></i></span>\n                  <span class=\"starts\"><i class=\"fas fa-star\"></i></span>\n                </div>\n  \n                <div class=\"d-flex align-items-center justify-content-center mt-2 ms-auto price-quantity\">\n                  <i onclick=\"decrement(").concat(id, ")\" class=\"fa-solid fa-minus\"></i>\n                  <div id=").concat(id, "  class=\"quantity px-2\">\n                  \n                  </div>\n                  <i onclick=\"increment(").concat(id, ")\" class=\"fa-solid fa-plus\"></i>\n                </div>\n  \n                <div class=\"d-flex align-items-center justify-content-between mt-2\">\n                  <span class=\"text-capitalize fs-5\">").concat(title, "</span>\n                  <span class=\"fw-bold db-block\">$").concat(price, "</span>\n                </div>\n              </div>\n            </div>\n  \n            \n            ");
  }).join("");
};

generateShop();

var increment = function increment(id) {
  console.log(id);
}; // let increment = (id) => {
//   let selectedItem = id;
//   // let search = basket.find((x) => x.id === selectedItem.id);
//   if (search === undefined) {
//     basket.push({
//       id: selectedItem.id,
//       item: 1,
//     });
//   } else {
//     search.item += 1;
//   }
//   // console.log(basket);
//   update(selectedItem.id);
//   // localStorage.setItem('data', JSON.stringify(basket));
// };
// let decrement = (id) => { 
//   let selectedItem = id;
//   let search = basket.find((x) => x.id === selectedItem.id);
//   if (search === undefined) return;
//   if (search.item === 0) return;
//   else { search.item -= 1; }
//   update(selectedItem.id);
//   // basket = basket.filter((x) => x.item !== 0);
//   // localStorage.setItem('data', JSON.stringify(basket));
// };
// let update = (id) => { 
//   let search = basket.find((x) => x.id === id);
//   document.getElementById(id).innerHTML= search.item;
//   // calculation();
// };
// let calculation = () => {
//   let cartIcon = document.getElementById("catAmount");
//   cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
// };
// calculation();