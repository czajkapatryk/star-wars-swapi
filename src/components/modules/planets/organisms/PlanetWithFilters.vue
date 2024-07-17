<template>
  <FilterTemplate
    v-model="filterState.isOpened"
    :loading="loading"
  >
    <FilterGlobalSearchInput v-model="filterState.searchQuery" />
  </FilterTemplate>
  <Planets
    :planets="planets"
    :pagination-options="paginationOptions"
    :loading="loading"
    @change-page="$emit('fetchData', $event)"
    @update:pagination-options="$emit('update:pagination-options', $event)"
  />
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue'
import type { PlanetType } from '@/features/planet/types/PlanetType'
import DataPaginationInterface from '@/features/data/interfaces/DataPaginationInterface'

import Planets from '@/components/modules/planets/molecules/Planets.vue'
import FilterTemplate from '@/components/modules/filter/organisms/FilterTemplate.vue'
import FilterGlobalSearchInput from '@/components/modules/filter/atoms/FilterGlobalSearchInput.vue'

const props = defineProps({
  planets: {
    type: Array as PropType<PlanetType>,
    required: true,
  },
  modelValue: {
    type: Object as PropType<{ isOpened: boolean; searchQuery: string | null }>,
    required: true,
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
  'fetchData',
  'update:model-value',
  'update:pagination-options',
])

const filterState = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:model-value', value)
  },
})
</script>
