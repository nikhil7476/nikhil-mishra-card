import React from "react";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import styles from "@/styles/Contact.module.css";
import Link from "next/link";
import FAQs from "@/components/Faq";

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
          <Row className={styles.cMap}>
            <Col>
              <h2>Contact Us</h2>
              <p>
                {
                  "Feel free to reach out to us for any inquiries. We're here to help"
                }
              </p>
              <Row className="mt-5">
                <Col md={4}>
                  <div className={styles.contactInfo}>
                    <FaEnvelope size={30} />
                    <h5>Email</h5>
                    <p>
                      <Link
                        href="mailto:nikhil9027917476@gmail.com<"
                        title="nikhil9027917476@gmail.com<"
                      >
                        nikhil9027917476@gmail.com
                      </Link>
                    </p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className={styles.contactInfo}>
                    <FaPhoneAlt size={30} />
                    <h5>Phone</h5>
                    <p>
                      <Link href="tel:+91-9027917476" title="+91-9027917476">
                        +91-9027917476
                      </Link>
                      ,{" "}
                      <Link href="tel:+91-7900677476" title="+91-7900677476">
                        +91-7900677476
                      </Link>
                    </p>
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
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <h2>Frequently Asked Questions</h2>
              <p className="mb-5">
                Find answers to common questions about my services, skills, and
                approach to web development.
              </p>
              <FAQs />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
