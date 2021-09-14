const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

const setListner = function (target, type, listner) {
  if (!target) {
    return;
  }
  target.addEventListener(type, listner);
}

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

const cartButtons = document.querySelectorAll(".catalog-item__button");
const myModal = document.querySelector(".modal");

for (var i = 0; i < cartButtons.length; i++) {
  setListner(cartButtons[i], "click", function (e) {
    e.preventDefault();
    myModal.classList.add("modal__open");
    if (myModal.classList.contains("modal__open")) {
      window.addEventListener("click", function (e) {
        if (e.target === myModal) {
          myModal.classList.remove("modal__open");
        }
      })
    }
  });
};

const indexButton = document.querySelector(".button--offer");
setListner(indexButton, "click", function (openOrder) {
  openOrder.preventDefault();
  myModal.classList.add("modal__open");
  if (myModal.classList.contains("modal__open")) {
    window.addEventListener("click", function (e) {
      if (e.target === myModal) {
        myModal.classList.remove("modal__open");
      }
    })
  }

})
