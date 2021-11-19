import {FC} from 'react'
import styled from '@emotion/styled'
import {css} from '@emotion/react'

export type Props = {
  text: string
}
type Size = 'small' | 'medium' | 'large'
type Color = 'primary' | 'secondary'

const selectSize = (size: Size) => {
  const small = css`
    font-size: 12px;
    padding: 10px 16px;
  `
  const medium = css`
    font-size: 14px;
    padding: 11px 20px;
  `
  const large = css`
    font-size: 16px;
    padding: 12px 24px;
  `
  switch (size) {
    case 'small':
      return small
    case 'medium':
      return medium
    case 'large':
      return large
    default:
      return small
  }
}
const selectColor = (color: Color) => {
  const primary = css`
    color: white;
    background-color: #1ea7fd;
    &:disabled {
      background-color: #d9d9d9;
      border-color: #d9d9d9;
      color: #999;
      cursor: not-allowed;
    }
  `
  const secondary = css`
    color: #333;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0 0 0 1px inset;
  `
  switch (color) {
    case 'primary':
      return primary
    case 'secondary':
      return secondary
    default:
      return primary
  }
}

const StyledButton = styled.button<{size: Size, color: Color}>`
  border-radius: 3em;
  white-space: nowrap;
  background-color: #d9d9d9;
  font-weight: 700;
  line-height: 1;
  color: #333;
  ${({size}) => selectSize(size)}
  ${({color}) => selectColor(color)}
`

export const H1: FC<Props> = (props) => (
  <h1>
    {props.text}
  </h1>)