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



// Start Top Rated
let imagesRatedBox = document.getElementById("imagesRatedBox");

let RatedItemData = [
  {
    id: "1",
    img: "img/f1.jpg",
    title: "women's rodeo jeans",
    price: 120.99,
  },
  {
    id: "2",
    img: "img/f2.jpg",
    title: "women's rodeo jeans",
    price: 120.99,
  },
  {
    id: "3",
    img: "img/f3.jpg",
    title: "women's rodeo jeans",
    price: 120.99,
  },
  {
    id: "4",
    img: "img/f4.jpg",
    title: "women's rodeo jeans",
    price: 120.99,
  },
  {
    id: "5",
    img: "img/f5.jpg",
    title: "women's rodeo jeans",
    price: 120.99,
  },
]

let generateRated = () => {
  return (imagesRatedBox.innerHTML = RatedItemData.map((x) => {
    let { id, img, title, price } = x;
    
    return `
    <div class="row">
        <div class="col-xl-6 imgs" id="${id}">
          <div class="row">
            <div class="col-3 small-imgs">
              <img src="${img}" onclick="clickImg(this)" alt="">
            </div>
            <div class="col-9 big-imgs">
              <img src="${img}" id="mainBox" alt="">
            </div>
          </div>
        </div>

        <div class="col-xl-6 info d-flex flex-column justify-content-center">
          <h3 class="pb-3 black text-capitalize mb-4">${title}</h3>

          <ul class="stars-rated d-flex mb-4">
            <li class="mx-1"><i class="fa-sharp fa-solid fa-star text-warning"></i></li>
            <li class="mx-1"><i class="fa-sharp fa-solid fa-star text-warning"></i></li>
            <li class="mx-1"><i class="fa-sharp fa-solid fa-star text-warning"></i></li>
            <li class="mx-1"><i class="fa-sharp fa-solid fa-star text-warning"></i></li>
            <li class="mx-1"><i class="fa-sharp fa-solid fa-star text-warning"></i></li>
          </ul>

          <p class="text-secondary text-capitalize fs-6 mb-4">lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquam asperiores odio
            aperiam veniam quod
            accusantium perferendis modi, iusto a ab ullam et reprehenderit. Ipsum quasi itaque ipsam aperiam
            facilis?</p>

          <div class="price text-uppercase text-danger fw-bold fs-4 mb-4">${price} egp <span class="text-decoration-line-through black fs-6">200.99 egp</span></div>  
          
          <a href="#" class="btn-primary text-upercase bw-bold border-0 mt-5">add to cart</a>

        </div>
      </div>
    `
  }).join(""));
};
generateRated();

let increment2 = (id) => {
  console.log(id);
}