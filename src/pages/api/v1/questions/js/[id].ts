import clientPromise from "@/libs/connectdb";
import { ObjectId } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id: any = req.query.id;

  if (req.method === "GET") {
    try {
      const client = await clientPromise;
      const db = client.db("interview_questions");

      const js_question = await db
        .collection("javascript")
        .find({ _id: new ObjectId(id) })
        .toArray();

      if (js_question.length === 0) {
        throw new Error("Doesn't exist this ID");
      }

      const js = js_question[0];

      return res.status(200).json({ js });
    } catch (error: any) {
      return res.status(202).json({ error: error.message });
    }
  }
  if (req.method === "PUT") {
    try {
      const client = await clientPromise;
      const db = client.db("interview_questions");

      const put_question = {
        question: req.body.question,
        answer: req.body.answer,
      };

      const updated_question = await db
        .collection("javascript")
        .updateOne({ _id: new ObjectId(id) }, { $set: put_question });

      return res.status(200).json({
        status: "successful",
        _id: id,
        question: put_question.question,
        answer: put_question.answer,
      });
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
  if (req.method === "DELETE") {
    try {
      const client = await clientPromise;
      const db = client.db("interview_questions");
  
      const deleted_question = await db.collection("javascript").deleteOne({ _id: new ObjectId(id) });
  
      return res.status(200).json({ deleted: deleted_question.acknowledged });
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }
}
