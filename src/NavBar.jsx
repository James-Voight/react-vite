import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li><a href="https://drwestfall.us/smith315/voight/Home-Made-Games-Simple/index.html" style={styles.navLink}>Home</a></li>
        <li><a href="https://drwestfall.us/smith315/voight/Home-Made-Games-Simple/games.html" style={styles.navLink}>Games</a></li>
        <li><a href="https://drwestfall.us/smith315/voight/Home-Made-Games-Simple/zen.html" style={styles.navLink}>Zen</a></li>
        <li><a href="https://drwestfall.us/smith315/voight/Home-Made-Games-Simple/map.html" style={styles.navLink}>Where Am I??</a></li>
        <li><a href="https://drwestfall.us/smith315/voight/Home-Made-Games-Simple/weather.html" style={styles.navLink}>Current Weather</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '10px 0',
  },
  navList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    padding: '10px 20px',
    transition: 'background-color 0.3s',
  },
};

export default Navbar;
