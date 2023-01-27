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
}); //==== Counter

var section = document.querySelector(".number-container");
var number = document.querySelectorAll(".nums .number");
var started = false;

window.onscroll = function () {
  if (window.scrollY <= section.offsetTop) {
    if (!started) {
      number.forEach(function (num) {
        return startCount(num);
      });
    }

    started = true;
  }
};

function startCount(el) {
  var goal = el.dataset.goal;
  var count = setInterval(function () {
    el.textContent++;

    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 1000 / goal);
} //==== Filter
// init Isotope


var $grid = $('.products-list').isotope({// options
}); // filter items on button click

$('.filter-button-groub').on('click', 'button', function () {
  var filterValue = $(this).attr('data-filter');
  resetFilterBtns();
  $(this).addClass("active-filter-btn");
  $grid.isotope({
    filter: filterValue
  });
});
var filterBtns = $(".filter-button-groub").find("button");

function resetFilterBtns() {
  filterBtns.each(function () {
    $(this).removeClass("active-filter-btn");
  });
}