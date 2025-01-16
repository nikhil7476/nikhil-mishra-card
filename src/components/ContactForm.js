import styles from "@/styles/Contact.module.css";
import { Form, Button } from "react-bootstrap";
import { FaArrowRightFromBracket } from "react-icons/fa6";

export default function ContactForm() {
  return (
    <>
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
    </>
  );
}
