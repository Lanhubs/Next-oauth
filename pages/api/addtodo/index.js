import todoModel from "../../../Models/dbConn";
const handler = (req, res) => {
  if (req.method === "POST") {
    todoModel
      .create({ todo: req.body.todo })
      .then((docs) => {
        if (docs.length > 0) {
          res.status(200).json({ todos: docs });
        }
        if (docs.length === 0) {
          res.status(405).json({ todos: "empty todo list" });
        }
      })
      .catch((e) => console.log(e));
  }
};
export default handler;
