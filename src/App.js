import React, { useState } from "react";
import styles from './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Hero from './/Components/Hero/Hero';
import History from "./Components/History/History";
import Modal from "./Components/Modal/Modal";

function App() {
  const [show, setShow] = useState(false)

  return (
    
    <div className={styles.App}>
            <Navbar/>
            <Hero/>
            <History/>
              <button onClick={() => setShow(true) }>

                Show Modal

              </button>
            <Modal onClose={ () => setShow(false)} show={show}/>
    </div>   
  )
}

export default App;
