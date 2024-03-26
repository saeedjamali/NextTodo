import React, { useEffect, useState } from 'react'
import Todo from '../module/Todo'
import axios, { all } from 'axios'
import { useTodo } from '../../pages/TodosProvider';

function Todos() {
  const { todos } = useTodo();
  return (
    <div className='w-full flex flex-col items-center gap-y-4'>
      {
        todos.map((todo) =>
          <Todo {...todo} />
        )
      }
    </div>
  )
}

export default Todos


