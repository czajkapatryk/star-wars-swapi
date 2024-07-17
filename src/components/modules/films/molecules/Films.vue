<template>
  <Data
    :rows="films"
    :headers="[
      {
        title: 'Title',
        value: 'title',
      },
      {
        title: 'Producer',
        value: 'producer',
      },
      {
        title: 'Release date',
        value: 'release_date',
      },
    ]"
    :loading="loading"
    :pagination-options="paginationOptions"
    :value="films"
    @filter="$emit('filter')"
    @change-page="$emit('fetchDataByUrl')"
    @update:pagination-options="updatePaginationOptions"
  />
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import type { FilmType } from '@/features/film/types/FilmType'
import DataPaginationInterface from '@/features/data/interfaces/DataPaginationInterface'
import Data from '@/components/modules/data/organisms/Data.vue'

defineProps({
  films: {
    type: Array as PropType<FilmType>,
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
