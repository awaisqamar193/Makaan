window.addEventListener("scroll", function () {
  let header = document.querySelector(".main-header");

  if (window.scrollY > 10) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});