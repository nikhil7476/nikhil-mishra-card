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
  return (
    <>
      <Head>
        <title>Nikhil Mishra</title>
        <meta name="description" content="Web Develepor - Beyond Crativity" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className={styles.banner}>
        <Container>
          <Row className={styles.bnrMain}>
            <Col className="col-md-7">
              <h1>Design Engineer & Builder</h1>
              <p>
                {
                  "I'm Nikhil, a web developer at Nextupgrad Web Solutions Pvt Ltd, where I craft intuitive user experiences. After hours, I build my own projects."
                }
              </p>
              <Link href="/about" title="About Me" className={styles.abtLnk}>
                <Image
                  src="/nikhil-logo.jpeg"
                  alt="Nikhil_Mishra"
                  title="Nikhil Mishra"
                  width={25}
                  height={25}
                />
                About Me <FaArrowRightFromBracket />
              </Link>
            </Col>
            <Col className={`col-md-5 ${styles.nmLogo}`}>
              <Image
                src="/nikhil-logo.jpeg"
                alt="Nikhil-Logo"
                title="Nikhil Mishra"
                width={460}
                height={460}
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.caseStudy}>
        <Container>
          <Row>
            <Col className="col-md-6">
              <ImageSlider />
            </Col>
            <Col className={`col-md-6 ${styles.caseRow}`}>
              <div>
                <h2>Building an adaptive design system for Archlight</h2>
              </div>
              <div>
                <p>
                  In this project, I developed a flexible and scalable design
                  system using Next.js for front-end development and Figma for
                  design collaboration.
                </p>
                <Link href="#" title="Read More">
                  Read Case Study <IoIosArrowForward />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.blogs}>
        <Container>
          <Row className={styles.blogRow}>
            <Col className="col-md-4">
              <h2>
                Latest from
                <br />
                the blog
              </h2>
            </Col>
            {blogPosts.slice(0, 2).map((post) => (
              <Col key={post.id} className="col-md-4">
                <Link
                  href={`/blog/${encodeURIComponent(post.slug)}`}
                  title={post.title}
                >
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
              <p>
                I occasionally write about design, technology, and share
                <br />
                thoughts on the intersection of creativity & engineering.
              </p>
              <Form className={styles.signupForm}>
                <InputGroup>
                  <Form.Control
                    type="email"
                    placeholder="Email Address"
                    aria-label="Email"
                    className={styles.emailInput}
                    required
                  />
                  <Button
                    variant="light"
                    type="submit"
                    className={styles.signupButton}
                  >
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
