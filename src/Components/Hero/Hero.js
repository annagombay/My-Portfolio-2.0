import React from "react";
import styles from "./Hero.module.css";
import HeroImage from "../../Assets/AliceWoods.webp";
import HeroMob from "../../Assets/HeroMob.webp";

class Hero extends React.Component {
    render() {
        return (
                <div className = {styles.Hero}>
           
                    <div className={styles.HeroImage}>
                        <img src={HeroImage} alt="heroImage" className={styles.HeroImage}/>
                    </div>
                  
                    <div className={styles.HeroImageMob}>
                        <img src={HeroMob} alt="heroMob" className={styles.HeroImageMob} />
                    </div>
                  
                    <div className={styles.HeroSub}>
                        I am a 
                    </div>
                    <div className={styles.HeroHeader}>
                        UX Designer & Front-end Developer
                    </div>
                    <div className={styles.HeroSub2}>
                        I build digital solutions for 
                        <br/>
                        ( mental ) health problems
                    </div>
                    <div className={styles.Button} onClick={() => { window.scrollTo({top: 2170, left: 0, behavior: 'smooth'})}}>
                        SEE MY PROJECTS
                    </div>
                </div>
            )
        }
    }

export default Hero; 