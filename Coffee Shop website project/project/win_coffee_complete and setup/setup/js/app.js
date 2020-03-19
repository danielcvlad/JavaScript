// hide preloader

// window event listener
eventListeners();
function eventListeners() {
  const ui = new UI();
  //preloader
  window.addEventListener("load", function() {
    ui.hidePreloader();
  });
  // nav btn
  document.querySelector(".navBtn").addEventListener("click", function() {
    ui.showNav();
  });
  //control background video
  document
    .querySelector(".video__switch")
    .addEventListener("click", function() {
      ui.videoControls();
    });
}
// submit the form
document
  .querySelector(".drink-form")
  .addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.querySelector(".input-name").value;
    const lastName = document.querySelector(".input-lastname").value;
    const email = document.querySelector(".input-email").value;

    let value = ui.checkEmpty(name, lastname, email);
    console.log(value);
    if (value) {
    } else {
      ui.showFeedback("some form values empty", "error");
    }
  });
//constructor function
function UI() {}

// hide preloader
UI.prototype.hidePreloader = function() {
  document.querySelector(".preloader").style.display = "none";
};
// show Nav
UI.prototype.showNav = function() {
  document.querySelector(".nav").classList.toggle("nav--show");
};
// play/pause the vidoe
UI.prototype.videoControls = function() {
  let btn = document.querySelector(".video__switch-btn");
  if (!btn.classList.contains("btnSlide")) {
    btn.classList.add("btnSlide");
    document.querySelector(".video__item").pause();
  } else {
    btn.classList.remove("btnSlide");
    document.querySelector(".video__item").play();
  }
};
// check for empty values
UI.prototype.checkEmpty = function(name, lastname, email) {
  let result;
  if (name === "" || lastname === "" || email === "") {
    result = false;
  } else {
    result = true;
  }
  return result;
};
UI.prototype.showFeedback = function(text, type) {
  if (type === "success") {
  } else if (type === "error") {
    let feedback = document.querySelector(".drink-form__feedback");
    feedback.classList.add("error");
  }
};
