import React from "react";
import styles from './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Hero from './/Components/Hero/Hero';
import History from "./Components/History/History";
import Projects from "./Components/Projects/Projects";
import Modal from "./Components/Modal/Modal";
import {useEffect} from 'react';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-157371955-1');
ReactGA.pageview(window.location.pathname + window.location.search);


function App() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  // const [show, setShow] = useState(false)
  // const { ref: myRef, inView: myElementIsVisible }= useInView();
  //  { myElementIsVisible ?  'yes' : 'No'}

  return (
  
    <div className={styles.App}>
            <Navbar/>
            <Hero/>
            <History/>
            <Projects/>
            <Modal />
    </div>   
  )
}

export default App;