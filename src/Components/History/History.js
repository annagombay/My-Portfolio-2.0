import React from "react";
import styles from "./History.module.css";
import HistoryImg from "../../Assets/HistoryImg.png";
import BkgSquiggles from "../../Assets/BkgSquiggles.webp";


class History extends React.Component {
    render() {
        return (
            <div className={styles.All}>
                <img src={BkgSquiggles} alt="BkgSquiggles" className={styles.BkgSquiggles}/>
                <div className={styles.ImgWrapper}>
                    <div className={styles.Header}>
                        My History
                    </div>
                    <img src={HistoryImg} alt="history" className={styles.HistoryImg}/>
                </div>
            </div>    
        )
    }
}

export default History; 

