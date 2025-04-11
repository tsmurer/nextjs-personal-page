import { db } from "../database";

export async function POST(request: Request) {
  try {
    db.exec(`DROP TABLE IF EXISTS blogPosts;`);
    return new Response(JSON.stringify({ message: 'Table dropped successfully.' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

export default POST;