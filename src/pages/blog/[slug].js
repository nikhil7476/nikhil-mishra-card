import { useRouter } from "next/router";
import { blogPosts } from "@/utils/dummyData";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Blog.module.css";
import { FaHashtag } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";

export default function BlogPost() {
    const router = useRouter();
    const { slug } = router.query;
    const post = blogPosts.find((post) => post.slug === slug);

    if (!post) return <p>Loading...</p>;

    return (
        <>
            <section className={styles.blogSingle}>
                <Container>
                    <Row className="justify-content-center">
                        <Col className="col-md-8">
                            <Link href="/blog" title="Blogs"><IoIosArrowBack /> Posts</Link>
                            <Image src={post.image} alt={post.title} title={post.title} width={100} height={100} />
                            <h1>{post.title}</h1>
                            <div className={styles.blogMeta}>
                                <span><MdDateRange /> {post.date}</span>
                                <span><FaCircleUser /> {post.author}</span>
                                <span><FaHashtag /> {post.tag}</span>
                            </div>
                            <p>{post.content}</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}