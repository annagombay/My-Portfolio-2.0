import React from "react";
import styles from "./History.module.css";
import HistoryImgDesk from "../../Assets/HistoryDesk.webp";
import HistoryImgMob from "../../Assets/HistoryMob.webp";
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

                        <div className={styles.HistoryDesk}>
                            <img src={HistoryImgDesk} alt="history" className={styles.HistoryImg}/>
                        </div>

                        <div className={styles.HistoryMob}>
                            <img src={HistoryImgMob} alt="history" className={styles.HistoryImg}/>
                        </div>

                    </div>

                    
                </div>    
            )
        }
    }

export default History; 

