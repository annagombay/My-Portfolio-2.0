import React from "react";
import styles from "./History.module.css";
import HistoryImg from "../../Assets/HistoryImg.png";


class History extends React.Component {
    render() {
        return (
        <div>
            <div className={styles.Wrapper}>
                <div className={styles.Header}>
                    My History
                </div>
            </div>
            <div className={styles.Wrapper}>
                <img src={HistoryImg} alt="history" className={styles.HistoryImg}/>
            </div>
        </div>
                
        )
    }
}

export default History; 