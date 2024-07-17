export default interface DataPaginationInterface {
  nextUrl: string | null
  prevUrl: string | null
  paginate: number
  page: number
  itemsLength: number
}
