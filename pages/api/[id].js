import connectToDB from "@/utils/db";
import todoModel from "@/models/todos"

const handler = async (req, res) => {

    if (req.method == "PUT") {
        try {
            const { id } = req.query;
            console.log("BODY :", req.body)
            connectToDB();
            const todo = await todoModel.findOneAndUpdate({ _id: id }, req.body);
          
            if (todo)
                res.status(200).json(todo);
            else {
                res.status(411).json({ message: "get todos Failed" });
            }
        } catch (error) {
            console.log(error)
            res.status(401).json({ message: "Add Failed" });
        }

    }

    if (req.method == "GET") {
        try {
            const { id } = req.query;
            connectToDB();
            const todo = await todoModel.findOne({ _id: id });
            console.log("PUT 2 : ", todo);
            if (todo)
                res.status(200).json(todo);
            else {
                res.status(411).json({ message: "get todos Failed" });
            }
        } catch (error) {
            console.log(error)
            res.status(401).json({ message: "Add Failed" });
        }


    }
}

export default handler