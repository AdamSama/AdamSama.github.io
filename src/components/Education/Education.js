// Education.js
import React from 'react';
import styles from './Education.module.css';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

const Education = ({ schools }) => {
    return (
        <Section nopadding id="Education">
            <SectionDivider />
            <SectionTitle main>Education</SectionTitle>
            {schools.map(school => (
                <div className={styles.educationEntry} key={school.name}>
                    <div className={styles.schoolLogo}>
                        <img src={school.logo} alt={`${school.name} logo`} />
                    </div>
                    <div className={styles.schoolInfo}>
                        <h2>{school.name}</h2>
                        <h3>{school.degree}</h3>
                        <p>{school.date}</p>
                        <p>{school.description}</p>
                        <p>Selected Courses:</p>
                        <ul>
                            {school.courses.map(course => (
                            <li key={course}>{course}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </Section>
    );
};

export default Education;
