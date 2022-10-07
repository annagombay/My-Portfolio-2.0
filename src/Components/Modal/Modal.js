import React from 'react'
import styles from "./Modal.module.css";
import Bunny from "./../../Assets/Bunny.webp";
import ShrinkTank from "./../../Assets/ShrinkTank.webp";
import Mockup1 from "./../../Assets/Mockup1.webp";
import Mockup2 from "./../../Assets/Mockup2.webp";
import Mockup3 from "./../../Assets/Mockup3.webp";
import Mockup4 from "./../../Assets/Mockup4.webp";
import AffinityMap from "./../../Assets/AffinityMap.webp";
import Interviews from "./../../Assets/Interviews.webp";
import Persona1 from "./../../Assets/Persona1.webp";
import Persona2 from "./../../Assets/Persona2.webp";
import Persona3 from "./../../Assets/Persona3.webp";
import CompAn from "./../../Assets/CompAn.webp";
import Sketches from "./../../Assets/Sketches.webp";
import Feature1 from "./../../Assets/Feature1.webp";
import Feature2 from "./../../Assets/Feature2.webp";
import Feature3 from "./../../Assets/Feature3.webp";
import Lofi from "./../../Assets/Lofi.webp";
import Signature from "./../../Assets/Signature.webp";
import NextSteps from "./../../Assets/nextSteps.svg";

