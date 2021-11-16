// import {useEffect, useState} from 'react'

type Props = {
  name: string
}

export const App = (props: Props) => {
  // create count state default 0
  // example const [state, setState] = useState(default value)
  // create text state default ''

  // create functions
  // countUp count + 1
  // countDown count -1
  // cleanUp 0 reset

  // create side effects functions
  // example useEffect(() => {/*side effect*/}, /*dependency List*/)
  // count = 3multiple is text = 3multiple
  // count != 3multiple is text = count: {count}

  // return (<>
  //   <h1>cont: 0 or 3multiple</h1>
  //   <button>count up</button>
  //   <button>count down</button>
  //   <button>count clean</button>
  // </>)

  return <h1>Hello, {props.name}</h1>
}
