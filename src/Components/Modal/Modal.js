import React from 'react'
import styles from "./Modal.module.css";
import ShrinkTank from "./../../Assets/ShrinkTank.png";
import TomInsel from "./../../Assets/TomInsel.png";
import Mockup1 from "./../../Assets/Mockup1.png";
import Mockup2 from "./../../Assets/Mockup2.png";
// import Bkg_Triangles from "./../../Assets/Bkg_Triangles.png";
// import { CSSTransition } from 'react-transition.group';


class Modal extends React.Component {
    render() { 
        if (!this.props.show) {
            return null
        }
        return (
            <div className={styles.Modal} onClick={this.props.onClose}>
                
                <div className={styles.ModalContent} onClick= {e => e.stopPropagation()}>
                    <div className={styles.ModalFooter}>
                        <button onClick={this.props.onClose} className={styles.Button}>
                            Close
                        </button>
                    </div> 
                </div>

                {/* {`Modal ${this.props.show ? 'show' : ''}`} c */}
                <div className={styles.ModalContent} onClick= {e => e.stopPropagation()}>
                    <div className={styles.ModalBlock}>
                    {/* {this.props.block}      */}
                        <div className={styles.Title}>
                            THE PROBLEM
                        </div>
                        <br></br>
                        <div className={styles.Header}>
                            The impact of psychiatric medication on the human brain is inadequately measured and narrowly understood. 
                        </div>
                        <br></br>
                        <div className={styles.BodyText}>
                            Psychiatry relies on a diagnostic system rooted in observational research, genetic evidence lacking significant advances since the 1950s, and drug treatment models that do not align with the diagnoses they intend to treat.
                        <br></br>
                        <br></br>
                            A system needs to be put in place to rigorously analyze how psychiatric drugs impact people on a day-to-day level to reduce patient harm and increase treatment efficacy.
                        </div>
                    </div>
                    <div className={styles.ModalBlock}>
                        <div className={styles.TomInsel}>
                            <img src={TomInsel} alt="TomInsel" />
                        </div>
                    </div>
                    <div className={styles.ModalBlock}>
                        <div className={styles.ShrinkTank}>
                            <img src={ShrinkTank} alt="ShrinkTank" />
                        </div>
                    </div>
                </div> 
                
                <div className={styles.ModalContent} onClick= {e => e.stopPropagation()}>
                    <div className={styles.ModalBlock}>
                    {/* {this.props.block}      */}
                        <div className={styles.Title}>
                            THE SOLUTION
                        </div>
                        <br></br>
                        <div className={styles.Header}>
                            An online platform that: 
                        </div>
                        <br></br>
                        <div className={styles.BodyText}>
                            1. Measures the relationship between specific psychiatric medications and daily mood
                        <br></br>
                        <br></br>
                            • Captures daily mood dynamically, measuring tone and energy
                        <br></br>
                        <br></br>
                            • Allows users to track medication use
                        <br></br>
                        <br></br>
                            • Displays the relationship between medication intake and daily mood
                        </div>
                    </div>
                    <div className={styles.ModalBlock}>
                        <div className={styles.Mockup1}>
                            <img src={Mockup1} alt="Mockup1" />
                        </div>
                    </div>
                    <div className={styles.ModalBlock}>
                        <div className={styles.Mockup2}>
                            <img src={Mockup2} alt="Mockup2" />
                        </div>
                    </div>
                </div>   

            </div>
        )
    }
}

export default Modal; 