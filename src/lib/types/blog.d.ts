export type BlogPost = {
    id: string;
    slug: string;
    title: string;
    content: string;      
    coverImage?: string;
    tags: string[];
    published: boolean;
    createdAt: Date;
    updatedAt: Date;
  };
  
  export type BlogPostPreview = Omit<BlogPost, 'content'>;