import {Story} from '@storybook/react'
import {Props, TodoListInput} from './index'

const config = {
  title: 'atoms/TodoListInput',
  component: TodoListInput
}

export default config

const Template: Story<Props> = (args) => <TodoListInput {...args}/>

export const Default = Template.bind({})
Default.args = {
  placeholder: 'sample'
}
