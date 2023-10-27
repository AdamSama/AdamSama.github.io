import React from 'react';
import styles from './Internship.module.css';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { Orbbec, Orka } from '../../constants/constants';

const Internship = () => {
    return (
        <Section nopadding id="Experience">
            <SectionDivider />
            <SectionTitle main>Work Experience</SectionTitle>

            <div className={styles.internshipEntry}>
                <div className={styles.logoContainer}>
                    <img src={Orbbec} alt="Internship Company Logo"/>
                </div>

                <div className={styles.internshipInfo}>
                    <h2 style={{fontSize: "3rem", color:"#F5C542"}}>Orbbec 3D, Troy, Michigan</h2>
                    <h3 style={{fontSize:'2.5rem'}}>Software Engineer Intern</h3>
                    <h3>May 2023 - August 2023</h3>
                    <SectionText style={{color:'#D3D3D3', fontSize:'2rem'}}>During my internship at Orbbec 3D, I played a crucial role in integrating a customized GPT API into a customer chatbot application. Through my work, I significantly improved the technical response accuracy by 17% by fine-tuning the GPT-4 model using the company SDK, product specifications, and API documentation. Additionally, I focused on optimizing response time by developing non fine-tuned GPT models using FAISS, OpenAI Embedding, and Langchain, resulting in a remarkable 20% reduction in model response time. To ensure efficient communication and overall system performance, I constructed scalable APIs using the Serverless Framework and AWS Lambda.</SectionText>
                </div>
            </div>
            <div className={styles.internshipEntry}>
                <div className={styles.logoContainer}>
                    <img src={Orka} alt="Internship Company Logo"/>
                </div>

                <div className={styles.internshipInfo}>
                    <h2 style={{fontSize: "3rem", color:"#F5C542"}}>Orka Labs, Shanghai, China</h2>
                    <h3 style={{fontSize:'2.5rem'}}>Software Engineer Intern</h3>
                    <h3>Feb 2021 - July 2021</h3>
                    <SectionText style={{color:'#D3D3D3', fontSize:'2rem'}}>During my internship at Orka, I had the opportunity to work on various projects that enhanced service interaction logic and scalability. I successfully restructured customer websites to improve their performance during peak demand periods. Additionally, I designed and implemented backend APIs using RESTful DjangoDB, resulting in a 30% increase in API utilization rate for the product refund systems. Moreover, I led the development of a Hearing Aid mobile application using Flutter and Dart, incorporating intricate hardware-software interaction logic. To ensure consistency and streamline deployment workflow, I leveraged Docker to encapsulate the application and its dependencies.</SectionText>
                </div>
            </div>
        </Section>
    );
}

export default Internship;
