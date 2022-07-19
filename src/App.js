import React, { useState } from "react";
import styles from './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Hero from './/Components/Hero/Hero';
import History from "./Components/History/History";
import Modal from "./Components/Modal/Modal";
import TypeAnimation from 'react-type-animation';
import { useInView } from 'react-intersection-observer';

function App() {
  const [show, setShow] = useState(false)
  // const { ref: myRef, inView: myElementIsVisible }= useInView();

  //  { myElementIsVisible ?  'yes' : 'No'}
    

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
