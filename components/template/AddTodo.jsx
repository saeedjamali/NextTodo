import { useTodo } from '@/pages/TodosProvider';
import connectToDB from '@/utils/db';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

function AddTodo() {


    const { getTodos, isEdit, inpTitle, setTitle, inpDesc, setDesc, currentTodo, setCurrentTodo, setIsEdit } = useTodo();


    const handleAddTodo = async (e) => {
        e.preventDefault();
        let addTodoToDb = ""
        if (!inpTitle || !inpDesc) {
            toast.error("عنوان یا توضیحات خالی می باشد")
            return false
        };

        const addTodo = {
            title: inpTitle,
            desc: inpDesc,
            createAt: new Date().toLocaleString('Fa'),
            updateAt: new Date().toLocaleString('Fa')
        }

        try {
            addTodoToDb = await axios.post("/api/", addTodo);
            getTodos();
            setDesc("");
            setTitle("")

        } catch (error) {
            toast.error(addTodoToDb.data?.message || error.message);
        }

    }


    const handleEditTodo = async (e) => {
        e.preventDefault();
        try {
            currentTodo.isDone=  currentTodo.isDone;
            currentTodo.title = inpTitle;
            currentTodo.desc = inpDesc;
            currentTodo.updateAt = new Date().toLocaleString('fa')

            const editTodo = await axios.put(`/api/${currentTodo._id}`, currentTodo);
            if (editTodo) {
                getTodos();
                setDesc("");
                setTitle("")
                setIsEdit(false);
                toast.success("ويرايش با موفقيت انجام شد")
            } else {
                toast.error("خطا در زمان ويرايش");
            }
        } catch (error) {
            toast.error(addTodoToDb.data?.message || error.message);
        }

    }


    return (

        <div className='py-4'>
            <form className='flex items-center justify-center' onSubmit={handleAddTodo}>
                <input className="input-todo" type='text' name="title" placeholder='عنوان' onChange={(e) => setTitle(e.target.value)} value={inpTitle}></input>
                <input className="input-todo" type='text' name="desc" placeholder='توضیحات' onChange={(e) => setDesc(e.target.value)} value={inpDesc}></input>
                {!isEdit && <button className='btn-todo' onClick={handleAddTodo}>افزودن</button>}
                {isEdit && <button className='btn-todo mr-4 bg-blue-400' onClick={handleEditTodo}>ويرايش</button>}
            </form>
        </div>
    )
}

export default AddTodo