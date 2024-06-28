import './style.css'; 

export default function loadContact() {
    const content = document.querySelector('#content'); 
    const contactTitle = document.createElement('h2'); 
    contactTitle.textContent = 'Contact Us';
    content.append(contactTitle); 
    const contactInfo = document.createElement('div'); 
    contactInfo.id = 'contact-info';
    const contactSection = [
        {header: 'Location', text: '1873 Pizza St. Nw Italy'}, 
        {header: 'Hours', text: 'Sunday: 10am-3pm, Mon-Sat: 9am-11pm'}, 
        {header: 'Phone', text: '123-CALL-PIZZA'}, 
        {header: 'Email', text: 'mariosfinedining@gmail.com'}
    ]
    contactSection.forEach((section) => {
        const sectionContainer = document.createElement('div'); 
        const sectionHeader = document.createElement('h3'); 
        sectionHeader.textContent = section.header; 
        const sectionText = document.createElement('p'); 
        sectionText.textContent = section.text; 
        sectionContainer.append(sectionHeader); 
        sectionContainer.append(sectionText); 
        contactInfo.append(sectionContainer); 
        }
    )

    content.append(contactInfo); 
}