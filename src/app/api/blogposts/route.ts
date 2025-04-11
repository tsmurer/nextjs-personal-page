import { BlogPost } from "@/lib/types/blog";
import { apiGet, apiPost } from "../database";


export async function GET(req: Request, res: Response) {
  const query = `
    SELECT * FROM blogPosts
  `;

  let status, respBody;
  await apiGet(query)
    .then((rows) => {
      status = 200;
      respBody = rows;
    })
    .catch((err) => {
      status = 400;
      respBody = err;
    });

  return Response.json(respBody, {
    status,
  });
}

export async function POST(req: Request, res: Response) {
 const body = await req.json();
 const { title, content, coverImage, tags, published } = body;

 const query = `
    INSERT INTO blogPosts(slug,  title, content, coverImage, tags, published, createdAt)
    VALUES(?, ?, ?, ?, ?, ?, ?)
  `;
 const values = [
  title.toLowerCase().split(' ').join('-'), 
  title, 
  content, 
  coverImage, 
  tags, 
  published, 
  Date.now().toString() 
];

 let status, respBody;
 await apiPost(query, values)
  .then(() => {
   status = 200;
   respBody = { message: "Successfully created blog post" };
  })
  .catch((err) => {
   status = 400;
   respBody = err;
  });
 return Response.json(respBody, {
  status,
 });
}