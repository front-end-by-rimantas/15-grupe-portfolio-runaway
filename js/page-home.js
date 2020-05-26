"use strict";

import skills from "./data/skills.js";
// import experience from './data/experience.js';

import renderProgressBar from "./components/progress-bar.js";


const progressBarsSelector = "#skills .skills-data-list";
renderProgressBar(progressBarsSelector, skills);

import blogItemData from './blog-section-js/blog-data.js';
import BlogItem from './blog-section-js/blog-section-logic.js';



const progressBarsSelector = '#skills .skills-data-list';
renderProgressBar( progressBarsSelector, skills );


const progressBars = document.querySelectorAll(
  progressBarsSelector + " > .progress-bar"
);

window.addEventListener("scroll", () => {
  const windowBottomlHeight = window.scrollY + window.innerHeight;

  for (let i = 0; i < progressBars.length; i++) {
    const pg = progressBars[i];
    const pgBottomHeight = pg.offsetTop + pg.offsetHeight;

    if (pgBottomHeight < windowBottomlHeight) {
      pg.dataset.animated = "true";
    }

  }
});

//nav bar js place

var navbar = document.querySelector(".nav");

window.onscroll = function () {
  if (window.pageYOffset > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};
// ismanus scrollas i ten kur reikia

window.scrollToAbout = function () {
  const sectionAbout = document.getElementById("sectionAbout");
  sectionAbout.scrollIntoView({ behavior: "smooth" });
};

window.scrollToSkills = function () {
  const skills = document.getElementById("skills");
  skills.scrollIntoView({ behavior: "smooth" });
};
window.scrollToServices = function () {
  const services = document.getElementById("services");
  services.scrollIntoView({ behavior: "smooth" });
};
window.scrollToPortfolio = function () {
  const portfolio = document.getElementById("portfolio");
  portfolio.scrollIntoView({ behavior: "smooth" });
};
window.scrollToTestimonials = function () {
  const testimonials = document.getElementById("testimonials");
  testimonials.scrollIntoView({ behavior: "smooth" });
};
window.scrollToBlog = function () {
  const blog = document.getElementById("blog");
  blog.scrollIntoView({ behavior: "smooth" });
};
window.scrollToContact = function () {
  const contact = document.getElementById("contact");
  contact.scrollIntoView({ behavior: "smooth" });
};

});


const blogItemSelector = '#blog_items  .row';
new BlogItem( blogItemSelector, blogItemData);

