import { describe, it, expect, vi } from 'vitest'
import debounce from '../../features/filters/commands/debounce'

describe('debounce', () => {
  it('should debounce a function', () => {
    vi.useFakeTimers()

    const func = vi.fn()
    const debouncedFunc = debounce(func, 400)

    debouncedFunc()
    debouncedFunc()
    debouncedFunc()

    vi.runAllTimers()

    expect(func).toHaveBeenCalledTimes(1)
  })

  it('should pass the correct arguments to the debounced function', () => {
    vi.useFakeTimers()

    const func = vi.fn()
    const debouncedFunc = debounce(func, 400)

    debouncedFunc(1, 2, 3)
    vi.runAllTimers()

    expect(func).toHaveBeenCalledWith(1, 2, 3)
  })
})
