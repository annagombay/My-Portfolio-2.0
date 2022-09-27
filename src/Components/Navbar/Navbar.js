import React from "react";
import styles from "./Navbar.module.css";
// import { useInView } from 'react-intersection-observer';
import EmailIcon from "../../Assets/EmailIcon.png";
import LinkedInIcon from "../../Assets/LinkedInIcon.png"
import GithubIcon from "../../Assets/GithubIcon.png";
import TypeAnimation from 'react-type-animation';


const Navbar = () => {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
    return (
        <div className={styles.NavContainer}>
            <div className={styles.Title}>
                <TypeAnimation
                    cursor={false}
                    sequence={["Hi, I'm Anna.", 1000]}
                    wrapper='div'
                    />
            </div>
            <div className={styles.SocialLinks}>
                <div className={styles.Squeeze}>
                    <span>
                        <a href="mailto: annaphoenixg@gmail.com">
                            <img src={EmailIcon} alt='email' className={styles.SocialLink}></img>
                        </a>
                    </span>
                    <span>
                        <button onClick={() => openInNewTab('https://www.linkedin.com/in/anna-gombay/')}>
                            <img src={LinkedInIcon} alt='linkedIn' className={styles.SocialLink}></img>
                        </button>
                    </span>
                    <span>
                        <button onClick={() => openInNewTab('https://github.com/annagombay')} >
                            <img src={GithubIcon} alt='github' className={styles.SocialLink}></img>
                        </button>
                    </span>
                </div>
            </div>
        </div>
    )          
  }

export default Navbar;

// export default Navbar; 

// constructor(props){ 
//     super(props) 
        
//     // Set initial state 
//     this.state = {greeting : 
//          } 
        
//     // Binding this keyword 
//     this.updateState = this.updateState.bind(this) 
//   } 
    
//   updateState(){ 
//     // Changing state 
//     this.setState({greeting : 
//         <TypeAnimation
//         cursor={false}
//         sequence={["Hi, I'mmm Anna.", 1000]}
//         wrapper='div'
//         />}) 
//   } 