# Shivam Karpe - Portfolio Website

A clean, responsive portfolio website built with HTML, CSS, and JavaScript. This website showcases my skills, experience, projects, and provides a way for potential employers or clients to contact me.

## Features

- Fully responsive design that works on mobile, tablet, and desktop
- Clean and modern interface with smooth scrolling navigation
- Interactive sections for about, experience, education, projects, and skills
- Contact form for easy communication
- Dark/light theme toggle (JavaScript enabled)
- Project filtering by technology
- Timeline display for experience and education

## File Structure

```
shivam-karpe-portfolio/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   └── images/
│       └── placeholder.jpg (add your own images here)
└── README.md
```

## Setup Instructions

1. Clone this repository to your local machine or download the ZIP file
2. Extract the files if you downloaded the ZIP
3. Organize the files according to the file structure above
4. Customize the content in `index.html` to match your information
5. Add your own images to the `assets/images/` directory
6. Upload the files to your web hosting provider or GitHub Pages

## Customization

### Changing Colors

You can easily change the color scheme by modifying the CSS variables in the `:root` selector in `styles.css`:

```css
:root {
  --primary-color: #2d3e50;    /* Main color for headers and backgrounds */
  --secondary-color: #1abc9c;  /* Accent color for highlights and buttons */
  --text-color: #333;          /* Default text color */
  --light-bg: #f8f9fa;         /* Light background color */
  --border-color: #e0e0e0;     /* Border color */
}
```

### Adding Projects

To add a new project, copy and paste the project card structure in the projects section of `index.html`:

```html
<div class="project-card">
  <div class="project-img">
    <i class="fas fa-project-icon"></i>
    <!-- Or use an image: <img src="assets/images/project-image.jpg" alt="Project Name"> -->
  </div>
  <div class="project-info">
    <h3>Project Name</h3>
    <p>Project description goes here. Explain what the project does and your role in it.</p>
    <div class="project-tech">
      <span class="tech-tag">Technology 1</span>
      <span class="tech-tag">Technology 2</span>
      <span class="tech-tag">Technology 3</span>
    </div>
  </div>
</div>
```

### Adding Skills

To add more skills, modify the skill categories in the skills section of `index.html`:

```html
<div class="skill-category">
  <h3>Category Name</h3>
  <ul class="skills-list">
    <li>Skill 1</li>
    <li>Skill 2</li>
    <li>Skill 3</li>
  </ul>
</div>
```

## Contact Form Setup

The contact form in this template is set up for demonstration purposes only. To make it functional, you'll need to:

1. Create a server-side script to process the form data (PHP, Node.js, etc.)
2. Modify the JavaScript in `main.js` to send the form data to your server script
3. Alternatively, use a form service like Formspree or Netlify Forms

## Dependencies

- Font Awesome 6.0.0 for icons
- No other external libraries are required

## Browser Compatibility

This website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## License

Feel free to use this template for your personal portfolio.

## Credits

Developed by [Your Name]