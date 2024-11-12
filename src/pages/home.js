import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
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
              <Link href="/about" title="About Me" className={styles.abtLnk}><Image src="/nikhil-mishra.jpg" alt="Nikhil_Mishra" title="Nikhil Mishra" width={25} height={25}/>About Me <FaArrowRightFromBracket /></Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
