"use strict";

function renderTestimonials(target, data) {
    const DOM = document.querySelector(target);

    let HTML = '';
    // for ( let i=0; i<data.length; i++ ) {
    //     HTML += generateTestimonial(data[i]);
    // }

    const random = Math.floor (Math.random() * data.length);
    HTML = generateTestimonial(data[random]);

    DOM.innerHTML = HTML;
    return;
}

function generateTestimonial(data) {
    let HTML = `<div class="testimonial">
                    <div class="picture"><img src="${data.picture}"></div>
                    <div class="stars">${data.stars}</div>
                    <div class="author">${data.author}</div>
                    <div class="text">${data.text}</div>
                </div>`;

    return HTML;
}

export default renderTestimonials;

