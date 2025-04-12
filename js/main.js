// main.js - JavaScript for portfolio website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive elements
    initSmoothScrolling();
    initMobileNavigation();
    setupContactForm();
    initScrollAnimation();
    setupThemeToggle();
    setupProjectFilters();
  });
  
  // Smooth scrolling for navigation links
  function initSmoothScrolling() {
    document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
          top: targetElement.offsetTop - 60,
          behavior: 'smooth'
        });
      });
    });
  }
  
  // Mobile navigation toggle
  function initMobileNavigation() {
    // Add mobile navigation button if it doesn't exist
    const nav = document.querySelector('nav');
    if (!document.querySelector('.nav-toggle')) {
      const navToggle = document.createElement('button');
      navToggle.className = 'nav-toggle';
      navToggle.innerHTML = '<i class="fas fa-bars"></i>';
      nav.insertBefore(navToggle, nav.firstChild);
      
      navToggle.addEventListener('click', toggleMobileNav);
    }
    
    // Add responsive classes
    const navItems = document.querySelector('nav ul');
    navItems.classList.add('nav-items');
    
    // Check if we need to collapse the menu on page load
    checkMobileNavState();
    
    // Recheck on window resize
    window.addEventListener('resize', checkMobileNavState);
  }
  
  function checkMobileNavState() {
    const navItems = document.querySelector('nav ul');
    if (window.innerWidth <= 768) {
      navItems.classList.add('mobile');
      if (!navItems.classList.contains('active')) {
        navItems.style.display = 'none';
      }
    } else {
      navItems.classList.remove('mobile');
      navItems.style.display = '';
    }
  }
  
  function toggleMobileNav() {
    const navItems = document.querySelector('nav ul');
    navItems.classList.toggle('active');
    
    if (navItems.classList.contains('active')) {
      navItems.style.display = 'flex';
    } else {
      navItems.style.display = 'none';
    }
  }
  
  // Handle contact form submissions
  function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Basic form validation
        if (!name || !email || !subject || !message) {
          alert('Please fill in all fields');
          return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          alert('Please enter a valid email address');
          return;
        }
        
        // In a real implementation, you would send this data to a server
        // using fetch or XMLHttpRequest
        /*
        fetch('your-server-endpoint', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name,
            email: email,
            subject: subject,
            message: message
          }),
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          alert('Thank you for your message! I will get back to you soon.');
          contactForm.reset();
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('Sorry, there was an error sending your message. Please try again later.');
        });
        */
        
        // For now, just show a success message
        alert(`Thank you for your message, ${name}! I will get back to you soon.`);
        
        // Reset the form
        contactForm.reset();
      });
    }
  }
  
  // Add scroll detection for animations and sticky navigation
  function initScrollAnimation() {
    // Detect scroll for sticky navigation
    window.addEventListener('scroll', function() {
      const nav = document.querySelector('nav');
      if (window.scrollY > 100) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
      
      // Animate sections when they come into view
      animateSectionsOnScroll();
    });
    
    // Initial check for elements in view
    animateSectionsOnScroll();
  }
  
  // Animate elements when they scroll into view
  function animateSectionsOnScroll() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
      // Add fade-in class if not already present
      if (!section.classList.contains('fade-in')) {
        section.classList.add('fade-in');
      }
      
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      // If section is in viewport
      if (sectionTop < windowHeight - 100) {
        section.classList.add('visible');
      }
    });
  }
  
  // Theme toggle functionality
  function setupThemeToggle() {
    // Create theme toggle button if it doesn't exist
    if (!document.querySelector('.theme-toggle')) {
      const themeToggle = document.createElement('div');
      themeToggle.className = 'theme-toggle';
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      document.body.appendChild(themeToggle);
      
      themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('dark-theme');
    if (savedTheme === 'true') {
      document.body.classList.add('dark-theme');
      document.querySelector('.theme-toggle').innerHTML = '<i class="fas fa-sun"></i>';
    }
  }
  
  function toggleTheme() {
    const themeToggle = document.querySelector('.theme-toggle');
    document.body.classList.toggle('dark-theme');
    
    // Update icon
    if (document.body.classList.contains('dark-theme')) {
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
    
    // Save theme preference to localStorage
    const isDarkTheme = document.body.classList.contains('dark-theme');
    localStorage.setItem('dark-theme', isDarkTheme);
  }
  
  // Project filter functionality
  function setupProjectFilters() {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const projectCards = document.querySelectorAll('.project-card');
      if (projectCards.length > 0) {
        // Create filter buttons container if it doesn't exist
        if (!document.querySelector('.project-filters')) {
          const filtersContainer = document.createElement('div');
          filtersContainer.className = 'project-filters';
          
          // Get all unique technologies
          const technologies = new Set();
          technologies.add('all');
          
          projectCards.forEach(card => {
            const techTags = card.querySelectorAll('.tech-tag');
            techTags.forEach(tag => {
              technologies.add(tag.textContent.toLowerCase());
            });
          });
          
          // Create filter buttons
          technologies.forEach(tech => {
            const filterBtn = document.createElement('button');
            filterBtn.className = 'filter-btn';
            filterBtn.textContent = tech.charAt(0).toUpperCase() + tech.slice(1);
            filterBtn.setAttribute('data-filter', tech);
            
            if (tech === 'all') {
              filterBtn.classList.add('active');
            }
            
            filterBtn.addEventListener('click', function() {
              // Update active state
              document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
              });
              this.classList.add('active');
              
              // Filter projects
              filterProjects(tech);
            });
            
            filtersContainer.appendChild(filterBtn);
          });
          
          // Add filters before the projects grid
          const projectsGrid = document.querySelector('.projects-grid');
          projectsSection.querySelector('.container').insertBefore(filtersContainer, projectsGrid);
        }
      }
    }
  }
  
  // Filter projects by technology
  function filterProjects(category) {
    const projects = document.querySelectorAll('.project-card');
    
    if (category === 'all') {
      projects.forEach(project => {
        project.style.display = 'block';
      });
      return;
    }
    
    projects.forEach(project => {
      const tags = project.querySelectorAll('.tech-tag');
      let hasCategory = false;
      
      tags.forEach(tag => {
        if (tag.textContent.toLowerCase() === category.toLowerCase()) {
          hasCategory = true;
        }
      });
      
      project.style.display = hasCategory ? 'block' : 'none';
    });
  }