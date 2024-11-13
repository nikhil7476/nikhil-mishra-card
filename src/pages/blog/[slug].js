import { useRouter } from "next/router";
import { blogPosts } from "@/utils/dummyData";

export default function BlogPost() {
    const router = useRouter();
    const { slug } = router.query;
    const post = blogPosts.find((post) => post.slug === slug);

    if (!post) return <p>Loading...</p>;

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}