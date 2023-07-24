import clientPromise from "@/libs/connectdb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const client = await clientPromise;
    const db = client.db("interview_questions");

    const js = await db.collection("javascript").find({}).toArray();

    return res.status(200).json({ js });
  }
  if (req.method === "POST") {
    
  }
}
