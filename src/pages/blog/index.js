import Link from "next/link";
import { blogPosts } from "../../utils/dummyData";
import styles from "@/styles/Blog.module.css";

export default function Blog() {
    return (
        <div>
            <h1>Blog</h1>
            <ul className={styles.blogList}>
                {blogPosts.map((post) => (
                    <li key={post.id} className={styles.blogItem}>
                        <h2>{post.title}</h2>
                        <p>{post.excerpt}</p>
                        <Link href={`/blog/${post.slug}`}>Read More</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
