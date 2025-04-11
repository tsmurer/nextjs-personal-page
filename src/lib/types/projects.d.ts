export type Project = {
    id: string;
    name: string;
    description: string;
    url?: string;
    github?: string;
    tags: string[];
    year: number;
    featured: boolean;
    coverImage: string;
  };