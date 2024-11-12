import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Card.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { LuFileDown } from "react-icons/lu";
import { MdMarkEmailUnread } from "react-icons/md";

export default function Nikhil() {
  return (
    <>
      <Head>
        <title>Nikhil Mishra</title>
        <meta name="description" content="Web Develepor - Beyond Crativity" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className={styles.cardMain}>
        <Container className={styles.main}>
          <Row className={styles.cardContainer}>
            <Col className={styles.descripcion}>
              <h1>Nikhil Mishra</h1>
              <h2>Web Developer</h2>
              <p>{"Hi there ! I'm Nikhil, Front-End developer with expertise in HTML, CSS, JavaScript, and React. Skilled in crafting user-friendly web & mobile interfaces with React Native. Strong team collaborator with excellent interpersonal skills. Ready to bring fresh ideas to dynamic projects!"}</p>
              <div className={styles.icons}>
                <Link href="https://www.linkedin.com/in/nikhil-mishra-664672180/" title="LinkedIn" target="_blank"><BsLinkedin /></Link>
                <Link href="https://www.github.com/nikhil7476/" title="GitHub" target="_blank"><FaGithub /></Link>
                <Link href="/Nikhil-Mishra-Resume.pdf" title="Resume" target="_blank"><LuFileDown /></Link>
                <Link href="/home" title="Website"><FaGlobe /></Link>
              </div>
            </Col>
            <Col className={styles.image}>
              <Image src="/nikhil-mishra.jpg" alt="Nikhil-Mishra" title="Nikhil Mishra" width={100} height={100} />
              <div className={styles.icons}>
                <Link href="tel:+91-9027917476" title="Phone"><FaPhoneVolume /></Link>
                <Link href="mailto:nikhil9027917476@gmail.com" title="Email"><MdMarkEmailUnread /></Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
