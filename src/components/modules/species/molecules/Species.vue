<template>
  <Data
    :rows="species"
    :headers="[
      {
        title: 'Name',
        value: 'name',
      },
      {
        title: 'Language',
        value: 'language',
      },
      {
        title: 'Classification',
        value: 'classification',
      },
      {
        title: 'Designation',
        value: 'designation',
      },
      {
        title: 'Average lifespan',
        value: 'average_lifespan',
      },
      {
        title: 'Average height',
        value: 'average_height',
      },
      {
        title: 'URL',
        value: 'url',
      },
    ]"
    :loading="loading"
    :pagination-options="paginationOptions"
    :value="species"
    @filter="$emit('filter')"
    @change-page="$emit('fetchDataByUrl')"
    @update:pagination-options="updatePaginationOptions"
  >
    <template #item:url="{ row }">
      <a
        class="c-species--link"
        :href="row.url"
        target="_blank"
        >{{ row.url }}</a
      >
    </template>
  </Data>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { SpecieType } from '@/features/specie/types/SpecieType'
import DataPaginationInterface from '@/features/data/interfaces/DataPaginationInterface'
import Data from '@/components/modules/data/organisms/Data.vue'

defineProps({
  species: {
    type: Array as PropType<SpecieType>,
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
.c-species--link:hover {
  opacity: 0.55;
}

.c-species--link {
  color: var(--primary);
}

.c-species--link:visited {
  color: #999999;
}
</style>
