// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import todoModel from "../../Models/dataModel";

export default async function handler(req, res) {
  const emptyArr = [];
  const docs = await todoModel.find({});
  console.log(docs)
  if (docs.length > 0) {
    res.status(200).json({ todos: docs });
  }
  if (!docs) {
    res.status(405).json({ todos: emptyArr });
  }
}
