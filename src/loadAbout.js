import './style.css'; 

export default function loadAbout() {
    const content = document.querySelector('#content'); 
    
    // Create and append About Us title
    const aboutTitle = document.createElement('h2'); 
    aboutTitle.textContent = 'About Us'; 
    content.append(aboutTitle); 
    
    // Create and append About Us container
    const aboutContainer = document.createElement('div'); 
    aboutContainer.id = 'about-container'; 

    // Add headers and paragraphs to aboutContainer
    const sections = [
        { header: 'Welcome to Mario\'s Fine Dining', text: `At Mario's Fine Dining, we bring the authentic taste of Italy to your table. Nestled in the heart of the city, our restaurant is a haven for food enthusiasts who appreciate the artistry of Italian cuisine. From the moment you walk through our doors, you'll be greeted with warm hospitality, a cozy ambiance, and the irresistible aroma of freshly prepared dishes.` },
        { header: 'Our Story', text: `Mario's Fine Dining was founded by Mario Rossi, a passionate chef with roots in a small village in Tuscany. Mario grew up surrounded by the rich culinary traditions of his homeland, where he learned the secrets of Italian cooking from his nonna. With a dream to share the flavors of Italy with the world, Mario moved to the city and opened his own restaurant, bringing a piece of Tuscany to every plate he serves.` },
        { header: 'Our Philosophy', text: `At Mario's Fine Dining, we believe that food is an expression of love and culture. Our philosophy is simple: use the freshest ingredients, prepare dishes with care and passion, and create an unforgettable dining experience for every guest. We source our ingredients from local farms and markets, ensuring that each dish is made with the highest quality produce, meats, and cheeses.` },
        { header: 'Our Menu', text: `Our menu is a celebration of traditional Italian cuisine with a modern twist. From classic pasta dishes like Spaghetti Carbonara and Lasagna Bolognese to contemporary creations like Risotto ai Funghi, each dish is crafted to perfection. Our chefs take pride in making everything from scratch, including our pasta, sauces, and desserts. Don't forget to pair your meal with a glass of our carefully selected Italian wines or a refreshing Prosecco.` },
        { header: 'Our Team', text: `Our team is a family of dedicated professionals who share a passion for exceptional food and service. From our talented chefs in the kitchen to our attentive servers, every member of our team is committed to providing you with a memorable dining experience. We believe that great food and great service go hand in hand, and we strive to exceed your expectations every time you visit us.` },
        { header: 'Join Us', text: `Whether you're celebrating a special occasion, enjoying a romantic dinner, or simply looking for a delicious meal, Mario's Fine Dining is the perfect destination. Join us and experience the true flavors of Italy in a warm and inviting atmosphere. We look forward to welcoming you to our table.` }
    ];

    sections.forEach((section) => {
        const header = document.createElement('h3');
        header.textContent = section.header;
        const paragraph = document.createElement('p');
        paragraph.textContent = section.text;
        aboutContainer.append(header);
        aboutContainer.append(paragraph);
    });

    content.append(aboutContainer); 
}