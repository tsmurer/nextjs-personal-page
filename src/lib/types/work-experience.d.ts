// Database-centric types (if using ORM like Drizzle/Prisma)
export type DbWorkExperience = {
    id: string;
    company: string;
    role: string;
    startDate: Date;
    endDate: Date | null; // null = current position
    description: string[];
    skills: string[];
    isFeatured: boolean;
    logoUrl?: string;
    companyUrl?: string;
  };
  
  // Frontend-optimized type (for UI display)
  export type WorkExperience = Omit<DbWorkExperience, 'description'> & {
    formattedDate: string; // "Jan 2022 - Present"
    highlights: React.ReactNode[]; // JSX-ready descriptions
  };
  
  // API Response types
  export type WorkExperienceAPIResponse = {
    data: WorkExperience[];
    pagination?: {
      total: number;
      page: number;
    };
  };
  
  // Form input type (for admin panel)
  export type WorkExperienceFormValues = {
    company: string;
    role: string;
    startDate: string; // ISO date string
    endDate: string | null;
    description: string; // Markdown format
    skills: string; // Comma-separated
    isFeatured: boolean;
  };