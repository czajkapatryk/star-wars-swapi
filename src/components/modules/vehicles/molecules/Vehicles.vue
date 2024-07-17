<template>
  <Data
    :rows="vehicles"
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
        title: 'Cargo capacity',
        value: 'cargo_capacity',
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
    :value="vehicles"
    @filter="$emit('filter')"
    @change-page="$emit('fetchDataByUrl')"
    @update:pagination-options="updatePaginationOptions"
  >
    <template #item:url="{ row }">
      <a
        class="c-vehicles--link"
        :href="row.url"
        target="_blank"
        >{{ row.url }}</a
      >
    </template>
  </Data>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { VehicleType } from '@/features/vehicle/types/VehicleType'
import DataPaginationInterface from '@/features/data/interfaces/DataPaginationInterface'
import Data from '@/components/modules/data/organisms/Data.vue'

defineProps({
  vehicles: {
    type: Array as PropType<VehicleType>,
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
.c-vehicles--link:hover {
  opacity: 0.55;
}

.c-vehicles--link {
  color: var(--primary);
}

.c-vehicles--link:visited {
  color: #999999;
}
</style>
