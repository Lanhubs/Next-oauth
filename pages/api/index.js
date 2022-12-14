// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { dbConnection } from "../../Models/dbConn";

export default async function handler(req, res) {
  const emptyArr = [];
  const { todoModel } = dbConnection();
  const docs = await todoModel.find({});

  if (!docs || docs.length === 0) {
    res.status(405).json({ todos: emptyArr })
  }
  res.status(200).json({docs });
}
