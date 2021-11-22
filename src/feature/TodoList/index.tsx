import {TodoListItem} from './components/TodoListItem'
import {TodoListInput} from './components/TodoListInput'
import {Heading, HeadingColorType} from '../../components/Heading'
import {useTodoList} from './hooks'

export const TodoList = () => {
  const {todoList, addTodoList,  toggleItemCompletion} = useTodoList()

  return (
    <>
      <Heading text={'todo app'} size={'maximum'} color={HeadingColorType.TextDefault}/>
      <TodoListInput placeholder="New Task…" onSubmit={addTodoList} value=""/>
      {todoList.map((todoItem) => (
        <TodoListItem key={todoItem.todoId} isCompleted={todoItem.isCompleted} text={todoItem.text} toggleCompletion={() => toggleItemCompletion(todoItem.todoId)}/>
      ))}
    </>
  )
}