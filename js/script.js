let shop = document.getElementById("shop");

let shopItemData = [
  {
    id: "1",
    img: "img/clothes-1.jpg",
    title: "Girl's Shirt",
    price: 129.99,
  },
  {
    id: "2",
    img: "img/clothes-2.jpg",
    title: "pink Shirt",
    price: 129.99,
  },
  {
    id: "3",
    img: "img/clothes-3.jpg",
    title: "Black Wear",
    price: 129.99,
  },
  {
    id: "4",
    img: "img/clothes-4.jpg",
    title: "Girl's Shirt",
    price: 129.99,
  },
]

// let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
  return (shop.innerHTML = shopItemData.map((x) => {
    let { id, img, price, title } = x;
    // let search = basket.find((x) => x.id === id) || [];
    return `
    <div id=product-id-${id} class="col-md-6 col-lg-4 col-xl-3 px-1 py-2 
    box-products womens">
              <div class="products-img position-relative">
                <img src=${img} alt="products-1" class="w-100">
  <span class="position-absolute bg-primary text-white d-flex align-items-center justify-content-center ">-25%</span>
              </div>
  
              <div class="px-1">
                <div class="rating mt-1 text-center">
                  <span class="starts"><i class="fas fa-star"></i></span>
                  <span class="starts"><i class="fas fa-star"></i></span>
                  <span class="starts"><i class="fas fa-star"></i></span>
                  <span class="starts"><i class="fas fa-star"></i></span>
                  <span class="starts"><i class="fas fa-star"></i></span>
                </div>
  
                <div class="d-flex align-items-center justify-content-center mt-2 ms-auto price-quantity">
                  <i onclick="decrement(${id})" class="fa-solid fa-minus"></i>
                  <div id=${id}  class="quantity px-2">
                  
                  </div>
                  <i onclick="increment(${id})" class="fa-solid fa-plus"></i>
                </div>
  
                <div class="d-flex align-items-center justify-content-between mt-2">
                  <span class="text-capitalize fs-5">${title}</span>
                  <span class="fw-bold db-block">$${price}</span>
                </div>
              </div>
            </div>
  
            
            `
  }).join(""));
};
generateShop();


let increment = (id) => {
  console.log(id);
}


// let increment = (id) => {
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