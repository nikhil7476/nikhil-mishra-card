import React from "react";
import Link from "next/link";
import Image from "next/image";
import { caseStudy } from "@/utils/caseData"; // Assuming blogPosts are imported from a separate file
import styles from "@/styles/Blog.module.css";

const CaseStudyPage = () => {
  const latestPost = caseStudy[0];
  const otherPosts = caseStudy.slice(1); // This now includes all other posts

  return (
    <div className={styles.container}>
      <h1>Writing about design and tech...</h1>

      {/* Latest Post */}
      <div className={styles.latestPost}>
        <Image
          src={latestPost.image}
          alt={latestPost.title}
          className={styles.featuredImage}
          width={1200}
          height={750}
        />
        <div className={styles.latestPostContent}>
          <Link href={`/work/${encodeURIComponent(latestPost.slug)}`}>
            <h2 className={styles.postTitle}>{latestPost.title}</h2>
          </Link>
          <span className={styles.date}>{latestPost.date}</span>
          <p className={styles.tag}>{latestPost.tag}</p>
        </div>
      </div>

      {/* All Other Posts */}
      <div className={styles.otherPosts}>
        {otherPosts.map((post) => (
          <div key={post.id} className={styles.postCard}>
            <Link href={`/work/${encodeURIComponent(post.slug)}`}>
              <h3 className={styles.postTitle}>{post.title}</h3>
            </Link>
            <span className={styles.date}>{post.date}</span>
            <p className={styles.tag}>{post.tag}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudyPage;
