// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme preference or use default
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        
        // Add a subtle animation to the body when theme changes
        document.body.classList.add('theme-transition');
        setTimeout(() => {
            document.body.classList.remove('theme-transition');
        }, 500);
    });
    
    // Update theme icon based on current theme
    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    }
    
    // Skills hover effect
    const skills = document.querySelectorAll('.skill');

    skills.forEach(skill => {
        skill.addEventListener('mouseenter', () => {
            const level = skill.getAttribute('data-level');
            skill.classList.add(level);
        });

        skill.addEventListener('mouseleave', () => {
            const level = skill.getAttribute('data-level');
            skill.classList.remove(level);
        });
    });
    
    // Project cards animation
    const projectCards = document.querySelectorAll('.project-card');
    
    // Add animation on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    projectCards.forEach(card => {
        observer.observe(card);
    });
    
    // Add hover effect for project buttons
    const projectButtons = document.querySelectorAll('.project-btn');
    
    projectButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
        });
    });
    
    // Add hover effect for the "Get in touch" arrow
    const getTouch = document.getElementById('getTouch');
    if (getTouch) {
        getTouch.addEventListener('mouseenter', () => {
            getTouch.style.cursor = 'pointer';
        });
        
        getTouch.addEventListener('click', () => {
            const mailLink = document.getElementById('mail');
            if (mailLink) {
                mailLink.click();
            }
        });
    }

    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('#nav-links');
    
    hamburger.addEventListener('click', () => {
        // Toggle active class
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-btn').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // Navbar scroll effect
    const navbar = document.querySelector('nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add/remove scrolled class based on scroll position
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    const scrollTopBtn = document.getElementById('scroll-top');
    const projectsSection = document.getElementById('Projects');

    // Function to check scroll position and toggle button visibility
    function toggleScrollButton() {
        const projectsPosition = projectsSection.offsetTop;
        const scrollPosition = window.scrollY;

        if (scrollPosition > projectsPosition) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }

    // Smooth scroll to top function
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Add click event listener to the button
    scrollTopBtn.addEventListener('click', scrollToTop);

    // Add scroll event listener to window
    window.addEventListener('scroll', () => {
        // Throttle the scroll event to improve performance
        if (!window.requestAnimationFrame) {
            // For older browsers
            window.requestAnimationFrame = function(callback) {
                return setTimeout(callback, 1000/60);
            };
        }
        
        window.requestAnimationFrame(toggleScrollButton);
    });
});
// ChatGPT end