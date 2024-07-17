<template>
  <Data
    :rows="planets"
    :headers="[
      {
        title: 'Name',
        value: 'name',
      },
      {
        title: 'Population',
        value: 'population',
      },
      {
        title: 'Orbital period',
        value: 'orbital_period',
      },
      {
        title: 'Climate',
        value: 'climate',
      },
      {
        title: 'Gravity',
        value: 'gravity',
      },
      {
        title: 'Created at',
        value: 'created',
      },
      {
        title: 'URL',
        value: 'url',
      },
    ]"
    :loading="loading"
    :pagination-options="paginationOptions"
    :value="planets"
    @filter="$emit('filter')"
    @change-page="$emit('fetchDataByUrl')"
    @update:pagination-options="updatePaginationOptions"
  >
    <template #item:actions="{ row }">
      <PlanetActions
        :row="row"
        @planet-preview="planetPreview"
      />
    </template>
    <template #item:created="{ row }">
      {{ formatDate(row.created) }}
    </template>
    <template #item:url="{ row }">
      <a
        class="c-planets--link"
        :href="row.url"
        target="_blank"
        >{{ row.url }}</a
      >
    </template>
  </Data>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { useRouter } from 'vue-router'
import type { PlanetType } from '@/features/planet/types/PlanetType'
import DataPaginationInterface from '@/features/data/interfaces/DataPaginationInterface'
import { formatDate } from '@/features/helpers/commands/formatDate'

import Data from '@/components/modules/data/organisms/Data.vue'
import PlanetActions from '@/components/modules/planets/molecules/PlanetActions.vue'

defineProps({
  planets: {
    type: Array as PropType<PlanetType>,
    default: () => [],
  },
  loading: {
    type: Boolean,
    default: false,
  },
  paginationOptions: {
    type: Object as PropType<DataPaginationInterface>,
    required: true,
  },
})

const router = useRouter()

const planetPreview = (url: string) => {
  const planetId = url.split('/').filter(Boolean).pop()
  router.push({ name: 'PlanetPreview', params: { id: planetId } })
}
const emit = defineEmits([
  'filter',
  'fetchDataByUrl',
  'update:pagination-options',
])

const updatePaginationOptions = (options: DataPaginationInterface) => {
  emit('update:pagination-options', options)
}
</script>

<style lang="css" scoped>
.c-planets--link:hover {
  opacity: 0.55;
}

.c-planets--link {
  color: var(--primary);
}

.c-planets--link:visited {
  color: #999999;
}
</style>
