import React from 'react'
import TodoItemWrapper from './styles/TodoItemWrapper'

const TodoItem = ({text}) => {
  return (
    <TodoItemWrapper>
      <p>{text}</p>
    </TodoItemWrapper>
  )
}

export default TodoItem