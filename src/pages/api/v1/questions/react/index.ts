import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json({ name: "React_Questions" });
  }
  if (req.method === "POST") {
    
  }
}
