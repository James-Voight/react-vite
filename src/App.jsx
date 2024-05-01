// Import the necessary modules and components
import React from 'react'; // Importing React library for JSX
import './App.css'; // Importing CSS file for additional styles
import Navbar from './NavBar'; // Importing the Navbar component from NavBar.js

// Functional component representing the JSX page
const MyJSXPage = () => {
  return (
    <div style={styles.container}>
      {/* Include the Navbar component */}
      <Navbar />
      
      {/* Header section */}
      <header style={styles.header}>
        <h1>Welcome to My React-Vite Page!</h1>
      </header>
      
      {/* Main content */}
      <main>
        {/* About Me section */}
        <section style={styles.section}>
          <h2>About Me</h2>
          <p>
            Hi there! I'm a passionate web developer with expertise in React.
            This is my React-Vite page where I showcase my skills and projects.
          </p>
        </section>
        
        {/* Skills section */}
        <section style={styles.section}>
          <h2>Skills</h2>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </section>
        
        {/* Projects section */}
        <section style={styles.section}>
          <h2>Projects</h2>
          <ul>
            <li>
              <strong>Project 1:</strong> American Car Showroom MERN Stack website
            </li>
            <li>
              <strong>Project 2:</strong> 2023 Video Game Releases
            </li>
            {/* Add more projects as needed */}
          </ul>
        </section>
        
        {/* Contact Me section */}
        <section style={styles.section}>
          <h2>Contact Me</h2>
          <p>
            If you'd like to get in touch with me, feel free to email me at{' '}
            <a href="mailto:jpvoight@liberty.edu">jpvoight@liberty.edu</a>.
          </p>
        </section>
      </main>
      
      {/* Footer section */}
      <footer style={styles.footer}>
        <p>© 2024 My React-Vite Page. All rights reserved.</p>
      </footer>
    </div>
  );
};

// CSS styles for the JSX page
const styles = {
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
    padding: '20px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  section: {
    marginBottom: '30px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)',
  },
  footer: {
    textAlign: 'center',
    marginTop: '30px',
    borderTop: '1px solid #ccc',
    paddingTop: '10px',
  },
};

// Export the JSX page component as default
export default MyJSXPage;
