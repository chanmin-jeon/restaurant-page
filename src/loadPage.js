import './style.css'; 

export default function loadPage() {
    const content = document.querySelector('#content'); 
    const homeContainer = document.createElement('div'); 
    homeContainer.id = 'home-container'; 
    const title = document.createElement('h1'); 
    title.textContent = "Mario's Fine Dining"; 
    const subTitle = document.createElement('h3'); 
    subTitle.textContent = 'Exquisite Italian Cuisine'; 
    homeContainer.append(title); 
    homeContainer.append(subTitle); 
    content.append(homeContainer); 
}