import { describe, it, expect } from 'vitest'
import { buildSearchQuery } from '../../components/modules/data/commands/searchQuery'

describe('buildSearchQuery', () => {
  it('returns a query string when searchQuery is provided', () => {
    const searchQuery = 'test'
    const query = buildSearchQuery(searchQuery)
    expect(query).toBe('search=test')
  })

  it('returns an empty string when searchQuery is empty', () => {
    const searchQuery = ''
    const query = buildSearchQuery(searchQuery)
    expect(query).toBe('')
  })
})
