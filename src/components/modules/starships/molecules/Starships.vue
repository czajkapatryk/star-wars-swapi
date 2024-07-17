<template>
  <Data
    :rows="starships"
    :headers="[
      {
        title: 'Name',
        value: 'name',
      },
      {
        title: 'Model',
        value: 'model',
      },
      {
        title: 'Cost in credits',
        value: 'cost_in_credits',
      },
      {
        title: 'Starship class',
        value: 'starship_class',
      },
      {
        title: 'Crew',
        value: 'crew',
      },
      {
        title: 'Manufacturer',
        value: 'manufacturer',
      },
      {
        title: 'URL',
        value: 'url',
      },
    ]"
    :loading="loading"
    :pagination-options="paginationOptions"
    :value="starships"
    @filter="$emit('filter')"
    @change-page="$emit('fetchDataByUrl')"
    @update:pagination-options="updatePaginationOptions"
  >
    <template #item:url="{ row }">
      <a
        class="c-starships--link"
        :href="row.url"
        target="_blank"
        >{{ row.url }}</a
      >
    </template>
  </Data>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import type { StarshipType } from '@/features/starship/types/StarshipType'
import DataPaginationInterface from '@/features/data/interfaces/DataPaginationInterface'
import Data from '@/components/modules/data/organisms/Data.vue'

defineProps({
  starships: {
    type: Array as PropType<StarshipType>,
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
.c-starships--link:hover {
  opacity: 0.55;
}

.c-starships--link {
  color: var(--primary);
}

.c-starships--link:visited {
  color: #999999;
}
</style>
