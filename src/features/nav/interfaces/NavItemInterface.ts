export default interface NavItemInterface {
  icon: string
  title: string
  to?: string
  group?: string
  show?: () => boolean
  items?: {
    [key: string]: NavItemInterface
  }
}
