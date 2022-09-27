import React, { useState } from "react";
import styles from "./Projects.module.css";
import Modal from "../Modal/Modal";
import BkgSquiggles from "../../Assets/BkgSquiggles.webp";
import Promo from "../../Assets/Promo.webp";

function Projects() {
    const [show, setShow] = useState(false)
    
    return (
        <div className={styles.All}>
            
            <img src={BkgSquiggles} alt="BkgSquiggles" className={styles.BkgSquiggles}/>

                <div className={styles.ProjectWrapper}>
                    <div className={styles.Header}>
                    My Projects
                    </div>
                    <div className={styles.WrapperCol}>
                        <div className={styles.Square}>
                            <div className={styles.ImgWrapper}>
                                <img className={styles.Promo} src={Promo} alt="promo"/>
                            </div>
                            <div className={styles.WrapperRow}>
                                <div className={styles.Title}>
                                    OKNOTOK
                                </div>
                            </div>
                            <div className={styles.WrapperRow}>
                                <div className={styles.Body}>
                                    A mobile app to measure the relationship between psychiatric medication use and mood
                                </div>
                            </div>
                        </div>
                        <div className={styles.Wrap}>
                            <button className={styles.Button} onClick={() => setShow(true) } >
                                View Project
                            </button>
                        </div>
                    </div>
                    <Modal onClose={ () => setShow(false)} show={show}/>
                </div>
            </div>
        )          
    }

export default Projects;