import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { Col, Container, Row, Form, Button, InputGroup } from "react-bootstrap";
import { FaArrowRightFromBracket } from "react-icons/fa6";


export default function Home() {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col className="col-md-7">
              <h1>Design Engineer & Builder</h1>
              <p>{"I'm Nikhil, a design engineer at FLY, where I craft intuitive user experiences. After hours, I build my own projects."}</p>
              <Link href="/about" title="About Me" className={styles.abtLnk}><Image src="/nikhil-mishra.jpg" alt="Nikhil_Mishra" title="Nikhil Mishra" width={25} height={25} />About Me <FaArrowRightFromBracket /></Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.newsLetter}>
        <Container>
          <Row className="justify-content-center">
            <Col className={`col-md-7 ${styles.news}`}>
              <h2>{"Subscribe to Nikhil's Newsletter"}</h2>
              <p>I occasionally write about design, technology, and share<br />thoughts on the intersection of creativity & engineering.</p>
              <Form className={styles.signupForm}>
                <InputGroup>
                  <Form.Control
                    type="email"
                    placeholder="Email Address"
                    aria-label="Email"
                    className={styles.emailInput}
                    required
                  />
                  <Button variant="light" type="submit" className={styles.signupButton}>
                    Sign up
                  </Button>
                </InputGroup>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
