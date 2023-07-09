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
// Start Top Rated


var imagesRatedBox = document.getElementById("imagesRatedBox");
var RatedItemData = [{
  id: "1",
  img: "img/f1.jpg",
  title: "women's rodeo jeans",
  price: 120.99
}, {
  id: "2",
  img: "img/f2.jpg",
  title: "women's rodeo jeans",
  price: 120.99
}, {
  id: "3",
  img: "img/f3.jpg",
  title: "women's rodeo jeans",
  price: 120.99
}, {
  id: "4",
  img: "img/f4.jpg",
  title: "women's rodeo jeans",
  price: 120.99
}, {
  id: "5",
  img: "img/f5.jpg",
  title: "women's rodeo jeans",
  price: 120.99
}];

var generateRated = function generateRated() {
  return imagesRatedBox.innerHTML = RatedItemData.map(function (x) {
    var id = x.id,
        img = x.img,
        title = x.title,
        price = x.price;
    return "\n    <div class=\"row\">\n        <div class=\"col-xl-6 imgs\" id=\"".concat(id, "\">\n          <div class=\"row\">\n            <div class=\"col-3 small-imgs\">\n              <img src=\"").concat(img, "\" onclick=\"clickImg(this)\" alt=\"\">\n            </div>\n            <div class=\"col-9 big-imgs\">\n              <img src=\"").concat(img, "\" id=\"mainBox\" alt=\"\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-xl-6 info d-flex flex-column justify-content-center\">\n          <h3 class=\"pb-3 black text-capitalize mb-4\">").concat(title, "</h3>\n\n          <ul class=\"stars-rated d-flex mb-4\">\n            <li class=\"mx-1\"><i class=\"fa-sharp fa-solid fa-star text-warning\"></i></li>\n            <li class=\"mx-1\"><i class=\"fa-sharp fa-solid fa-star text-warning\"></i></li>\n            <li class=\"mx-1\"><i class=\"fa-sharp fa-solid fa-star text-warning\"></i></li>\n            <li class=\"mx-1\"><i class=\"fa-sharp fa-solid fa-star text-warning\"></i></li>\n            <li class=\"mx-1\"><i class=\"fa-sharp fa-solid fa-star text-warning\"></i></li>\n          </ul>\n\n          <p class=\"text-secondary text-capitalize fs-6 mb-4\">lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquam asperiores odio\n            aperiam veniam quod\n            accusantium perferendis modi, iusto a ab ullam et reprehenderit. Ipsum quasi itaque ipsam aperiam\n            facilis?</p>\n\n          <div class=\"price text-uppercase text-danger fw-bold fs-4 mb-4\">").concat(price, " egp <span class=\"text-decoration-line-through black fs-6\">200.99 egp</span></div>  \n          \n          <a href=\"#\" class=\"btn-primary text-upercase bw-bold border-0 mt-5\">add to cart</a>\n\n        </div>\n      </div>\n    ");
  }).join("");
};

generateRated();

var increment2 = function increment2(id) {
  console.log(id);
};