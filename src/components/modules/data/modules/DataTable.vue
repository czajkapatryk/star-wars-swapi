<template>
  <v-data-table
    v-bind="$attrs"
    :items="rows"
    :headers="tableHeaders"
    :items-length="paginationOptions.itemsLength || 0"
    :loading="loading"
    :hover="true"
    fixed-header
    class="c-table"
  >
    <template #item="{ item }: { item: any }">
      <tr
        class="c-table__row"
        :class="{ 'c-table__row--loading': loading }"
      >
        <template
          v-for="header in tableHeaders"
          :key="header.key"
        >
          <td v-if="header.show !== false">
            <slot
              :name="`item:${header.value}`"
              :row="item"
            >
              {{ item[header.value] }}
            </slot>
          </td>
        </template>
      </tr>
    </template>
    <template #loader>
      <v-progress-linear
        indeterminate
        :height="6"
        bg-color="secondary"
        color="primary"
      ></v-progress-linear>
    </template>
    <template #no-data>
      <NoData />
    </template>
    <template
      v-if="!paginationOptions.itemsLength"
      #loading
    >
      <v-skeleton-loader
        color="secondary"
        type="table-tbody"
      />
    </template>
    <template #bottom>
      <Pagination
        pagination-class="c-table__pagination"
        :loading="loading"
        :pagination-options="paginationOptions"
        @change-page="handlePageChange"
        @update:pagination-options="updatePaginationOptions"
      />
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import type { PropType } from 'vue'
import type { DataHeadersType } from '@/features/data/types/DataHeadersType.js'
import type DataPaginationInterface from '@/features/data/interfaces/DataPaginationInterface.js'
import NoData from '@/components/modules/data/atoms/NoData.vue'
import Pagination from '@/components/modules/data/atoms/Pagination.vue'

const props = defineProps({
  rows: {
    type: Array,
    default: () => [],
  },
  headers: {
    type: Array as PropType<DataHeadersType>,
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
  hasActions: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['change-page', 'update:pagination-options'])

const tableHeaders = ref<DataHeadersType>([])

const setTableHeaders = () => {
  const headersCopy = JSON.parse(JSON.stringify(props.headers))
  headersCopy.forEach((header: { sortable?: boolean }) => {
    if (header.sortable === undefined) {
      header.sortable = true
    }
  })
  if (props.hasActions) {
    headersCopy.push({
      sortable: false,
      title: 'Actions',
      key: 'actions',
      value: 'actions',
    })
  }
  tableHeaders.value = headersCopy.filter(
    (header: { show?: boolean }) => header.show !== false,
  )
}

const handlePageChange = (url: string) => {
  emit('change-page', url)
}

const updatePaginationOptions = (options: DataPaginationInterface) => {
  emit('update:pagination-options', options)
}

onMounted(() => {
  setTableHeaders()
})

watch(
  () => props.headers,
  () => setTableHeaders(),
  { immediate: true },
)
</script>
