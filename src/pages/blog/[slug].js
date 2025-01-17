// import { useRouter } from "next/router";
// import { blogPosts } from "@/utils/dummyData";
// import { Container, Row, Col } from "react-bootstrap";
// import Image from "next/image";
// import Link from "next/link";
// import styles from "@/styles/Blog.module.css";
// import { FaHashtag } from "react-icons/fa";
// import { MdDateRange } from "react-icons/md";
// import { FaCircleUser } from "react-icons/fa6";
// import { IoIosArrowBack } from "react-icons/io";

// export default function BlogPost() {
//   const router = useRouter();
//   const { slug } = router.query;
//   const post = blogPosts.find((post) => post.slug === slug);

//   if (!post) return <p>Loading...</p>;

//   return (
//     <>
//       <section className={styles.blogSingle}>
//         <Container>
//           <Row className="justify-content-center">
//             <Col className="col-md-8">
//               <Link href="/blog" title="Blogs">
//                 <IoIosArrowBack /> Posts
//               </Link>
//               <Image
//                 src={post.image}
//                 alt={post.title}
//                 title={post.title}
//                 width={1200}
//                 height={750}
//               />
//               <h1>{post.title}</h1>
//               <div className={styles.blogMeta}>
//                 <span>
//                   <MdDateRange /> {post.date}
//                 </span>
//                 <span>
//                   <FaCircleUser /> {post.author}
//                 </span>
//                 <span>
//                   <FaHashtag /> {post.tag}
//                 </span>
//               </div>
//               <p>{post.content}</p>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </>
//   );
// }

// import { useRouter } from "next/router";
// import { useEffect, useState, useRef } from "react";
// import { blogPosts } from "@/utils/dummyData";
// import { Container, Row, Col } from "react-bootstrap";
// import Image from "next/image";
// import Link from "next/link";
// import styles from "@/styles/Blog.module.css";
// import { FaHashtag } from "react-icons/fa";
// import { MdDateRange } from "react-icons/md";
// import { FaCircleUser } from "react-icons/fa6";
// import { IoIosArrowBack } from "react-icons/io";

// export default function BlogPost() {
//   const router = useRouter();
//   const { slug } = router.query;
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     if (slug) {
//       const initialIndex = blogPosts.findIndex((post) => post.slug === slug);
//       if (initialIndex !== -1) {
//         setCurrentIndex(initialIndex);
//       }
//     }
//   }, [slug]);

//   useEffect(() => {
//     if (containerRef.current) {
//       const sections = containerRef.current.querySelectorAll(".blog-section");
//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               const index = parseInt(entry.target.dataset.index, 10);
//               if (index !== currentIndex) {
//                 updateURL(index);
//               }
//             }
//           });
//         },
//         { root: null, rootMargin: "0px", threshold: 0.5 }
//       );

//       sections.forEach((section) => observer.observe(section));
//       return () => observer.disconnect();
//     }
//   }, [currentIndex]);

//   const updateURL = (newIndex) => {
//     setCurrentIndex(newIndex);
//     router.push(`/blog/${blogPosts[newIndex].slug}`, undefined, { shallow: true });
//   };

//   return (
//     <section ref={containerRef} className={styles.blogSingle}>
//       <Container>
//         {blogPosts.map((post, index) => (
//           <Row
//             key={post.slug}
//             className={`justify-content-center blog-section`}
//             data-index={index}
//           >
//             <Col className="col-md-8">
//               {index === 0 && (
//                 <Link href="/blog" title="Blogs">
//                   <IoIosArrowBack /> Posts
//                 </Link>
//               )}
//               <Image
//                 src={post.image}
//                 alt={post.title}
//                 title={post.title}
//                 width={1200}
//                 height={750}
//               />
//               <h1>{post.title}</h1>
//               <div className={styles.blogMeta}>
//                 <span>
//                   <MdDateRange /> {post.date}
//                 </span>
//                 <span>
//                   <FaCircleUser /> {post.author}
//                 </span>
//                 <span>
//                   <FaHashtag /> {post.tag}
//                 </span>
//               </div>
//               <p>{post.content}</p>
//               <hr />
//             </Col>
//           </Row>
//         ))}
//       </Container>
//     </section>
//   );
// }

import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import { blogPosts } from "@/utils/dummyData";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Blog.module.css";
import { FaHashtag, FaCircleUser } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";

export default function BlogPost() {
  const {
    query: { slug },
    push,
  } = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const index = blogPosts.findIndex((post) => post.slug === slug);
    if (index !== -1) setCurrentIndex(index);
  }, [slug]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting, target }) => {
          if (isIntersecting) {
            const index = parseInt(target.dataset.index, 10);
            if (index !== currentIndex) {
              setCurrentIndex(index);
              push(`/blog/${blogPosts[index].slug}`, undefined, {
                shallow: true,
              });
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = containerRef.current?.querySelectorAll(".blog-section");
    sections?.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [currentIndex, push]);

  return (
    <section ref={containerRef} className={styles.blogSingle}>
      <Container>
        {blogPosts.map(
          ({ slug, image, title, date, author, tag, content }, index) => (
            <Row
              key={slug}
              className="justify-content-center blog-section"
              data-index={index}
            >
              <Col md={8}>
                {index === 0 && (
                  <Link href="/blog" title="Blogs">
                    <IoIosArrowBack /> Posts
                  </Link>
                )}
                <Image
                  src={image}
                  alt={title}
                  title={title}
                  width={1200}
                  height={750}
                />
                <h1>{title}</h1>
                <div className={styles.blogMeta}>
                  <span>
                    <MdDateRange /> {date}
                  </span>
                  <span>
                    <FaCircleUser /> {author}
                  </span>
                  <span>
                    <FaHashtag /> {tag}
                  </span>
                </div>
                <p>{content}</p>
                <hr />
              </Col>
            </Row>
          )
        )}
      </Container>
    </section>
  );
}
