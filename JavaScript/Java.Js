let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".cabecera").style.top = "0";
  } else {
    document.querySelector(".cabecera").style.top = "-100%";
    document.querySelector(".cabecera").classList.add("hidden");
  }
  prevScrollpos = currentScrollPos;
}