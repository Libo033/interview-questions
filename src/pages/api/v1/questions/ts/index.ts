import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json({ name: "TS_Questions" });
  }
  if (req.method === "POST") {
    
  }
}
