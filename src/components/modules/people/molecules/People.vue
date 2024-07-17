<template>
  <Data
    :rows="people"
    :headers="[
      {
        title: 'Name',
        value: 'name',
      },
      {
        title: 'Gender',
        value: 'gender',
      },
      {
        title: 'Mass',
        value: 'mass',
      },
      {
        title: 'Height',
        value: 'height',
      },
      {
        title: 'Skin color',
        value: 'skin_color',
      },
      {
        title: 'Hair color',
        value: 'hair_color',
      },
      {
        title: 'Eye color',
        value: 'eye_color',
      },
    ]"
    :loading="loading"
    :pagination-options="paginationOptions"
    :value="people"
    @filter="$emit('filter')"
    @change-page="$emit('fetchDataByUrl')"
    @update:pagination-options="updatePaginationOptions"
  />
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import type { PeopleType } from '@/features/pepole/types/PeopleType'
import DataPaginationInterface from '@/features/data/interfaces/DataPaginationInterface'
import Data from '@/components/modules/data/organisms/Data.vue'

defineProps({
  people: {
    type: Array as PropType<PeopleType>,
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
