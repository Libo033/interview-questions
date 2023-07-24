import clientPromise from "@/libs/connectdb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const client = await clientPromise;
    const db = client.db("interview_questions");

    const react = await db.collection("react").find({}).toArray();

    return res.status(200).json({ react });
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
        .collection("react")
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