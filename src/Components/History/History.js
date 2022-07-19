import React from "react";
import styles from "./History.module.css";
import HistoryImg from "../../Assets/HistoryImg.png";
import BkgSquiggles from "../../Assets/BkgSquiggles.jpg";


class History extends React.Component {
    render() {
        return (
            <div className={styles.All}>
            <img src={BkgSquiggles} alt="BkgSquiggles" className={styles.BkgSquiggles}/>
            <div>
            <div className={styles.Header}>
                My History
            </div>
        </div>

            <img src={HistoryImg} alt="history" className={styles.HistoryImg}/>


        </div>
                
        )
    }
}

export default History; 
