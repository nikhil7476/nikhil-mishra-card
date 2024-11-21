import React from "react";
import Head from "next/head";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import styles from "@/styles/Contact.module.css";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Nikhil Mishra</title>
        <meta name="description" content="Web Develepor - Beyond Crativity" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className={styles.contact}>
        <Container>
          <Row className="mt-5">
            <Col md={4}>
              <div className={styles.contactInfo}>
                <FaEnvelope size={30} />
                <h5>Email</h5>
                <p><Link href="mailto:nikhil9027917476@gmail.com<" title="nikhil9027917476@gmail.com<">nikhil9027917476@gmail.com</Link></p>
              </div>
            </Col>
            <Col md={4}>
              <div className={styles.contactInfo}>
                <FaPhoneAlt size={30} />
                <h5>Phone</h5>
                <p><Link href="tel:+91-9027917476" title="+91-9027917476">+91-9027917476</Link>, <Link href="tel:+91-7900677476" title="+91-7900677476">+91-7900677476</Link></p>
              </div>
            </Col>
            <Col md={4}>
              <div className={styles.contactInfo}>
                <FaMapMarkerAlt size={30} />
                <h5>Address</h5>
                <p>{"95A Ajetmal, Auraiya, U.P., India (206121)"}</p>
              </div>
            </Col>
          </Row>
          <Row className={styles.cMap}>
            <Col md={6}>
              <h2>Contact Us</h2>
              <p>{"Feel free to reach out to us for any inquiries. We're here to help"}</p>
              <Form className={styles.form}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    className={styles.formControl}
                  />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    className={styles.formControl}
                  />
                </Form.Group>
                <Form.Group controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter your message"
                    name="message"
                    className={styles.formControl}
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className={styles.submitButton}>
                  Send Message <FaArrowRightFromBracket />
                </Button>
              </Form>
            </Col>
            <Col md={6}>
              <h2>Our Location</h2>
              <div style={{ height: "400px", width: "100%" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d197.2005048548882!2d79.31150607212938!3d26.559420525515897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1732205980791!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
