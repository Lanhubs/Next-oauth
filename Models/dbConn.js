import { Sequelize } from "sequelize";
import mongoose from "mongoose";

export const dbConnection = () => {
  /* const sequelize = new Sequelize("todostore", "root", "", {
    host: "localhost",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  });
  sequelize.sync({ force: true, alter: true });
  sequelize
    .authenticate()
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((e) => console.log(e)); */
  mongoose
    .connect("mongodb://localhost:27017/todostore")
    .then((success) => {
      if (success) {
        console.log("conected successfully: ", success);
      }
    })
    .catch((e) => console.log(e));

  const collection = new mongoose.Schema({
    todo: String,
  })
  const todoModel = mongoose.models.todos || mongoose.model("todos", collection);

  return { mongoose, todoModel }
};

/*  mongoose
  .connect("mongodb://localhost:27017/todostore")
  .then((success) => {
    if (success) {
      console.log("conected successfully: ", success);
    }
  })
  .catch((e) => console.log(e));

  const collection = new mongoose.Schema({
    todo:String
})

const todoModel = mongoose.models.todos || mongoose.model("todos", collection) */
