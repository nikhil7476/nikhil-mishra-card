import React from "react";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import {
  FaLinkedin,
  FaDownload,
  FaEnvelope,
  FaComments,
  FaUsers,
  FaChartLine,
  FaLightbulb,
  FaClock,
  FaHandshake,
  FaBrain,
  FaPeopleArrows,
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiCss3,
  SiHtml5,
  SiWordpress,
  SiNextdotjs,
  SiPhp,
  SiPython,
} from "react-icons/si";
import Link from "next/link";
import styles from "@/styles/About.module.css";
import Image from "next/image";

const About = () => {
  const experience = [
    {
      title: "Associate Web Developer",
      company: "Nextupgrad Web Solutions Pvt Ltd, Lucknow",
      duration: "Dec 2023 - Present",
      description:
        "Leading front-end development projects, optimizing UI/UX, and integrating APIs for seamless functionality in React and WordPress.",
    },
    {
      title: "Web Developer Intern",
      company: "Nextupgrad Web Solutions Pvt Ltd, Lucknow",
      duration: "Aug 2023 - Nov 2023",
      description:
        "Designed and developed interactive websites, implemented SEO best practices, and assisted in frontend development for client projects.",
    },
    {
      title: "Programmer Analyst Trainee",
      company: "Cognizant Technology Solutions Pvt Ltd, Pune",
      duration: "Dec 2022 - Apr 2023",
      description:
        "Executed automated tests using Selenium. Collaborated with teams to enhance software performance using SDET frameworks.",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      institution: "GLA University, Mathura",
      duration: "2018 - 2022",
      description:
        "Graduated with distinction, specializing in web technologies, programming languages, and software engineering principles.",
    },
    {
      degree: "Higher Secondary Certificate (12th)",
      institution: "Gyan Sthali Academy, Auraiya",
      duration: "2016 - 2018",
      description:
        "Excelled in core science subjects, including Physics, Chemistry, and Mathematics, achieving academic excellence.",
    },
    {
      degree: "Secondary School Certificate (10th)",
      institution: "Royal Oxford INTR School, Etawah",
      duration: "2014 - 2016",
      description:
        "Acquired foundational knowledge in science and mathematics, securing a strong academic record.",
    },
  ];

  return (
    <div className={styles.aboutPage}>
      <section className={styles.heroSection}>
        <Container className="text-center">
          <h1 className={styles.heroTitle}>Nikhil Mishra</h1>
          <p className={styles.heroSubtitle}>
            Front-End Developer | Creator of Interactive Digital Experiences
          </p>
          <div>
            <Link
              className={styles.heroButton}
              href="/Nikhil-Mishra-Resume.pdf"
              target="_blank"
            >
              <FaDownload className="me-2" /> Download Resume
            </Link>
            <Link
              className={styles.heroButton}
              href="https://www.linkedin.com/in/nikhil-mishra-664672180/"
              target="_blank"
            >
              <FaLinkedin className="me-2" /> LinkedIn
            </Link>
          </div>
        </Container>
      </section>
      <section className={styles.aboutMeSection}>
        <Container>
          <Row className={styles.abtRow}>
            <Col className="col-md-4">
              <Image
                src="/nikhil-mishra.jpg"
                alt="Nikhil Mishra"
                title="Nikhil Mishra"
                className={styles.profileImage}
                width={100}
                height={100}
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
      <section className={styles.timelineSection}>
        <Container>
          <h2 className={styles.sectionTitle}>Experience & Education</h2>
          <Row>
            <Col md={6} className={styles.timelineColumn}>
              <h3 className={styles.columnTitle}>
                <FaBriefcase className={styles.icon} /> Experience
              </h3>
              {experience.map((item, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineHeader}>
                    <h4>{item.title}</h4>
                    <span className={styles.timelineDuration}>
                      {item.duration}
                    </span>
                  </div>
                  <p className={styles.timelineCompany}>{item.company}</p>
                  <p>{item.description}</p>
                </div>
              ))}
            </Col>
            <Col md={6} className={styles.timelineColumn}>
              <h3 className={styles.columnTitle}>
                <FaGraduationCap className={styles.icon} /> Education
              </h3>
              {education.map((item, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineHeader}>
                    <h4>{item.degree}</h4>
                    <span className={styles.timelineDuration}>
                      {item.duration}
                    </span>
                  </div>
                  <p className={styles.timelineInstitution}>
                    {item.institution}
                  </p>
                  <p>{item.description}</p>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.skillsSection}>
        <Container>
          <h2>Technical & Professional Skills</h2>
          <Row>
            <Col className="col-md-6">
              <Row>
                <Col className={`col-md-4 ${styles.skillCard}`}>
                  <SiHtml5 className={styles.skillIcon} />
                  <h4>HTML</h4>
                </Col>
                <Col className={`col-md-4 ${styles.skillCard}`}>
                  <SiCss3 className={styles.skillIcon} />
                  <h4>CSS</h4>
                </Col>
                <Col className={`col-md-4 ${styles.skillCard}`}>
                  <SiJavascript className={styles.skillIcon} />
                  <h4>JavaScript</h4>
                </Col>
              </Row>
              <Row>
                <Col className={`col-md-4 ${styles.skillCard}`}>
                  <SiReact className={styles.skillIcon} />
                  <h4>React</h4>
                </Col>
                <Col className={`col-md-4 ${styles.skillCard}`}>
                  <SiNextdotjs className={styles.skillIcon} />
                  <h4>Next.js</h4>
                </Col>
                <Col className={`col-md-4 ${styles.skillCard}`}>
                  <SiWordpress className={styles.skillIcon} />
                  <h4>WordPress</h4>
                </Col>
              </Row>
              <Row>
                <Col className={`col-md-4 ${styles.skillCard}`}>
                  <SiPhp className={styles.skillIcon} />
                  <h4>PHP</h4>
                </Col>
                <Col className={`col-md-4 ${styles.skillCard}`}>
                  <SiPython className={styles.skillIcon} />
                  <h4>Python</h4>
                </Col>
              </Row>
            </Col>
            <Col className="col-md-6">
              <Row>
                <Col className={`col-md-4 ${styles.skillCard}`}>
                  <div className={styles.skillIconWrapper}>
                    <FaComments className={styles.skillIcon} />
                  </div>
                  <h4>Communication</h4>
                </Col>
                <Col className={`col-md-4 ${styles.skillCard}`}>
                  <div className={styles.skillIconWrapper}>
                    <FaUsers className={styles.skillIcon} />
                  </div>
                  <h4>Teamwork</h4>
                </Col>
                <Col className={`col-md-4 ${styles.skillCard}`}>
                  <div className={styles.skillIconWrapper}>
                    <FaChartLine className={styles.skillIcon} />
                  </div>
                  <h4>Leadership</h4>
                </Col>
              </Row>
              <Row>
                <Col className={`col-md-4 ${styles.skillCard}`}>
                  <div className={styles.skillIconWrapper}>
                    <FaLightbulb className={styles.skillIcon} />
                  </div>
                  <h4>Problem-Solving</h4>
                </Col>
                <Col className={`col-md-4 ${styles.skillCard}`}>
                  <div className={styles.skillIconWrapper}>
                    <FaClock className={styles.skillIcon} />
                  </div>
                  <h4>Time Management</h4>
                </Col>
                <Col className={`col-md-4 ${styles.skillCard}`}>
                  <div className={styles.skillIconWrapper}>
                    <FaHandshake className={styles.skillIcon} />
                  </div>
                  <h4>Negotiation</h4>
                </Col>
              </Row>
              <Row>
                <Col className={`col-md-4 ${styles.skillCard}`}>
                  <div className={styles.skillIconWrapper}>
                    <FaBrain className={styles.skillIcon} />
                  </div>
                  <h4>Critical Thinking</h4>
                </Col>
                <Col className={`col-md-4 ${styles.skillCard}`}>
                  <div className={styles.skillIconWrapper}>
                    <FaPeopleArrows className={styles.skillIcon} />
                  </div>
                  <h4>Adaptability</h4>
                </Col>
              </Row>
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
          <Link
            className={styles.heroButton}
            href="mailto:nikhil9027917476@gmail.com"
          >
            <FaEnvelope className="me-2" /> Contact Me
          </Link>
        </Container>
      </section>
    </div>
  );
};

export default About;
