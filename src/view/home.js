import React, { useState, useEffect } from 'react';
import styles from './style/home.module.css';
import logo from './images/logo.svg';
import webIcon from './images/WebDevIcon.svg';
import uixIcon from './images/UXIcon.svg';
import appIcon from './images/AppDevIcon.svg';
import blockchainIcon from './images/icon.svg';
import visa from './images/visa.svg';
import tyme from './images/tyme.svg';
import distell from './images/distell.svg';
import spotify from './images/spotify.svg';
import microsoft from './images/microsoft.svg';
import engen from './images/engen.svg';
import nike from './images/nike.svg';
import wesgrow from './images/wesgrow.svg';
import multichoice from './images/multichoice.svg';
import pnp from './images/pnp.svg';
import liquid from './images/liquid.svg';
import tfg from './images/tfg.svg';
import sanlam from './images/sanlam.svg';
import santam from './images/santam.svg';
import bbc from './images/bbc.svg';


import { Link } from 'react-router-dom'; // Import Link from React Router



  

function Home() {

    const [apiData, setApiData] = useState(null); // useState
    let data = {};

    // Method to get data from the backend
    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws');
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            data = await response.json();
            setApiData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };
    
        fetchData();
    }, []);
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
                        <img src={webIcon} alt=''/>
                        <div className={styles.rowTitle}>
                            Web development
                        </div>
                        <p>
                            We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.
                        </p>
                    </div>
                    <div className={styles.fields}>
                        <img src={uixIcon} alt=''/>
                        <div className={styles.rowTitle}>
                            User experience & design                       
                        </div>
                        <p>
                            Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business.
                        </p>
                    </div>
                    <div className={styles.fields}>
                        <img src={appIcon} alt=''/>
                        <div className={styles.rowTitle}>
                            Mobile app development                   
                        </div>
                        <p>
                            Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients.
                        </p>
                    </div>
                    <div className={styles.fields}>
                        <img src={blockchainIcon} alt=''/>
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
                {/* Display the API data */}
                    {apiData ? (
                       <div className={styles.row}>
                            {apiData.map((item, index) => (
                            <div key={index} className={styles.column}>
                                <div className={styles.imageContainer}>
                                    <img className={styles.caseImg}  src={item.imageUrl} alt={item.title} />
                                    <div className={styles.imageText}>
                                    <div className={styles.rectangleImg}></div>
                                        <h2>{item.title}</h2>
                                        <p className={styles.imgTextDesc}>{item.description}</p>
                                    </div>
                                </div>
                          </div>
                            ))}
                       </div>  
                        ) : (
                        <p>Loading data...</p>
                    )}

                              
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

                <div className={styles.row}>
                    <div className={styles.column}>
                        <img src={visa} alt=''/>
                    </div>
                    <div className={styles.column}>
                        <img src={tyme} alt=''/>
                    </div>
                    <div className={styles.column}>
                        <img src={distell} alt=''/>
                    </div>
                    <div className={styles.column}>
                        <img src={spotify} alt=''/>
                    </div>
                    <div className={styles.column}>
                        <img src={microsoft} alt=''/>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.column}>
                        <img src={engen} alt=''/>
                    </div>
                    <div className={styles.column}>
                        <img src={nike} alt=''/>
                    </div>
                    <div className={styles.column}>
                        <img src={wesgrow} alt=''/>
                    </div>
                    <div className={styles.column}>
                        <img src={multichoice} alt=''/>
                    </div>
                    <div className={styles.column}>
                        <img src={pnp} alt=''/>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.column}>
                        <img src={liquid} alt=''/>
                    </div>
                    <div className={styles.column}>
                        <img src={tfg} alt=''/>
                    </div>
                    <div className={styles.column}>
                        <img src={sanlam} alt=''/>
                    </div>
                    <div className={styles.column}>
                        <img src={santam} alt=''/>
                    </div>
                    <div className={styles.column}>
                        <img src={bbc} alt=''/>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.footer}>
        <div className={styles.firstInnerMiddle}>

            <div className={styles.heading}>
                <div className={styles.rectangleFooter}> 
                </div>
                <div className={styles.headingTextFooter}>
                    Contact us
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.twoThird}>
                Have a project in mind? <br></br>
                Let's make it happen 
                </div>
                <div className={styles.third}>
                    <span className={styles.space}> 22 Street Name, Suburb, 8000,</span>
                    <br></br>
                    <span className={styles.space}> Cape Town, South Africa </span>
                    <br></br>
                    +27 21 431 0001  <br></br>
                    <span className={styles.email}>enquirie@website.co.za</span>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.twoThird}>
                    <div className={styles.row}>
                        <div className={styles.footerFields}>
                            <p>
                            <span className={styles.space}> Terms of service</span>
                            <br></br>
                            Privacy policy
                            <br></br>
                            Impressum
                            </p>
                        </div>
                        <div className={styles.footerFields}>
                            <p>
                            Facebook
                            <br></br>
                            Instagram
                            <br></br>
                            Twitter
                            </p>
                        </div>
                        <div className={styles.footerFields}>
                            <p>
                            Github
                            <br></br>
                            Linkedin
                            <br></br>
                            Teams
                            </p>
                        </div>
                        <div className={styles.footerFields}>
                            <p>
                            Youtube
                            <br></br>
                            Behance
                            <br></br>
                            Dribbble
                            <br></br>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.lastThird}>
                    <span className={styles.space}>Explore open jobs</span>
                    <br></br>
                    <br></br>

                    <span className={styles.space}>©2000—2023 Company Name</span>
                </div>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Home;
