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
});
// ChatGPT end