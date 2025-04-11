import { db } from "./database";

export const migrate = () => {
  db.serialize(() => {
   db.run(
    `
      CREATE TABLE IF NOT EXISTS blogPosts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        slug TEXT NOT NULL,
        content TEXT NOT NULL,
        coverImage TEXT,
        tags TEXT,
        published INTEGER NOT NULL,
        createdAt TEXT NOT NULL,
        updatedAt TEXT
      );
    `,
    (err: Error) => {
     if (err) {
      console.error(err.message);
     }
     console.log("blog posts table created successfully.");
    }
   );
  });
}