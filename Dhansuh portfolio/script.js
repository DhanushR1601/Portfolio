// script.js

// Mobile Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinksContainer = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinksContainer.classList.toggle('active');
});

// Close mobile menu when a link is clicked
const mobileLinks = document.querySelectorAll('.nav-links a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinksContainer.classList.remove('active');
    });
});


// Sticky Navbar Background on Scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Reveal Animations on Scroll
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    revealElements.forEach(el => {
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - revealPoint) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
// Trigger once on load to reveal elements currently on screen
revealOnScroll();

// Active Nav Link Update
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Form Submission Feedback Handling
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    // Check if the user has replaced the placeholder access key.
    const accessKeyInput = document.querySelector('input[name="access_key"]');
    
    if (accessKeyInput.value === "YOUR_ACCESS_KEY_HERE" || accessKeyInput.value === "") {
        e.preventDefault();
        alert("Action Required!\n\nTo make this contact form work, you need to replace 'YOUR_ACCESS_KEY_HERE' in your index.html file with a real Web3Forms Access Key.\n\nRead the instructions to learn how!");
    } else {
        // If they have a real key, let the form submit natively to the Web3Forms action URL.
        // It will redirect them to a success page, and you will receive an email!
    }
});
