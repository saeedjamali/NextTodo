import React from 'react'
import { FaTrash } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import axios from 'axios';
import { useTodo } from '@/pages/TodosProvider';


function Todo({ _id, title, desc, createAt, updateAt,isDone }) {

  const { getTodos, isEdit, setIsEdit, inpTitle, setTitle, inpDesc, setDesc, setCurrentTodo, isDoneView, setIsDone, currentTodo } = useTodo();
  const handlerRemove = async (id) => {
    try {
      const deletedTodo = await axios.delete("/api", { data: { _id: id } });
      getTodos();
      setIsEdit(false);
      setTitle("");
      setDesc("");
    } catch (error) {
      console.log(error)
    }
  }

  const handlerUpdate = async (id) => {
    try {
      const { data: todo } = await axios.get(`/api/${id}`);
      setIsEdit(true);
      setTitle(todo.title);
      setDesc(todo.desc);
      setCurrentTodo(todo);
    } catch (error) {
      console.log(error)
    }
  }

  const handlerDone = async (id) => {
    try {
      const {data:editTodo} = await axios.put(`/api/${id}`, { isDone: !isDone });
      if (editTodo) {
        console.log("DONE 2:", editTodo)
        setCurrentTodo(editTodo);
        setIsDone(currentTodo.isDone);
         getTodos();
      } else {

      }
    } catch (error) {
      console.log(error)
    }
  }

  console.log("Created At ", createAt);
  return (
    <div className='w-2/3 flex items-center justify-between bg-gray-200 rounded-md px-8 py-4 ring-rose-900 ring-1 '>
      <div className='flex-1'>
        <span className='px-4 py-4 '>{title}</span>
        -
        <span>{updateAt}</span>
      </div>
      <div className=' flex items-center justify-between gap-x-4'>
        <span onClick={() => handlerRemove(_id)}><FaTrash /> </span>
        <span onClick={() => handlerUpdate(_id)}><MdModeEdit /></span>
        <span onClick={() => handlerDone(_id)}>{isDone ? <IoCheckmarkDoneCircleOutline /> : <IoCheckmarkDoneCircleSharp />}</span>
      </div>

    </div>
  )
}

export default Todo