import React from "react";
import styles from "./Backdrop.module.css";
import Squiggles from "../../Assets/Squiggles.jpg";

class Backdrop extends React.Component {
    render() {
        return (

            <div className={styles.All}>
                <img src={Squiggles} alt="backdrop" className={styles.Backdrop}/>
            </div>
                
        )
    }
}

export default Backdrop; 