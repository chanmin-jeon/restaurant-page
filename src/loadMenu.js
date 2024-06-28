import './style.css';

export default function loadMenu() {
    const content = document.querySelector('#content');
    
    // Create and append menu title
    const menuTitle = document.createElement('h2');
    menuTitle.id = 'menu-title';
    menuTitle.textContent = 'Menu';
    content.append(menuTitle);
    
    // Create and append menu container
    const menuContainer = document.createElement('div');
    menuContainer.id = 'menu-container';
    
    // Function to create a menu section
    function createMenuSection(titleText, items) {
        const sectionArticle = document.createElement('article');
        const sectionTitle = document.createElement('h3');
        sectionTitle.textContent = titleText;
        sectionArticle.append(sectionTitle);
        
        const sectionList = document.createElement('ul');
        items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${item.name}</strong> - ${item.description} ${item.price}`;
            sectionList.append(listItem);
        });
        
        sectionArticle.append(sectionList);
        return sectionArticle;
    }
    
    // Appetizers
    const appetizers = [
        { name: 'Bruschetta al Pomodoro', description: 'Grilled bread topped with fresh tomatoes, garlic, basil, and olive oil.', price: '$8' },
        { name: 'Calamari Fritti', description: 'Crispy fried calamari served with marinara sauce and lemon wedges.', price: '$12' },
        { name: 'Caprese Salad', description: 'Slices of fresh mozzarella, tomatoes, and basil, drizzled with balsamic reduction and olive oil.', price: '$10' },
        { name: 'Arancini', description: 'Deep-fried rice balls stuffed with mozzarella and peas, served with marinara sauce.', price: '$9' },
        { name: 'Prosciutto e Melone', description: 'Thinly sliced prosciutto served with fresh cantaloupe.', price: '$11' },
    ];
    
    // First Courses
    const firstCourses = [
        { name: 'Spaghetti Carbonara', description: 'Spaghetti tossed with pancetta, eggs, Parmesan cheese, and black pepper.', price: '$15' },
        { name: 'Fettuccine Alfredo', description: 'Fettuccine pasta in a creamy Parmesan cheese sauce.', price: '$14' },
        { name: 'Lasagna Bolognese', description: 'Layers of pasta, meat sauce, béchamel, and Parmesan cheese baked to perfection.', price: '$16' },
        { name: 'Ravioli di Ricotta e Spinaci', description: 'Homemade ravioli filled with ricotta cheese and spinach, served with a sage butter sauce.', price: '$15' },
        { name: 'Risotto ai Funghi', description: 'Creamy Arborio rice with wild mushrooms, Parmesan cheese, and truffle oil.', price: '$18' },
    ];
    
    // Main Courses
    const mainCourses = [
        { name: 'Pollo alla Parmigiana', description: 'Breaded chicken breast topped with marinara sauce and melted mozzarella, served with a side of spaghetti.', price: '$20' },
        { name: 'Osso Buco', description: 'Braised veal shank cooked with vegetables, white wine, and broth, served with saffron risotto.', price: '$28' },
        { name: 'Scaloppine al Limone', description: 'Thin slices of veal cooked in a lemon and white wine sauce, served with roasted potatoes and vegetables.', price: '$22' },
        { name: 'Pesce alla Griglia', description: 'Grilled fish of the day, served with a lemon-caper sauce, roasted vegetables, and herb rice.', price: '$25' },
        { name: 'Filetto di Manzo', description: 'Grilled beef tenderloin served with a red wine reduction, mashed potatoes, and sautéed spinach.', price: '$30' },
    ];
    
    // Desserts
    const desserts = [
        { name: 'Tiramisu', description: 'Layers of espresso-soaked ladyfingers and mascarpone cheese, dusted with cocoa powder.', price: '$8' },
        { name: 'Panna Cotta', description: 'Creamy vanilla custard topped with a mixed berry compote.', price: '$7' },
        { name: 'Cannoli Siciliani', description: 'Crispy pastry tubes filled with sweet ricotta cheese, chocolate chips, and candied fruit.', price: '$6' },
        { name: 'Torta al Limone', description: 'Lemon tart with a buttery crust, topped with fresh whipped cream.', price: '$7' },
        { name: 'Gelato Misto', description: 'Assorted flavors of traditional Italian ice cream.', price: '$5' },
    ];
    
    // Create and append each section
    menuContainer.append(createMenuSection('Appetizers', appetizers));
    menuContainer.append(createMenuSection('First Courses', firstCourses));
    menuContainer.append(createMenuSection('Main Courses', mainCourses));
    menuContainer.append(createMenuSection('Desserts', desserts));
    
    content.append(menuContainer);
}
