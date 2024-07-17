import type NavItemsInterface from './NavItemsInterface'

export default interface NavInterface {
  miniVariant: boolean
  defaultTabs: () => NavItemsInterface
}
