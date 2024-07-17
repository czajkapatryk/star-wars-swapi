<template>
  <div :class="paginationClass">
    <div
      v-if="paginationOptions.itemsLength"
      class="v-data-table-footer__info"
    >
      <div>
        {{ `${pageStart} - ${pageStop} / ${paginationOptions.itemsLength}` }}
      </div>
    </div>
    <div class="v-data-table-footer__pagination">
      <v-btn
        icon="mdi-arrow-left-bold-circle"
        variant="plain"
        :disabled="!paginationOptions.prevUrl || loading"
        @click="changePage('previous')"
      />
      <v-btn
        icon="mdi-arrow-right-bold-circle"
        variant="plain"
        :disabled="!paginationOptions.nextUrl || loading"
        @click="changePage('next')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue'
import DataPaginationInterface from '@/features/data/interfaces/DataPaginationInterface'

const props = defineProps({
  paginationOptions: {
    type: Object as PropType<DataPaginationInterface>,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  paginationClass: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['change-page', 'update:pagination-options'])

const pageStart = computed(() => {
  return props.paginationOptions
    ? (props.paginationOptions.page - 1) * props.paginationOptions.paginate + 1
    : 0
})

const pageStop = computed(() => {
  if (pageCount.value <= props.paginationOptions.page) {
    return props.paginationOptions.itemsLength
  } else {
    return props.paginationOptions.page * props.paginationOptions.paginate
  }
})

const pageCount = computed(() => {
  return Math.ceil(
    props.paginationOptions.itemsLength / props.paginationOptions.paginate,
  )
})

const changePage = (direction: string) => {
  const newPage =
    direction === 'next'
      ? props.paginationOptions.page + 1
      : props.paginationOptions.page - 1
  emit('update:pagination-options', {
    ...props.paginationOptions,
    page: newPage,
  })
  emit('change-page', newPage)
}
</script>
