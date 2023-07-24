import clientPromise from "@/libs/connectdb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const client = await clientPromise;
    const db = client.db("interview_questions");

    const js = await db.collection("javascript").find({}).toArray();

    return res.status(200).json({ js });
  }
  if (req.method === "POST") {
    try {
      const client = await clientPromise;
      const db = client.db("interview_questions");

      const new_question = {
        question: req.body.question,
        answer: req.body.answer,
      };

      const createdQuestion = await db
        .collection("javascript")
        .insertOne(new_question);

      return res.status(201).json({
        status: "successful",
        _id: createdQuestion.insertedId,
        question: new_question.question,
        answer: new_question.answer,
      });
    } catch (error: any) {
      return res.status(400).json({ error: error });
    }
  }
}
