import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Education from '../components/Education/Education';
import Internship from '../components/Internship/Internship';
import { CMUPath, NYUPath } from '../constants/constants';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import About from '../components/About/About';

const Home = () => {
  const schools = [{
        logo: CMUPath,
        name: "Carnegie Mellon University",
        degree: "Master of Science in Mobile and IoT Engineering",
        date: "August 2022 - May 2024",
        courses: ["Distributed Systems", "Embedded Systems", "Cloud Computing", "Computer Networks"]
    }, {
        logo: NYUPath,
        name: "New York University",
        degree: "Bachelor of Science in Math and Computer Science",
        date: "September 2018 - May 2022",
        description: "GPA: 3.8/4.0, graduated with Cum Laude Latin Honor.",
        courses: ["Artificial Intelligence", "Operating Systems", "Database Systems", "Natural Language Processing"]
  }];
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Education schools={schools}/>
      <Internship />
      <Projects />
      <Technologies />
      <About />
    </Layout>
  );
};

export default Home;
