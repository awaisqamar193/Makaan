window.addEventListener("scroll", function () {
  let header = document.querySelector(".main-header");

  if (window.scrollY > 10) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});


let currentPage = window.location.pathname.split("/").pop();

// agar home page ho (empty URL)
if (currentPage === "") {
  currentPage = "index.html";
}

let navLinks = document.querySelectorAll(".navbar .nav-link");

navLinks.forEach(function(link) {
  let linkHref = link.getAttribute("href");

  if (linkHref === currentPage) {
    link.classList.add("active");
  }
});

window.addEventListener("scroll", function () {
  let btn = document.getElementById("fixed-tag");

  if (window.scrollY > 50) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});