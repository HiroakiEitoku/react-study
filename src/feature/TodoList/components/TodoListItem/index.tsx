import styled from '@emotion/styled'
import {ChangeEvent, FC, useState} from 'react'

export type Props = {
  text: string
  isCompleted: boolean
  toggleCompletion: () => unknown
}

const StyledTodoItem = styled.div<{ isCompleted: boolean }>`
  padding: 15px;
  margin: 5px 0;
  border-radius: 0;
  background: #f7f7f7;
  span {
    margin: 0 5px;
    text-decoration: ${({isCompleted}) => isCompleted ? 'line-through' : 'none'}
  }
`

const StyledTodoItemCheckbox = styled.input`
  width: 19px;
  height: 19px;
  padding: 0;
  box-sizing: border-box;
`

export const TodoListItem: FC<Props> = (props) => {
  const [isCompleted, setCompletion] = useState(props.isCompleted)
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.toggleCompletion()
    setCompletion(!isCompleted)
  }

  return (
    <StyledTodoItem isCompleted={isCompleted}>
      <StyledTodoItemCheckbox type="checkbox" checked={isCompleted} onChange={onChange}/>
      <span>{props.text}</span>
    </StyledTodoItem>
  )
}