import { BlogPost } from '@/lib/types/blog';

export default async function BlogPage() {
    const allPosts: BlogPost[] = []// await db.select().from(posts).all();
    return (
        <div>
            <h1>ADMIN BLOG POSTS</h1>
            {
                allPosts.map(post => (
                    <article>
                        <h2>{post.title}</h2>
                        <p>{post.slug}</p>
                    </article>
                ))
            }
        </div>
    );
}