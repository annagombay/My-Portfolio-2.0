import React from "react";
import styles from "./Navbar.module.css";
import EmailIcon from "../../Assets/EmailIcon.png";
import LinkedInIcon from "../../Assets/LinkedInIcon.png"
import GithubIcon from "../../Assets/GithubIcon.png";

class Navbar extends React.Component {
  render() {
    return (
        <div className={styles.NavContainer}>

            <div className={styles.Title}>
                Hi, I'm Anna
            </div>
            <div className={styles.SocialLinks}>
                <div className={styles.SocialLink}>
                    <img src={EmailIcon} alt='email'></img>
                </div>
                <div className={styles.SocialLink}>
                    <img src={LinkedInIcon} alt='linkedIn'></img>
                </div>
                <div className={styles.SocialLink}>
                    <img src={GithubIcon} alt='github'></img>
                </div>
            </div>
        </div>
    )          
  }
}

export default Navbar; 