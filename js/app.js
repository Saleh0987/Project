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

//==== Counter
let section = document.querySelector(".number-container");
let number = document.querySelectorAll(".nums .number");

let started = false;

window.onscroll = function () {
  if (window.scrollY <= section.offsetTop) {
    if (!started) {
      number.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count)
    }
  }, 1000 / goal);
}

//==== Filter
// init Isotope
var $grid = $('.products-list').isotope({
  // options
});

// filter items on button click
$('.filter-button-groub').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  resetFilterBtns();
  $(this).addClass("active-filter-btn");
  $grid.isotope({ filter: filterValue });
});


var filterBtns = $(".filter-button-groub").find("button");
function resetFilterBtns() {
  filterBtns.each(function () {
    $(this).removeClass("active-filter-btn");
  })
}








