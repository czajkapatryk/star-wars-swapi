export const buildSearchQuery = (searchQuery: string): string => {
  return searchQuery ? `search=${searchQuery}` : ''
}
