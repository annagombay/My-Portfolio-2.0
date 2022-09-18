import React, { useState } from "react";
import styles from "./Projects.module.css";

function Projects() {
    const [show, setShow] = useState(false)

    return (
        <div className={styles.Bkg}>
            <button onClick={() => setShow(true) }>
                Show Modal
            </button>
        </div>
    )          
  }

export default Projects;