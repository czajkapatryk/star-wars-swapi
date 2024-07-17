import { describe, it, expect } from 'vitest'
import { formatDate } from '../../features/helpers/commands/formatDate'

describe('formatDate', () => {
  it('formats a date string correctly', () => {
    const date = '2024-07-11T12:34:56Z'
    const formattedDate = formatDate(date)
    expect(formattedDate).toBe('2024-07-11')
  })

  it('handles different date formats', () => {
    const date = '2024/07/11 12:34:56'
    const formattedDate = formatDate(date)
    expect(formattedDate).toBe('2024-07-11')
  })

  it('pads single digit month and day correctly', () => {
    const date = '2024-07-01T12:34:56Z'
    const formattedDate = formatDate(date)
    expect(formattedDate).toBe('2024-07-01')
  })
})
