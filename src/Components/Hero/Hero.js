import React from "react";
import styles from "./Hero.module.css";
import HeroImage from "../../Assets/AliceWoods.webp";

class Hero extends React.Component {
    render() {
        return (
                <div className = {styles.Hero}>
                    <img src={HeroImage} alt="heroImage" className={styles.HeroImage}/>
                    <div className={styles.HeroBody}>
                        I am a 
                    </div>
                    <div className={styles.HeroHeader}>
                        UX Designer & Front-end Developer
                    </div>
                    <div className={styles.HeroSub}>
                        I build digital solutions for 
                        <br/>
                        ( mental ) health problems. 
                    </div>
                    <div className={styles.Button}>
                        SEE MY PROJECTS
                    </div>
                </div>
            )
        }
    }

export default Hero; 