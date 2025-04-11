export type AdminUser = {
    id: string;
    email: string;
    passwordHash: string;  // Never expose this in frontend
    lastLogin?: Date;
  };
  
  export type AdminSession = {
    id: string;
    userId: string;
    expiresAt: Date;
  };