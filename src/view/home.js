import React from 'react';
import styles from './style/home.module.css';
import logo from './images/logo.svg';
import { Link } from 'react-router-dom'; // Import Link from React Router


function Home() {
  return (
    <div>
        <div className={styles.nav}>

            {/* Logo container */}
            <div className={styles.nav.inside}>
                <img className={styles.logo} src={logo} alt=''/>
            </div>

            {/* Nav bar menu */}
            <div className={styles.nabarMenu}>

                <div className={styles.innerMenu}>
                    <div className={styles.pageLink}>
                        <Link to="/services" className={styles.link}>Services</Link>
                    </div>
                </div>
                <div className={styles.innerMenu}>
                    <div className={styles.pageLink}>
                        <Link to="/services" className={styles.link}>Industries</Link>
                    </div>
                </div>
                <div className={styles.innerMenu}>
                    <div className={styles.pageLink}>
                        <Link to="/services" className={styles.link}>Cases</Link>
                    </div> 
                </div>
                <div className={styles.innerMenu}>
                    <div className={styles.pageLink}>
                        <Link to="/services" className={styles.link}>Contact</Link>
                    </div>
                </div>
            </div>

            <div>
                <button className={styles.navButton}>Let's Talk</button>
            </div>
        </div>

        <div className={styles.upperBackground}>
            <div className={styles.hero}>
                <div className={styles.text}>
                    Live with Confidence    
                    <div className={styles.innerText}>
                        José Mourinho brings confidence to pan-African Sanlam
                        <br></br>
                        compaign
                     </div>
                     <div>
                     <button className={styles.viewButton}>View project</button>
                     </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;
