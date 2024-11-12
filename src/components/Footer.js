import styles from "@/styles/Footer.module.css";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { BsLinkedin } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";

export default function Footer() {
  return (
    <>
      <div className={styles.ftrMain}>
        <Container>
          <Row>
            <Col className={`col-md-6 ${styles.copy}`}>
              <p>
                &copy; {new Date().getFullYear()} / Nikhil Mishra / Made with Love <span><FaHeart /></span>
              </p>
            </Col>
            <Col className={`col-md-6 ${styles.socio}`}>
              <Link href="https://www.linkedin.com/in/nikhil-mishra-664672180/" title="LinkedIn" target="_blank"><BsLinkedin /></Link>
              <Link href="https://www.github.com/nikhil7476/" title="GitHub" target="_blank"><FaGithub /></Link>
              <Link href="mailto:nikhil9027917476@gmail.com" title="Email"><MdMarkEmailUnread /></Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
