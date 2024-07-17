<template>
  <div>
    <Sort
      :fields="headers"
      @update:sort="handleSort"
    />
    <div class="c-data-card">
      <v-card
        v-for="(row, index) in sortedRows"
        :key="row.id"
        class="c-data-card__container"
      >
        <v-card-text class="c-data-card__container--text">
          <v-icon class="c-data-card__container--icon"
            >mdi-{{ showIcon(index) }}</v-icon
          >
          <div
            v-for="header in headers"
            :key="header.value"
          >
            <strong>{{ header.title }}: </strong>
            <slot
              :name="`item:${header.value}`"
              :row="row"
            >
              {{ row[header.value] }}
            </slot>
          </div>
          <div
            v-if="hasActions"
            class="c-data-card__actions"
          >
            <strong>Actions:</strong>
            <slot
              name="item:actions"
              :row="row"
            />
          </div>
        </v-card-text>
      </v-card>
      <div
        v-if="!sortedRows.length"
        class="c-data-card__container--no-data"
      >
        <NoData />
      </div>
    </div>
    <Pagination
      class="c-data-card__pagination"
      :loading="loading"
      :pagination-options="paginationOptions"
      @change-page="handlePageChange"
      @update:pagination-options="updatePaginationOptions"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, PropType } from 'vue'
import type DataPaginationInterface from '@/features/data/interfaces/DataPaginationInterface.js'
import Sort from '@/components/modules/data/atoms/Sort.vue'
import Pagination from '@/components/modules/data/atoms/Pagination.vue'
import NoData from '@/components/modules/data/atoms/NoData.vue'

const props = defineProps({
  rows: {
    type: Array as PropType<any[]>,
    required: true,
  },
  headers: {
    type: Array as PropType<Array<{ title: string; value: string }>>,
    required: true,
  },
  paginationOptions: {
    type: Object as PropType<DataPaginationInterface>,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  hasActions: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['change-page', 'update:pagination-options'])

const sortField = ref(props.headers[0]?.value ?? '')
const sortOrder = ref('asc')

const icons = [
  'death-star',
  'rocket',
  'alien',
  'space-station',
  'robot',
  'satellite',
  'star-shooting',
  'ufo',
  'space-invaders',
  'alien-outline',
]

const showIcon = (index: number) => {
  return icons[index]
}

const handlePageChange = (url: string) => {
  emit('change-page', url)
}

const updatePaginationOptions = (options: DataPaginationInterface) => {
  emit('update:pagination-options', options)
}

const handleSort = ({ field, order }: { field: string; order: string }) => {
  sortField.value = field
  sortOrder.value = order
}

const sortedRows = computed(() => {
  return [...props.rows].sort((a, b) => {
    if (a[sortField.value] < b[sortField.value])
      return sortOrder.value === 'asc' ? -1 : 1
    if (a[sortField.value] > b[sortField.value])
      return sortOrder.value === 'asc' ? 1 : -1
    return 0
  })
})
</script>
