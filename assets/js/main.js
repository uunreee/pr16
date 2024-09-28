"use strict";
let phoneBtn = document.querySelector(".phone");
let sale = document.querySelector(".sale");

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        phoneBtn.classList.add("show");
      } else {
        phoneBtn.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.5,
  }
);

observer.observe(sale);