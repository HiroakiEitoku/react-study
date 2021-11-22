import {Story} from '@storybook/react'
import {Props, TodoListItem} from './index'

const config = {
  title: 'atoms/TodoListItem',
  component: TodoListItem
}

export default config

const Template: Story<Props> = (args) => <TodoListItem {...args}/>

export const Default = Template.bind({})
Default.args = {
  isCompleted: false,
  text: 'test'
}
