import { defineStore } from 'pinia'
import type NavItemsInterface from '../features/nav/interfaces/NavItemsInterface'
import type NavInterface from '../features/nav/interfaces/NavInterface'

export const useNavStore = defineStore('nav', {
  state: (): NavInterface => ({
    miniVariant: false,
    defaultTabs: (): NavItemsInterface => {
      return {
        planets: {
          icon: 'mdi-earth',
          title: 'Planets',
          to: '/planets',
        },
        starships: {
          icon: 'mdi-rocket-launch',
          title: 'Starships',
          to: '/starships',
        },
        people: {
          icon: 'mdi-account-group',
          title: 'Characters',
          to: '/people',
        },
        vehicles: {
          icon: 'mdi-plane-car',
          title: 'Vehicles',
          to: '/vehicles',
        },
        species: {
          icon: 'mdi-google-downasaur',
          title: 'Species',
          to: '/species',
        },
        films: {
          icon: 'mdi-movie-open',
          title: 'Films',
          to: '/films',
        },
      }
    },
  }),
  actions: {
    toggleMiniVariant(): void {
      this.miniVariant = !this.miniVariant
      localStorage.setItem('mini_variant', this.miniVariant.toString())
    },
    loadDrawerProps(): void {
      this.miniVariant = localStorage.getItem('mini_variant') === 'true'
    },
  },
})
