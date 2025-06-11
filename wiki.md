# Project Summary
This project is a personal portfolio website designed to showcase individual skills, projects, and experiences. It leverages modern web technologies to create a responsive and visually appealing user interface, allowing users to navigate through different sections such as About, Projects, and Contact seamlessly.

# Project Module Description
The portfolio website consists of several functional modules:
- **Navbar**: Provides navigation links to different sections of the portfolio.
- **ThemeToggle**: Allows users to switch between light and dark themes.
- **Pages**: 
  - **Landing**: The homepage with an introduction and overview.
  - **About**: Information about the individual.
  - **Projects**: Showcase of various projects and works.
  - **Contact**: A form for users to get in touch.

# Directory Tree
```
.
├── portfolio_data.json               # Data for portfolio content
├── react_template/                    # Contains the React application
│   ├── README.md                      # Documentation for the React template
│   ├── eslint.config.js               # ESLint configuration for code linting
│   ├── index.html                     # Main HTML file
│   ├── package.json                   # Project dependencies and scripts
│   ├── postcss.config.js              # PostCSS configuration
│   ├── public/data/example.json       # Example data for portfolio
│   ├── src/                           # Source files for React components
│   │   ├── App.jsx                    # Main application component
│   │   ├── components/                # Reusable components
│   │   │   ├── Navbar.jsx             # Navigation bar component
│   │   │   └── ThemeToggle.jsx        # Theme toggle component
│   │   ├── contexts/                  # Context API for global state
│   │   │   └── ThemeContext.jsx       # Context for theme management
│   │   ├── data/                      # Data files for the portfolio
│   │   │   └── portfolioData.js       # JavaScript data for portfolio items
│   │   ├── index.css                  # Global styles
│   │   ├── main.jsx                   # Entry point for React application
│   │   └── pages/                     # Individual page components
│   │       ├── About.jsx              # About page component
│   │       ├── Contact.jsx            # Contact page component
│   │       ├── Landing.jsx            # Landing page component
│   │       └── Projects.jsx           # Projects page component
│   ├── tailwind.config.js             # Tailwind CSS configuration
│   └── vite.config.js                 # Vite configuration for the build process
└── uploads/                           # Uploaded files
    └── Azddine OUADGHIRI-CV.pdf       # CV of the individual
```

# File Description Inventory
- **portfolio_data.json**: Contains structured data for the portfolio.
- **react_template/**: Main folder for the React application, including components, pages, and configuration files.
- **uploads/**: Directory for uploaded documents, such as CVs.

# Technology Stack
- React: Frontend framework for building user interfaces.
- Vite: Build tool for modern web projects.
- Tailwind CSS: Utility-first CSS framework for styling.
- ESLint: Tool for identifying and fixing problems in JavaScript code.
- PostCSS: Tool for transforming CSS with JavaScript plugins.

# Usage
To set up and run the portfolio website:
1. Install dependencies:
   ```bash
   npm install
   ```
2. Build the project:
   ```bash
   npm run build
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
