'use client'; // Mark as Client Component
import BlogPostList from '@/components/admin/blog-post-list';
import { useEffect, useState } from 'react';
import './styles.scss';
import { ChunkyButton } from '@/components/buttons/chunky-button';


export default function AdminPosts() {
  const [allPosts, setPosts] = useState([]);
  
  useEffect(() => {
    fetch('/api/blogposts')
      .then(res => {
        console.log('response:')
        console.log();
        return res.json()
      })
      .then(setPosts);
  }, []);
  
  return <div className="page">
    <div className="actions">
      <ChunkyButton onClick={() => console.log('clicked!')} className="asd">
        Create stuff
      </ChunkyButton>
    </div>
    <BlogPostList blogposts={allPosts}/>
  </div>;
}