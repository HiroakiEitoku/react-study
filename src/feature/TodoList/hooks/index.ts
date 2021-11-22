import {useState} from 'react'
import {getId} from '../utils'
import assert from 'assert'

export type todoType = {
  todoId: number
  text: string
  isCompleted: boolean
}

export type useCounterType = {
  todoList: Array<todoType>,
  addTodoList: (addItemText: string) => unknown,
  toggleItemCompletion: (todoId: number) => unknown
}

export const useTodoList = (): useCounterType => {
  const [todoList, setTodoList] = useState(new Array<todoType>())

  const addTodoList = (addItemText: string) => {
    setTodoList((oldTodoList: todoType[]) => [...oldTodoList, {todoId: getId(), text: addItemText, isCompleted: false}])
  }
  const toggleItemCompletion = (todoId: number) => {
    const itemList = todoList.filter(x => x.todoId === todoId)
    assert(itemList.length === 1)
    const oldTodoItem = itemList[0]
    const newTodoItem : todoType = {
      ...oldTodoItem,
      isCompleted: !oldTodoItem.isCompleted
    }
    setTodoList((oldTodoList: todoType[]) => todoList.map(item => item.todoId === todoId ? newTodoItem : item))
  }

  return {
    todoList,
    addTodoList,
    toggleItemCompletion
  }
}