// Open menu
document.addEventListener('DOMContentLoaded', function() { 

document.addEventListener('click', documentClick);

function documentClick(e) {
    const targetItem = e.target;
    if(targetItem.closest('.icon-menu')){
        document.documentElement.classList.toggle('menu-open');
    }
}

// Scroll
window.onscroll = function() {
  var el = document.getElementsByTagName('header')[0];
  var className = 'small';
  if (el.classList) {
    if (window.scrollY > 10)
      el.classList.add(className);
    else
      el.classList.remove(className);
  }
};

// Click on Button
const button = document.getElementById('button-our-projects-more');
        const blocks = document.querySelectorAll('.block-container');

        button.addEventListener('click', function() {
            blocks.forEach(block => {
                block.style.display = block.style.display === 'none' ? 'flex' : 'none';
            });
        });
   // SCROLL HEADER
// const header = document.querySelector("header");
// let lastScrollTop = 0;

// window.addEventListener("scroll", () => {
//   const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

//   if (currentScroll > lastScrollTop) {
//     // Прокрутка вниз
//     header.style.top = "-116px";
//   } else {
//     // Прокрутка вверх
//     header.style.top = "0";
//   }
  
//   lastScrollTop = Math.max(currentScroll, 0);
// });
// });