import Image from "next/image";
import { Inter } from "next/font/google";
import connectToDB from "@/utils/db";
// import todoModel from "@/models/todos"
import Todos from "@/components/template/Todos";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ allTodos }) {
  const [todos, settodos] = useState(allTodos);

  
  return (
    <>
     
    </>
  );
}


// export async function getServerSideProps() {
//   let allTodos = []
//   try {
//     console.log("Connected to db  -  1")
//     connectToDB();
//     allTodos = await todoModel.find();
//     console.log("Connected to db  -  todos")
//     if (allTodos)
//       console.log("Todos:", allTodos)
//     else {
//       // res.status(411).json({ message: "get todos Failed" });
//     }
//   } catch (error) {
//     // res.status(401).json({ message: "Add Failed" });
//   }

//   return {
//     props: {
//       allTodos: JSON.parse(JSON.stringify(allTodos))
//     }
//   }
// }