import React from 'react';
import styles from './style/home.module.css';
import logo from './images/logo.svg';
import webIcon from './images/WebDevIcon.svg';
import uixIcon from './images/UXIcon.svg';
import appIcon from './images/AppDevIcon.svg';
import blockchainIcon from './images/icon.svg';
import olympian from './images/olympian.png';
import savings from './images/savings.jpeg';
import skhokho from './images/skhokho.jpeg';


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
        <div className={styles.middleBackground}>
            <div className={styles.firstInnerMiddle}>
                <div className={styles.heading}>
                    <div className={styles.rectangle}> 
                    </div>
                    <div className={styles.headingText}>
                       What we do
                    </div>
                </div>
                <div className={styles.offer}>
                    We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces
                </div>

                <div className={styles.row}>
                    <div className={styles.fields}>
                        <img className={styles.webIcon} src={webIcon} alt=''/>
                        <div className={styles.rowTitle}>
                            Web development
                        </div>
                        <p>
                            We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.
                        </p>
                    </div>
                    <div className={styles.fields}>
                        <img className={styles.uixIcon} src={uixIcon} alt=''/>
                        <div className={styles.rowTitle}>
                            User experience & design                       
                        </div>
                        <p>
                            Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business.
                        </p>
                    </div>
                    <div className={styles.fields}>
                        <img className={styles.appIcon} src={appIcon} alt=''/>
                        <div className={styles.rowTitle}>
                            Mobile app development                   
                        </div>
                        <p>
                            Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients.
                        </p>
                    </div>
                    <div className={styles.fields}>
                        <img className={styles.blockchainIcon} src={blockchainIcon} alt=''/>
                        <div className={styles.rowTitle}>
                            Blockchain solutions                 
                        </div>
                        <p>
                            We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals.
                        </p>
                    </div>
                </div>


                <div className={styles.caseHeading}>
                    <div className={styles.rectangle}> 
                    </div>
                    <div className={styles.headingText}>
                       Case Studies
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.column}>
                        <img className={styles.caseImg} src={olympian} alt=''/>
                    </div>
                    <div className={styles.column}>
                        <img className={styles.caseImg} src={savings} alt=''/>
                    </div>
                    <div className={styles.column}>
                        <img className={styles.caseImg} src={skhokho} alt=''/>
                    </div>
                </div>                

                <div className={styles.heading}>
                    <div className={styles.rectangle}> 
                    </div>
                    <div className={styles.headingText}>
                       You'll be in good company
                    </div>
                </div>

                <div className={styles.brandsTitle}>
                    Trusted by leading brands
                </div>
            </div>
        </div>

    </div>
  );
}

export default Home;
