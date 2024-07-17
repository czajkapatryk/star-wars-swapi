export interface DataHeader {
  title: string
  value: string
  sortable?: boolean
  width?: number
  align?: 'start' | 'center' | 'end'
  show?: boolean
}

export type DataHeadersType = DataHeader[]
