import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const id: any = req.query.id;

  if (req.method === "GET") {
    res.status(200).json({ name: `TS_Questions ${id}` });
  }
  if (req.method === "PUT") {
    
  }
  if (req.method === "DELETE") {
    
  }
}