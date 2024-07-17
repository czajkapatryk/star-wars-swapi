<template>
  <FilmWithFilters
    v-model="filterState"
    :films="films"
    :pagination-options="paginationOptions"
    :loading="loading"
    @fetch-data="fetchData"
    @update:pagination-options="updatePaginationOptions"
  />
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, watch } from 'vue'
import { buildSearchQuery } from '@/components/modules/data/commands/searchQuery'
import DataPaginationInterface from '@/features/data/interfaces/DataPaginationInterface'
import FilmWithFilters from '@/components/modules/films/organisms/FilmWithFilters.vue'
import axios from '@/plugins/axios'

const films = ref([])
const loading = ref(false)

const filterState = reactive({
  isOpened: true,
  searchQuery: '',
})

const paginationOptions = reactive<DataPaginationInterface>({
  nextUrl: null,
  prevUrl: null,
  paginate: 10,
  page: 1,
  itemsLength: 0,
})

const fetchData = async () => {
  loading.value = true
  const query = buildSearchQuery(filterState.searchQuery)
  try {
    const response = await axios.get(
      `/films?page=${paginationOptions.page}&${query}`,
    )
    films.value = response.data.results
    paginationOptions.itemsLength = response.data.count
    paginationOptions.nextUrl = response.data.next
    paginationOptions.prevUrl = response.data.previous
  } finally {
    loading.value = false
  }
}

watch(() => filterState.searchQuery, fetchData)

const updatePaginationOptions = (options: DataPaginationInterface) => {
  paginationOptions.paginate = options.paginate
  paginationOptions.page = options.page
}

onMounted(() => {
  fetchData()
})
</script>
