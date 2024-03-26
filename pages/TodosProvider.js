import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'



const TodoContext = createContext();
function TodosProvider({ children }) {
    const [currentTodo, setCurrentTodo] = useState({});
    const [todos, setTodos] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [inpTitle, setTitle] = useState("");
    const [inpDesc, setDesc] = useState("");
    const [isDoneView, setIsDone] = useState(false);

    const getTodos = async () => {

        try {
            const todos = await axios.get("/api/")
            setTodos(todos.data)

        } catch (error) {
            console.log("Error in context :", error);
        }
    }
    useEffect(() => {
        getTodos();
    }, []);


    return (
        <TodoContext.Provider value={{ todos, getTodos, setIsEdit, isEdit, inpTitle, setTitle, inpDesc, setDesc, setCurrentTodo, currentTodo, isDoneView, setIsDone }}>{children}</TodoContext.Provider>
    )
}

export default TodosProvider;

export function useTodo() {
    return useContext(TodoContext)
}

