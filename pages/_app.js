import TodosProvider from "@/pages/TodosProvider";
import Todo from "@/components/module/Todo";
import AddTodo from "@/components/template/AddTodo";
import Todos from "@/components/template/Todos";
import "@/styles/globals.css";
import { ToastBar, Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {

  return (
    <div className="w-full h-screen flex flex-col items-center bg-gray-300 mx-auto rtl-grid ">
      <TodosProvider>
        <Toaster />
        <AddTodo />
        <Todos />
        {/* <Component {...pageProps} /> */}
      </TodosProvider>
    </div>
  )
}



