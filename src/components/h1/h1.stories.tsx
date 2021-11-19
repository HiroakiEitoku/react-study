import {Story} from '@storybook/react'
import {H1, Props} from './index'

const config = {
  title: 'atoms/H1',
  component: H1
}

export default config

const Template: Story<Props> = (args) => <H1 {...args}/>

export const Default = Template.bind({})
Default.args = {
  text: 'sample'
}
