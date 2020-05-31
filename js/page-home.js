"use strict";

// import experience from './data/experience.js';

import skills from "./data/skills.js";
import renderProgressBar from "./components/progress-bar.js";
import renderTestimonials from "./testimonials_section_js/testimonials.js";
import testimonialsData from "./testimonials_section_js/testimonials_data.js";
import blogItemData from './blog-section-js/blog-data.js';
import BlogItem from './blog-section-js/blog-section-logic.js';
import servicesSectionData from './services section.js/sevices-section-data.js';
import ServiceItem from './services section.js/services.js';
import portfolioSectionData from './portfolio-section-js.js/portfolio-data.js';
import PortfolioItem from './portfolio-section-js.js/portfolio-logic.js';
//import galleryFilters from './portfolio-section-js.js/portfolio-gallery-filters.js';

const portfolioItemSelector = '#portfolio_items .row';
new PortfolioItem( portfolioItemSelector, portfolioSectionData);

const serviceItemSelector = '#service_items .row';
new ServiceItem( serviceItemSelector, servicesSectionData);


const blogItemSelector = '#blog_items .row';
new BlogItem( blogItemSelector, blogItemData);

const progressBarsSelector = "#skills .skills-data-list";
renderProgressBar(progressBarsSelector, skills);

const testimonialsSelector = '#testimonials_block';
renderTestimonials(testimonialsSelector, testimonialsData);


const progressBars = document.getElementsByClassName("toFindWhereToLoad");


window.addEventListener("scroll", () => {
  
  const windowBottomlHeight = window.scrollY + window.innerHeight;

  for (let i = 0; i < progressBars.length; i++) {
    const pg = progressBars[i];
    
    const pgBottomHeight = pg.offsetTop + pg.offsetHeight;

   if (pgBottomHeight < windowBottomlHeight) {
      pg.classList.add("loading");
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
