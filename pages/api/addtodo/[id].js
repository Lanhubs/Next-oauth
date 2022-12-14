import { dbConnection } from "../../../Models/dbConn";

export default function (req, res) {
  const { todoModel } = dbConnection();
  const id = req.query.id;
  console.log(id);
  if (req.method === "DELETE") {
    todoModel
      .findOneAndDelete({ id })
      .then(async (returns) => {
        const docs = await todoModel.find({});
        res.status(200).json({ docs })
      })
      .catch((e) => console.log(e));
  }
}
