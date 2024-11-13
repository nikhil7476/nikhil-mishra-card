import React from "react";
import Link from "next/link";
import { blogPosts } from "@/utils/dummyData"; // Assuming blogPosts are imported from a separate file
import styles from "@/styles/Blog.module.css";

const BlogPage = () => {
    const latestPost = blogPosts[0];
    const otherPosts = blogPosts.slice(1); // This now includes all other posts

    return (
        <div className={styles.container}>
            <h1>Writing about design and tech...</h1>

            {/* Latest Post */}
            <div className={styles.latestPost}>
                <img src={latestPost.image} alt={latestPost.title} className={styles.featuredImage} />
                <div className={styles.latestPostContent}>
                    <Link href={`/blog/${encodeURIComponent(latestPost.slug)}`}>
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
                        <Link href={`/blog/${encodeURIComponent(post.slug)}`}>
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

export default BlogPage;
