import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/default.vue'
import ErrorLayout from '../layouts/error.vue'
import PlanetsView from '../views/PlanetsView.vue'
import StarShipsView from '../views/StarShipsView.vue'
import PlanetPreview from '../views/PlanetPreview.vue'
import PeopleView from '../views/PeopleView.vue'
import FilmsView from '../views/FilmsView.vue'
import VehiclesView from '../views/VehiclesView.vue'
import SpeciesView from '../views/SpeciesView.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    redirect: '/planets',
    children: [
      {
        path: 'planets',
        name: 'Planets',
        component: PlanetsView,
      },
      {
        path: '/planet/:id',
        name: 'PlanetPreview',
        component: PlanetPreview,
      },
      {
        path: 'starships',
        name: 'Starships',
        component: StarShipsView,
      },
      {
        path: 'people',
        name: 'People',
        component: PeopleView,
      },
      {
        path: 'vehicles',
        name: 'Vehicles',
        component: VehiclesView,
      },
      {
        path: 'species',
        name: 'Species',
        component: SpeciesView,
      },
      {
        path: 'films',
        name: 'Films',
        component: FilmsView,
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: ErrorLayout,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
