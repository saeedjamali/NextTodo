// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectToDB from "@/utils/db";
import todoModel from "@/models/todos"

const handler = async (req, res) => {


  if (req.method == "POST") {
    const todo = req.body;

    try {
      connectToDB();
      const status = await todoModel.create(todo);
      if (status)
        res.status(200).json({ message: "Add Successfully" });
      else {
        res.status(411).json({ message: "Add Failed" });
      }
    } catch (error) {
      console.log("Error: ", error)
      res.status(401).json({ message: "Add Failed" });
    }
  }

  if (req.method == "GET") {
    console.log("Get Received");
    try {
      connectToDB();
      const todos = await todoModel.find();
      if (todos)
        res.status(200).json(todos);
      else {
        res.status(411).json({ message: "get todos Failed" });
      }
    } catch (error) {
      res.status(401).json({ message: "Add Failed" });
    }
  }

  if (req.method == "DELETE") {
    const{_id:id} = req.body;
    console.log("ID:", req.body)
    try {
      connectToDB();
      const todos = await todoModel.findOneAndDelete({_id:id});
      if (todos)
        res.status(200).json(todos);
      else {
        res.status(411).json({ message: "get todos Failed" });
      }
    } catch (error) {
      res.status(401).json({ message: "Add Failed" });
    }
  }
}

export default handler
