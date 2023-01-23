"use strict";

//==== SearchBox
var searchBox = document.querySelector(".search-box");
var searchIcon = document.querySelector(".icon-search");
var closeIcon = document.querySelector(".close-icon");
searchIcon.addEventListener("click", function () {
  searchBox.classList.add("open");
});
closeIcon.addEventListener("click", function () {
  searchBox.classList.remove("open");
});