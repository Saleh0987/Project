//==== SearchBox
const searchBox = document.querySelector(".search-box");
const searchIcon = document.querySelector(".icon");
const closeIcon = document.querySelector(".close-icon");


searchIcon.addEventListener("click", () => {
  searchBox.classList.add("open");
});


closeIcon.addEventListener("click", () => {
  searchBox.classList.remove("open");
});
// var swiper = new Swiper(".home-slider", {
//   spaceBetween: 10,
//   centeredSlides: true,
//   autoplay: {
//     delay: 5500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   loop:true,
// });