# My Portfolio Website

This is a simple, clean, and feature-rich portfolio website created using React, Material-UI, Express.js, and MongoDB. It showcases personal projects, skills, and provides a way for visitors to get in touch. The website features a visitor counter, a dark/light mode toggle, and several animation effects for a more dynamic user experience.

## Table of Contents
- Features
- Installation and Setup
- Running the Server
- Usage
- Customization
- License

## Features
- Responsive design
- Dark mode and light mode toggle
- Animation effects using framer-motion
- Typing effect animation on the home page
- Fade-in effect for testimonials on the home page
- Three main pages: Home, Portfolio, and Contact
- Social media links
- Visitor counter with a MongoDB backend
- Visitor counter displayed on the home page
- Built with React and Material-UI

## Installation and Setup
### Prerequisites
- Node.js (>= 12.x) and npm (>= 6.x) installed on your system.
- MongoDB instance running

### Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/portfolio-website.git
    ```
2. Change into the project directory:
    ```bash
    cd portfolio-website
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```
5. Open your browser and visit http://localhost:3000 to see the website in action.

## Running the Server
- Ensure that your MongoDB instance is running. If you are using a cloud MongoDB service like MongoDB Atlas, ensure that your connection string is correctly defined in the src/config file.
- Start the server:
    ```bash
    node server.js
    ```
- The server will start running on http://localhost:3001.

## Usage
This portfolio website template can be used as a starting point for your own personal website. Update the content, styles, and images to reflect your personal brand and projects.

## Customization
- Update the src/components/Home.js, src/components/Portfolio.js, and src/components/Contact.js files with your own content. The Home.js file contains your personal introduction, links to your resume and github, a short description of yourself, testimonials, and a visitor counter.
- Modify the theme by editing the src/theme.js file.
- Replace social media links and icons in the src/App.js file.
- Add or remove pages by modifying the routes and navigation links in the src/App.js file.
- Customize animations by adjusting the framer-motion variants in the Home.js file.

## License
This project is open source and available under the MIT License.
