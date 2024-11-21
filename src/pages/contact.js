import React from "react";
import Head from "next/head";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import styles from "@/styles/Contact.module.css";

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
                <p>nikhil9027917476@gmail.com</p>
              </div>
            </Col>
            <Col md={4}>
              <div className={styles.contactInfo}>
                <FaPhoneAlt size={30} />
                <h5>Phone</h5>
                <p>+91-9027917476, +91-7900677476</p>
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
          <Row>
            <Col md={6}>
              <h2>Contact Us</h2>
              <p>
                Feel free to reach out to us for any inquiries. We're here to
                help!
              </p>
              {/* Contact Form */}
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
                <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                  <GoogleMap
                    mapContainerStyle={{ height: "100%", width: "100%" }}
                    center={{ lat: 40.748817, lng: -73.985428 }}
                    zoom={13}
                  >
                    <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
                  </GoogleMap>
                </LoadScript>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
