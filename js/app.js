//==== SearchBox
const searchBox = document.querySelector(".search-box");
const searchIcon = document.querySelector(".icon-search");
const closeIcon = document.querySelector(".close-icon");


searchIcon.addEventListener("click", () => {
  searchBox.classList.add("open");
});


closeIcon.addEventListener("click", () => {
  searchBox.classList.remove("open");
});
