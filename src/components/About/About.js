// About.js
import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import styles from './ProfileCard.module.css';
import { Me, Workout, Rave } from '../../constants/constants';

const profile = [{
    pic: Me,
    txt: "🏀🖥️🎉 Meet Adam, The Balling Coder Raver! 🏀🖥️🎉 By day, I am your friendly neighborhood software whisperer, wrangling zeros and ones like they owe me money. But when the sun goes down and the glow of my computer screen fades, another side of me emerges.",
}, {
    pic: Workout,
    txt: "First up, the court! You see, I'm convinced my fingers were made for two things: typing up code and sinking three-pointers. Michael Jordan, if you're reading this, I'm still waiting on that 1v1 invite. 🏀😉"
}, {
    pic: Rave,
    txt: "And once the weekend hits? The code takes a backseat, and I'm front and center on the dance floor, raving like I'm trying to generate enough static electricity to power a small town. Neon lights, pulsating beats, and a spirit that refuses to be tamed - that's my weekend mantra! 🎶🎉",
}];

const ProfileList = () => {
    return (
      <div>
        {profile.map((item, index) => (
          <ProfileCard key={index} pic={item.pic} txt={item.txt} />
        ))}
      </div>
    );
  };

const ProfileCard = ({pic, txt}) => {
  return (
    <div className={styles.profileCard}>
      <img
        src={pic}
        alt="Adam Liao"
        className={styles.profileImage}
      />
      <div className={styles.description}>
        <SectionText>
            {txt}
        </SectionText>
      </div>
    </div>
  );
};
const About = () => {
    return (
        <Section nopadding id="About">
            <SectionDivider />
            <SectionTitle main>Me In Real Life</SectionTitle>
            <ProfileList />
        </Section>
    );
};

export default About;