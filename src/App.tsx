import {useEffect, useState} from 'react'

export const App = () => {
  // create count state default 0
  // example const [state, setState] = useState(default value)
  const [count, setCount] = useState(0)

  // create text state default ''
  const [text, setText] = useState("")

  // create functions
  // countUp count + 1
  // countDown count -1
  // cleanUp 0 reset
  const countUp = () => {
    setCount(count + 1)
  }
  const countDown = () => {
    setCount(count - 1)
  }
  const cleanUp = () => {
    setCount(0)
  }

  // create side effects functions
  // example useEffect(() => {/*side effect*/}, /*dependency List*/)
  // count = 3multiple is text = 3multiple
  // count != 3multiple is text = count: {count}

  useEffect(() => {
    // そもそもの問の意図がわからなかったので答えをみた。
    setText(count % 3 === 0 && count !== 0 ? '3multiple': `click count ${count}`)
  }, [count])

  return (<>
    <h1>{text}</h1>
    <h2>count: {count}</h2>
    <button onClick={countUp}>up</button>
    <button onClick={countDown}>down</button>
    <button onClick={cleanUp}>clean</button>
  </>)
}
