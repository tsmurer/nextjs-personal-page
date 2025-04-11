import { BlogPost } from "@/lib/types/blog";
import { Pencil, Trash2 } from 'lucide-react';
import './styles.scss';
import { format } from "path";
import InfoBadge from "../badges/info-badge";

type BlogPostListProps = {
    blogposts: BlogPost[];
};

function formatDate(date: Date ) {
    return new Date(Number(date)).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
}

export default function BlogPostList({ blogposts }: BlogPostListProps) {
    return (
        <table>
            <thead>
                <tr>
                    <th className="px-4 py-2 w-1/4">Title</th>
                    <th className="px-4 py-2 w-1/4">Slug</th>
                    <th className="px-4 py-2 w-1/5">Created At</th>
                    <th className="px-4 py-2 w-1/6">Status</th>
                    <th className="px-4 py-2 w-1/12 text-right"></th>
                </tr>
            </thead>
            <tbody>
                {
                    blogposts.map(post => (
                        <tr key={post.id}>
                            <td>{post.title}</td>
                            <td>{post.slug}</td>
                            <td>{formatDate(post.createdAt)}</td>
                            <td>
                            {
                            post.published ? 
                            <InfoBadge className="" type="published">Published</InfoBadge> : 
                            <InfoBadge className="" type="draft">Draft</InfoBadge>
                            }
                            </td>
                            <td>
                                <div className="row-actions">
                                    <Pencil size={20}></Pencil>
                                    <Trash2 size={20}></Trash2>
                                </div>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}