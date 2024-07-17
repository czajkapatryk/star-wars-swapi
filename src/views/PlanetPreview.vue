<template>
  <div
    v-if="planet"
    class="c-planet-preview"
  >
    <div class="c-planet-preview__content">
      <v-card class="c-planet-preview__content--card">
        <ListItem
          header="Name"
          class="u-margin__bottom--xxs"
          value-class="c-planet-preview-header__value"
          item-class="c-planet-preview-header__card"
          :value="planet.name"
        />
        <ListItem
          header="Population"
          class="u-margin__bottom--xxs"
          value-class="c-planet-preview-header__value"
          item-class="c-planet-preview-header__card"
          :value="planet.population"
        />
        <ListItem
          header="Orbital period"
          class="u-margin__bottom--xxs"
          value-class="c-planet-preview-header__value"
          item-class="c-planet-preview-header__card"
          :value="planet.orbital_period"
        />
        <v-icon class="c-planet-preview-header__icon">mdi-earth</v-icon>
      </v-card>
    </div>
    <div class="c-planet-preview__content">
      <v-card class="c-planet-preview__content--card-variant">
        <ListItem
          header="Climate"
          class="u-margin__bottom--xxs"
          value-class="c-planet-preview-header__value"
          item-class="c-planet-preview-header__card"
          :value="planet.climate"
        />
        <ListItem
          header="Planet's diameter"
          class="u-margin__bottom--xxs"
          value-class="c-planet-preview-header__value"
          item-class="c-planet-preview-header__card"
          :value="planet.diameter"
        />
        <ListItem
          header="Rotation period"
          class="u-margin__bottom--xxs"
          value-class="c-planet-preview-header__value"
          item-class="c-planet-preview-header__card"
          :value="planet.rotation_period"
        />
        <v-icon class="c-planet-preview-header__icon-variant"
          >mdi-space-station</v-icon
        >
      </v-card>
    </div>
    <div class="c-planet-preview__content">
      <v-card class="c-planet-preview__content--card">
        <ListItem
          header="Terrain"
          class="u-margin__bottom--xxs"
          value-class="c-planet-preview-header__value"
          item-class="c-planet-preview-header__card"
          :value="planet.terrain"
        />
        <ListItem
          header="Surface water"
          class="u-margin__bottom--xxs"
          value-class="c-planet-preview-header__value"
          item-class="c-planet-preview-header__card"
          :value="planet.surface_water"
        />
        <ListItem
          header="Gravity"
          class="u-margin__bottom--xxs"
          value-class="c-planet-preview-header__value"
          item-class="c-planet-preview-header__card"
          :value="planet.gravity"
        />
        <v-icon class="c-planet-preview-header__icon">mdi-ufo</v-icon>
      </v-card>
    </div>
    <div class="c-planet-preview__content">
      <v-card class="c-planet-preview__content--card-variant">
        <ListItem
          header="Films"
          class="u-margin__bottom--xxs"
          value-class="c-planet-preview-header__value"
          item-class="c-planet-preview-header__card"
          :value="films()"
        />
        <ListItem
          header="Residents"
          class="u-margin__bottom--xxs"
          value-class="c-planet-preview-header__value"
          item-class="c-planet-preview-header__card"
          :value="residents()"
        />
      </v-card>
    </div>
  </div>
  <div v-else>
    <NoData />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import PlanetPreviewInterface from '@/features/planet/interfaces/PlanetPreviewInterface'
import ListItem from '@/components/modules/list/atoms/ListItem.vue'
import NoData from '@/components/modules/data/atoms/NoData.vue'
import axios from '@/plugins/axios'

const route = useRoute()
const planet = ref<PlanetPreviewInterface | null>(null)

const fetchPlanet = async () => {
  try {
    const response = await axios.get(`/planets/${route.params.id}`)
    planet.value = response.data
  } catch {}
}

const residents = () => {
  return planet.value?.residents.map((resident) => resident).join(', ')
}

const films = () => {
  return planet.value?.films.map((film) => film).join(', ')
}

onMounted(() => {
  fetchPlanet()
})
</script>
