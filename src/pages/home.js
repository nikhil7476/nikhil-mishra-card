import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { Col, Container, Row, Form, Button, InputGroup } from "react-bootstrap";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import styles from "@/styles/Home.module.css";
import ImageSlider from "@/components/ImageSlider";
import { blogPosts } from "@/utils/dummyData";

export default function Home() {

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const router = useRouter();

  // The handleSubmit function, which is invoked when the form is submitted.
  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent form submission (default behavior)

    // Clear previous status messages
    setStatus('');

    // Define the email regex to validate the email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Trim the email to avoid leading/trailing spaces
    const trimmedEmail = email.trim();

    // Check if the email matches the regex pattern
    if (emailRegex.test(trimmedEmail)) {
      try {
        // Send the email data to your API
        const response = await fetch('/api/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: trimmedEmail }),  // Send trimmed email
        });

        if (response.ok) {
          setStatus('success'); // Set success message
          setEmail('');  // Reset email input
        } else {
          setStatus('error');  // Handle error case
        }
      } catch (error) {
        console.error('Error submitting email:', error);
        setStatus('error');
      }
    } else {
      setStatus('error');  // Invalid email format
    }
  };

  return (
    <>
      <Head>
        <title>Nikhil Mishra</title>
        <meta name="description" content="Web Developer - Beyond Creativity" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className={styles.banner}>
        <Container>
          <Row>
            <Col className="col-md-7">
              <h1>Design Engineer & Builder</h1>
              <p>{"I'm Nikhil, a web developer at Nextupgrad Web Solutions Pvt Ltd, where I craft intuitive user experiences. After hours, I build my own projects."}</p>
              <Link href="/about" title="About Me" className={styles.abtLnk}><Image src="/nikhil-mishra.jpg" alt="Nikhil_Mishra" title="Nikhil Mishra" width={25} height={25} />About Me <FaArrowRightFromBracket /></Link>
            </Col>
            <Col className={`col-md-5 ${styles.nmLogo}`}>
              <Image src="/nikhil-logo.jpeg" alt="Nikhil-Logo" title="Nikhil Mishra" width={100} height={100} />
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.caseStudy}>
        <Container>
          <Row>
            <Col>
              <ImageSlider />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col className="col-md-10">
              <Row>
                <Col className="col-md-6">
                  <h2>Building an adaptive design system for Archlight</h2>
                </Col>
                <Col className="col-md-6">
                  <p>In this project, I developed a flexible and scalable design system using Next.js for front-end development and Figma for design collaboration.</p>
                  <Link href="#" title='Read More'>Read Case Study <IoIosArrowForward /></Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.blogs}>
        <Container>
          <Row>
            <Col className="col-md-4">
              <h2>Latest from<br />the blog</h2>
            </Col>
            {blogPosts.slice(0, 2).map((post) => (
              <Col key={post.id} className="col-md-4">
                <Link href={`/blog/${encodeURIComponent(post.slug)}`} title={post.title}>
                  <h3>{post.title}</h3>
                  <span>{post.date}</span>
                  <p>{post.tag}</p>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className={styles.newsLetter}>
        <Container>
          <Row className="justify-content-center">
            <Col className={`col-md-7 ${styles.news}`}>
              <h2>{"Subscribe to Nikhil's Newsletter"}</h2>
              <p>I occasionally write about design, technology, and share<br />thoughts on the intersection of creativity & engineering.</p>

              <Form className={styles.signupForm} onSubmit={handleSubmit}>
                <InputGroup>
                  <Form.Control
                    type="email"
                    placeholder="Email Address"
                    aria-label="Email"
                    className={styles.emailInput}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}  // Handle input change
                    required
                  />
                  <Button variant="light" type="submit" className={styles.signupButton}>
                    Sign up
                  </Button>
                </InputGroup>
              </Form>

              {/* Display status messages */}
              {status === 'success' && <p className={styles.successMessage}>Thanks for subscribing!</p>}
              {status === 'error' && <p className={styles.errorMessage}>Please enter a valid email address.</p>}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
