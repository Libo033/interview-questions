import clientPromise from "@/libs/connectdb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const client = await clientPromise;
    const db = client.db("interview_questions");

    const react = await db.collection("react").find({}).toArray();

    return res.status(200).json({ react });
  }
  if (req.method === "POST") {
    
  }
}