class Modal extends React.Component {
    render() { 
        
        if (!this.props.show) {
            return null
        }
        return (
            <div className={styles.CaseStudy} onClick={this.props.onClose}>
                <div className={styles.HeroBkg}>
                </div>
                                
                <div className={styles.Sticky} onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}> 
                    <div className={styles.Close} onClick={this.props.onClose} >
                        <img className={styles.Bunny} src={Bunny} alt='Bunny'/>
                    </div>
                </div>
                <div className={styles.WrapperRow} onClick= {e => e.stopPropagation()}>
                    <div className={styles.Brief} onClick= {e => e.stopPropagation()}>
                        <div className={styles.Title}>
                            OKNOTOK
                        </div>
                    </div>
                </div>
                <div className={styles.WrapperRow} onClick= {e => e.stopPropagation()}>
                    <div className={styles.ValueProp} onClick= {e => e.stopPropagation()}>
                        The app that does x to help you do y.  
                    </div> 
                </div>
                <div className={styles.WrapperRow} onClick= {e => e.stopPropagation()}>
                    <div className={styles.Hero} onClick= {e => e.stopPropagation()}>
                        <div className={styles.WrapperCol}>
                            <div className={styles.Center}>
                                <div className={styles.MockupKno}>
                                    <img src={Mockup4} alt="Mockup4" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.WrapperCol}>
                            <div className={styles.Center}>
                                <div className={styles.MockupMood}>
                                    <img src={Mockup1} alt="Mockup1" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.WrapperCol}>
                            <div className={styles.Center}>
                                <div className={styles.MockupMed}>
                                    <img src={Mockup2} alt="Mockup2" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.WrapperCol}>
                            <div className={styles.Center}>
                                <div className={styles.MockupCom}>
                                    <img src={Mockup3} alt="Mockup3" />
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>  
                <div className={styles.MidBkg}>

                <div className={styles.WrapperRow} onClick= {e => e.stopPropagation()}>
                    <div className={styles.BriefBkg}>
                        <div className={styles.Squeeze}>
                            <div className={styles.Square}>
                                <div className={styles.SubTitle2}>
                                    Brief   
                                </div>
                                <div className={styles.Body2}>
                                    A mobile app to measure the relationship between psychiatric medication use and mood
                                </div>
                            </div>
                            <div className={styles.Square}>
                                <div className={styles.SubTitle2}>
                                    Goal   
                                </div>
                                <div className={styles.Body2}>
                                    To reduce risk of harm and support the mental health of psychiatric medication users
                                </div>
                            </div>
                            <div className={styles.Square}>
                                <div className={styles.SubTitle2}>
                                    Roles   
                                </div>
                                <div className={styles.Body2}>
                                    UX Researcher
                                        <br></br>
                                    UX Designer
                                        <br></br>
                                    ReactJS Developer 
                                </div>
                            </div>
                            <div className={styles.Square}>
                                <div className={styles.SubTitle2}>
                                    Tools   
                                </div>
                                <div className={styles.Body2}>
                                    Figma
                                        <br></br>
                                    Visual Studio Code 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.Nudge}>
                    <div className={styles.WrapperRow} onClick= {e => e.stopPropagation()}>
                        <div className={styles.Card} onClick= {e => e.stopPropagation()} id="green">
                            <div className={styles.WrapperCol}>
                                <div className={styles.Center}>
                                    <div className={styles.SubTitle}>
                                        THE PROBLEM
                                    </div>
                                    <div className={styles.Header}>
                                        The impact of psychiatric medication on the human brain is inadequately measured and narrowly understood. 
                                    </div>
                                        <br></br>
                                    <div className={styles.Body}>
                                        The system used to diagnose mental health disorders is rooted in observational research that has yet to be biologically validated despite 70 years of research.  
                                            <br></br>
                                            <br></br>
                                        In 2013, Tom Insel–Director of NIHM, the largest mental health research organization in the world–urged that “we cannot design a system based on biomarkers or cognitive performance because we lack the data".
                                            <br></br>
                                            <br></br>
                                        It's 2022; Tom Insel left NIHM for Google, and psychiatrists are still using the same "gold standard" system to determine medical interventions for those deemed mentally ill.                                     
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div className={styles.Card2} onClick= {e => e.stopPropagation()}>
                            <div className={styles.ImgWrapper}>
                                <div className={styles.ShrinkTank}>
                                    <img src={ShrinkTank} alt="ShrinkTank"/>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.WrapperRow} onClick= {e => e.stopPropagation()}>
                    <div className={styles.Card} onClick= {e => e.stopPropagation()}>
                        <div className={styles.WrapperCol}>
                            <div className={styles.Center}>
                                <div className={styles.SubTitle}>
                                    DESIGNING A SOLUTION
                                </div>
                                <div className={styles.Header}>
                                    Talking to psychiatric medication users  
                                </div>
                                    <br></br>
                                <div className={styles.Body}>
                                    To learn about my intended users, I engaged in five one-on-one interviews with people who had taken psychiatric medication daily for at least 6 months.
                                        <br></br> 
                                        <br></br>
                                     Conversations revolved around mood, symptoms, and self-reported experiences of medication use. My goal here was to begin forming a general understanding of what daily life feels like for people who take psychiatric medication. 
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className={styles.Card2} onClick= {e => e.stopPropagation()}>
                        <div className={styles.ImgWrapper}>
                            <div className={styles.ShrinkTank}>
                                <img src={Interviews} alt="Interviews"/>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className={styles.WrapperRow} onClick= {e => e.stopPropagation()}>
                    <div className={styles.Card} onClick= {e => e.stopPropagation()}>
                        <div className={styles.WrapperCol}>
                            <div className={styles.Center}>
                                <div className={styles.Header}>
                                    Considering wants and needs 
                                </div>
                                    <br></br>
                                <div className={styles.Body}>
                                    To identify themes in interview feedback, I collapsed my notes into clusters of wants, needs, pains, and opportunities.
                                        <br></br>
                                        <br></br>
                                    Using the same data, I then created hypothetical personas who illustrate different experiences people taking psychiatric medication might encounter. 
                                        <br></br>
                                        <br></br>
                                    These personas served as vantage points from which I could imagine problematic scenarios related to medication use; they anchored my empathy and inspired solutions throughout the design process.
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className={styles.Card2} onClick= {e => e.stopPropagation()}>
                        <div className={styles.ImgWrapper}>
                            <div className={styles.PersonaWrapper}>
                                <div className={styles.Persona}>
                                    <div className={styles.PersonaText}>
                                        "I want to know if my medication is impacting my mood day-to-day. Is it helping?" 
                                    </div>
                                    <div className={styles.PersonaImg}>
                                        <img src={Persona1} alt="Persona1"/>
                                    </div>
                                </div>
                                <div className={styles.Persona}>
                                    <div className={styles.PersonaText}>
                                        "I feel isolated in my environment. I want to connect with people who face mental health challenges similar to my own."  
                                    </div>
                                    <div className={styles.PersonaImg}>
                                        <img src={Persona2} alt="Persona2"/>
                                    </div>
                                </div>
                                <div className={styles.Persona}>
                                    <div className={styles.PersonaText}>
                                        "I need to undestand my diagnosis better. Are there alternatives to medication that could help me?"
                                    </div>
                                    <div className={styles.PersonaImg}>
                                        <img src={Persona3} alt="Persona3"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.WrapperRow} onClick= {e => e.stopPropagation()}>
                    <div className={styles.Card} onClick= {e => e.stopPropagation()}>
                        <div className={styles.WrapperCol}>
                            <div className={styles.Center}>
                                <div className={styles.Header}>
                                    Mapping out problems and solutions 
                                </div>
                                    <br></br>
                                <div className={styles.Body}>
                                    To broaden the scope from which I could brainstorm design themes, I created an exhaustive list of user-relevant problems, ideas, quotes, emotions, thoughts, and more.
                                        <br></br>
                                        <br></br>
                                    I considered any information that could help me understand the realities of different types of psychiatric medication users valuable.
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className={styles.Card2} onClick= {e => e.stopPropagation()}>
                        <div className={styles.ImgWrapper}>
                            <div className={styles.ShrinkTank}>
                                <img src={AffinityMap} alt="AffinityMap"/>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className={styles.WrapperRow} onClick= {e => e.stopPropagation()}>
                    <div className={styles.Card} onClick= {e => e.stopPropagation()}>
                        <div className={styles.WrapperCol}>
                            <div className={styles.Center}>
                                <div className={styles.Header}>
                                    Analyzing competitors 
                                </div>
                                    <br></br>
                                <div className={styles.Body}>
                                    To understand my competitive landscape, I analyzed existing mobile apps with goals similar to my own. 
                                        <br></br>
                                        <br></br>
                                    The most significant drawback I identified was that all of my competitor's mood scales categorized mood from "very good" to "very bad", but did not capture the intensity of a given "positive" or "negative" mood. This method feels limited because it risks an implication that "high" moods are categorically good, and "low" moods are categorically bad. 
                                        <br></br>
                                        <br></br>
                                    To encourage a perspective that moods are dynamic, and all valuable for different reasons, I decided to include a second dimension in my mood scale that would measure mood intensity. 
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className={styles.Card2} onClick= {e => e.stopPropagation()}>
                        <div className={styles.ImgWrapper}>
                            <div className={styles.ShrinkTank}>
                                <img src={CompAn} alt="CompAn"/>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className={styles.WrapperRow} onClick= {e => e.stopPropagation()}>
                    <div className={styles.Card} onClick= {e => e.stopPropagation()}>
                        <div className={styles.WrapperCol}>
                            <div className={styles.Center}>
                                <div className={styles.Header}>
                                    Sketching the prototype 
                                </div>
                                    <br></br>
                                <div className={styles.Body}>
                                    The most important thing I recognized throughout my user research was that individuals taking psychiatric medication should not be acknowledged purely based on prescriptions of illness. 
                                        <br></br>
                                        <br></br>
                                    It felt crucial to promote a whole-person approach to mental health support by addressing factors not typically addressed within the confines of an app that measures mood. 
                                        <br></br>
                                        <br></br>
                                    To this end, in addition to providing users with data surrounding the impact (or lack thereof) of medication on daily well-being, I decided to build an online chat forum for people to connect about mental health, as well as a knowledge base to support users’ psycho-education. 
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className={styles.Card2} onClick= {e => e.stopPropagation()}>
                        <div className={styles.ImgWrapper}>
                            <div className={styles.Sketches}>
                                <img src={Sketches} alt="Sketches" />
                            </div> 
                        </div>
                    </div>
                </div>
                <div className={styles.WrapperRow} onClick= {e => e.stopPropagation()}>
                    <div className={styles.Card} onClick= {e => e.stopPropagation()}>
                        <div className={styles.WrapperCol}>
                            <div className={styles.Center}>
                                <div className={styles.Header}>
                                    Digitizing the design                             
                                </div>
                                    <br></br>
                                <div className={styles.Body}>
                                    Iterating from my sketches, I digitized my design. 
                                    
                                    I assembled a comprehensive list of features and functions that would be necessary to implement in my code.  
                                </div>   
                            </div>
                        </div>
                    </div> 
                    <div className={styles.Card2} onClick= {e => e.stopPropagation()}>
                        <div className={styles.ImgWrapper}>
                            <img className={styles.Lofi} src={Lofi} alt="Lofi" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.WrapperRow} onClick= {e => e.stopPropagation()}>
                        <div className={styles.Card3} onClick= {e => e.stopPropagation()} id="green">
                            <div className={styles.WrapperCol}>
                                <div className={styles.Center}>
                                    <div className={styles.SubTitle3}>
                                        THE FINAL PRODUCT
                                    </div>
                                        <br></br>
                                    <div className={styles.Header2}>
                                        An app that allows users to dynamically measure medication use and mood... 
                                    {/* <div className={styles.Body}>
                                        An app that... 
                                    </div> */}
                                </div>
                                        <br></br>
                                        <br></br>
                                    <img className={styles.Feature} alt="Feature1" src={Feature1}/>
                                        <br></br>
                                        <br></br>
                                    <div className={styles.Header2}>
                                        ...connect anonymously with a safe community...
                                    </div>
                                        <br></br>
                                        <br></br>
                                    <img className={styles.Feature} alt="Feature2" src={Feature2}/>
                                        <br></br>
                                        <br></br>
                                    <div className={styles.Header2}>
                                        ... and access educational content on mental health. 
                                    </div>
                                        <br></br>
                                        <br></br>
                                    <img className={styles.Feature} alt="Feature3" src={Feature3}/>
                                        <br></br>
                                        <br></br>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
               
                <div className={styles.WrapperRow} onClick= {e => e.stopPropagation()}>
                    <div className={styles.BriefBkg2}>
                            <div className={styles.NextSteps}>
                                <div className={styles.MobPaw}>
                                    <img className={styles.Paws} src={NextSteps} alt="paws"/>
                                </div>
                            </div>
                            <div className={styles.Footer}>
                                <div className={styles.SubTitle2}>
                                    NEXT STEPS   
                                </div>
                                <div className={styles.Body2}>
                                    I'm currently in the process of developing OKNOTOK using a ReactJS framework. The release date is set for mid-2023. 
                                        <br></br>
                                        <br></br>
                                    <span>
                                        If you are interested in becoming a beta user or learning more about the project, please contact 
                                        <a href="mailto:OKNOTOKapp@gmail.com">
                                             OKNOTOKapp@gmail.com
                                        </a>
                                        .
                                    </span>
                                        <br></br>
                                        <br></br>
                                    Be well!
                                        <br></br>
                                    Anna Gombay
                                        <br></br>
                                        <br></br>
                                </div>
                                <img className={styles.Signature} src={Signature} alt='Signature'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
    }

export default Modal; 