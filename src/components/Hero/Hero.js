import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => {
  const handleClick = (url) => {
    window.open(url, '_blank');
  };
  const sendEmail = () => {
    window.location.href = 'mailto:yuexianl@andrew.cmu.edu';
  };

  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            Welcome To <br />
            Adam's Website 👋
          </SectionTitle>
          <SectionText>
            Hello! I'm Adam Liao 😃, a passionate software and systems engineer with a deep love for technology and problem-solving. Currently pursing my Master degree at Carnegie Mellon University, I've honed my skills in Backend Engineering, Cloud Computing, Distributed Systems, etc. I believe in delivering efficient and scalable solutions to end-users👏. <br/>
            I am currently actively seeking 2024 NG SWE role. If you have any opportuninty, don't hesitate to discuss with me!
          </SectionText>
          <div style={{display:'flex', flexDirection:'row'}}>
            <Button onClick={() => handleClick("https://drive.google.com/file/d/1Kn1tZF8ANEbm5QkYsmkazjMoKxgm6EEk/view?usp=sharing") }>MY RESUME</Button>
            <Button onClick={sendEmail}>CONTACT ME</Button>
          </div>
        </LeftSection>
      </Section>
    </>
  );
};

export default Hero;