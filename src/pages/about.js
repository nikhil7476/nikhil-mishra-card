import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaDownload, FaEnvelope } from "react-icons/fa";
import { SiJavascript, SiReact, SiAngular, SiCss3 } from "react-icons/si";
import Link from "next/link";
import styles from "@/styles/About.module.css";

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <section className={styles.heroSection}>
        <Container className="text-center">
          <h1 className={styles.heroTitle}>Nikhil Mishra</h1>
          <p className={styles.heroSubtitle}>
            Front-End Developer | Creator of Interactive Digital Experiences
          </p>
          <div>
            <Link className={styles.heroButton} href="/Nikhil-Mishra-Resume.pdf" target="_blank">
              <FaDownload className="me-2" /> Download Resume
            </Link>
            <Link className={styles.heroButton} href="https://www.linkedin.com/in/nikhil-mishra-664672180/" target="_blank">
              <FaLinkedin className="me-2" /> LinkedIn
            </Link>
          </div>
        </Container>
      </section>
      <section className={styles.aboutMeSection}>
        <Container>
          <Row>
            <Col className="col-md-4">
              <img
                src="/nikhil-mishra.jpg"
                alt="Nikhil Mishra"
                className={styles.profileImage}
              />
            </Col>
            <Col className="col-md-8">
              <h2 className={styles.sectionTitle}>About Me</h2>
              <p className={styles.aboutText}>
                With 1.2 years of experience in front-end and back-end
                development, I specialize in creating seamless user interfaces
                using cutting-edge technologies like React, Angular, and React
                Native. I aim to deliver efficient, modern, and visually
                appealing solutions that leave a lasting impression.
              </p>
              <p className={styles.aboutText}>
                As a lifelong learner, I constantly explore new tools and
                frameworks, ensuring that I stay ahead of the curve in the
                ever-evolving tech landscape.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.skillsSection}>
        <Container>
          <h2 className={styles.sectionTitle}>Technical Skills</h2>
          <Row>
            <Col className={`col-md-3 ${styles.skillCard}`}>
              <SiJavascript className={styles.skillIcon} />
              <h4>JavaScript</h4>
              <p>ES6+, Async Programming</p>
            </Col>
            <Col className={`col-md-3 ${styles.skillCard}`}>
              <SiReact className={styles.skillIcon} />
              <h4>React</h4>
              <p>Hooks, Redux, Context API</p>
            </Col>
            <Col className={`col-md-3 ${styles.skillCard}`}>
              <SiAngular className={styles.skillIcon} />
              <h4>Angular</h4>
              <p>RxJS, Forms, Components</p>
            </Col>
            <Col className={`col-md-3 ${styles.skillCard}`}>
              <SiCss3 className={styles.skillIcon} />
              <h4>CSS</h4>
              <p>Animations, Grid, Flexbox</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.contactSection}>
        <Container className="text-center">
          <h2 className={styles.sectionTitle}>Get in Touch</h2>
          <p>
            Ready to collaborate or discuss exciting ideas? Let’s connect and
            create something amazing!
          </p>
          <Link className={styles.heroButton} href="mailto:nikhil9027917476@gmail.com">
            <FaEnvelope className="me-2" /> Contact Me
          </Link>
        </Container>
      </section>
    </div>
  );
};

export default About;
