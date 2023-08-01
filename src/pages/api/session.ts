import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      if (
        req.body.email === process.env.USER_EMAIL &&
        req.body.password === process.env.USER_PASS
      ) {
        const secretKey: string | undefined = process.env.JWT_SECRET;

        if (secretKey === undefined) {
          res.status(401).json({ login: false });
        } else {
          const token = jwt.sign(
            {
              email: req.body.email,
            },
            secretKey
          );

          const serializedCookie = serialize("myToken", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 1000 * 60 * 60 * 24 * 30,
            path: "/",
          });

          res.setHeader("Set-Cookie", serializedCookie);
          res.json({ login: true });
        }
      } else {
        res.status(401).json({ login: false });
      }
    } catch (error) {
      res.status(401).json({ login: false });
    }
  }
};
