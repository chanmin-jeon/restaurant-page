import loadPage from './loadPage.js'; 
import loadMenu from './loadMenu.js'; 
import loadAbout from './loadAbout.js'; 
import loadContact from './loadContact.js';

// adding event listeners 

const homeBtn = document.querySelector('#home-btn'); 

homeBtn.addEventListener('click', () => {
    document.querySelector('#content').innerHTML = ''; 
    loadPage(); 
})

const aboutBtn = document.querySelector('#about-btn'); 

aboutBtn.addEventListener('click', () => {
    document.querySelector('#content').innerHTML = ''; 
    loadAbout(); 
})

const menuBtn = document.querySelector('#menu-btn'); 

menuBtn.addEventListener('click', () => {
    document.querySelector('#content').innerHTML = ''; 
    loadMenu(); 
})

const contactBtn = document.querySelector('#contact-btn'); 

contactBtn.addEventListener('click', () => {
    document.querySelector('#content').innerHTML = ''; 
    loadContact(); 
})

loadPage(); 