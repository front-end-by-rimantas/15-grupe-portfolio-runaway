"use strict";

function renderTestimonials(target, data) {
    const DOM = document.querySelector(target);

    let testimonialsHTML = '';
    // for ( let i=0; i<data.length; i++ ) {
    //     testimonialsHTML += generateTestimonial(data[i]);
    // }

    const middleIndex = Math.floor(data.length / 2);
    testimonialsHTML = generateTestimonial(data[ middleIndex ]);

    const HTML = `<div class="testimonials" data-index="${middleIndex}">
                    <div class="list">${testimonialsHTML}</div>
                    <div class="controls">
                        <button class="btn previous" type="button">
                            <i class="fa fa-angle-left"></i>
                        </button>
                        <button class="btn next" type="button">
                            <i class="fa fa-angle-right"></i>
                        </button>
                    </div>
                </div>`;

    DOM.innerHTML = HTML;

   const arrows = DOM.querySelectorAll('.controls > .btn');

   arrows.forEach(arrow => arrow.addEventListener('click', updateTestimonials));
   
    return;
}

function generateTestimonial(data) {
    const fullStars = Math.round(data.stars * 2) / 2;

    const fullHTML = '<i class="fa fa-star"></i>'.repeat( Math.floor(fullStars) );
    const halfHTML = '<i class="fa fa-star-half-o"></i>'.repeat( fullStars%1 === 0 ? 0 : 1 );
    const emptyHTML = '<i class="fa fa-star-o"></i>'.repeat( 5 - Math.ceil(fullStars) );

    return `<div class="testimonial">
                        <div class="picture"><img src="${data.picture}"></div>
                        <div class="stars">${fullHTML + halfHTML + emptyHTML}</div>
                        <div class="author">${data.author}</div>
                        <div class="text paragraph">${data.text}</div>
                </div>`;
}

function updateTestimonials( event ) {
    const element = event.target;
    const parent = element.closest('.testimonials')
    let direction = 1;
    if ( element.classList.contains('previous') ) {
        direction = -1;
    }
    
    const currentIndex = parseInt(parent.dataset.index);
    let nextIndex = currentIndex + direction;
    console.log(nextIndex);
    
}

export default renderTestimonials;

