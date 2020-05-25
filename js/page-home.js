"use strict";

import skills from './data/skills.js';
// import experience from './data/experience.js';

import renderProgressBar from './components/progress-bar.js';

const progressBarsSelector = '#skills .skills-data-list';
renderProgressBar( progressBarsSelector, skills );

const progressBars = document.querySelectorAll( progressBarsSelector + ' > .progress-bar');


window.addEventListener('scroll', () => {
    const windowBottomlHeight = window.scrollY + window.innerHeight;

    for (let i=0; i<progressBars.length; i++) {
    
        const pg = progressBars[i];
        const pgBottomHeight = pg.offsetTop + pg.offsetHeight;
        
        if ( pgBottomHeight < windowBottomlHeight ) {
            pg.dataset.animated = 'true';
        } 
    }
});