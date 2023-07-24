import clientPromise from "@/libs/connectdb";
import { ObjectId } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id: any = req.query.id;

  if (req.method === "GET") {
    try {
      const client = await clientPromise;
      const db = client.db("interview_questions");
  
      const js_question = await db.collection("javascript").find({ _id: new ObjectId(id) }).toArray();

      if (js_question.length === 0) {
        throw new Error("Doesn't exist this ID")
      }
  
      return res.status(200).json({ js_question });
    } catch (error: any) {
      return res.status(202).json({ error: error.message })
    }
  }
  if (req.method === "PUT") {
    
  }
  if (req.method === "DELETE") {
    
  }
}
