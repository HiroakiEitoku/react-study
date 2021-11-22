import {RenderResult, act, renderHook} from '@testing-library/react-hooks'
import { executionAsyncId } from 'async_hooks'
import {useCounter, useCounterType} from './useCounter'


describe('useCounter', () => {
  let result: RenderResult<useCounterType>
  beforeEach(() => {
    result = renderHook(() => useCounter()).result
  })

  test('default count 0', () => {
    // count get variable = result.current.count
    expect(result.current.count).toEqual(0)
  })
  test('count up', () => {
    expect(result.current.count).toEqual(0)
    act(() => {
      result.current.countUp()
    })
    expect(result.current.count).toEqual(1)
  })
  test('count down', () => {
    expect(result.current.count).toEqual(0)
    act(() => {
      result.current.countDown()
    })
    expect(result.current.count).toEqual(-1)
  })
  test('count clean up', () => {
    expect(result.current.count).toEqual(0)
    act(() => {
      result.current.countUp()
      result.current.countUp()
    })
    expect(result.current.count).toEqual(2)
    act(() => {
      result.current.cleanUp()
    })
    expect(result.current.count).toEqual(0)
  })
})