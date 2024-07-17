<template>
  <div>
    <v-btn
      v-if="!isMobile"
      :icon="true"
      class="c-toggle--btn"
      :color="`${isCardView ? 'primaryVariant' : 'primary'}`"
      @click="toggleView"
    >
      <v-icon> mdi-{{ isCardView ? 'table' : 'cards' }}</v-icon>
      <v-tooltip>View {{ isCardView ? 'table' : 'cards' }}</v-tooltip>
    </v-btn>
    <component
      :is="isMobile || isCardView ? DataCard : DataTable"
      :rows="rows"
      :headers="headers"
      :loading="loading"
      :has-actions="hasActions"
      :pagination-options="paginationOptions"
      @change-page="changePage"
      @update:pagination-options="updatePaginationOptions"
    >
      <template
        v-for="header in headers"
        :key="header.value"
        #[`item:${header.value}`]="{ row }"
      >
        <slot
          :name="'item:' + header.value"
          :row="row"
        >
          {{ row[header.value] }}
        </slot>
      </template>
      <template
        v-if="hasActions"
        #item:actions="{ row }"
      >
        <slot
          v-if="hasActions"
          name="item:actions"
          :row="row"
        ></slot>
      </template>
    </component>
  </div>
</template>

<script setup lang="ts">
import { ref, PropType, computed, useSlots, watch } from 'vue'
import type { DataHeadersType } from '@/features/data/types/DataHeadersType.ts'
import type DataPaginationInterface from '@/features/data/interfaces/DataPaginationInterface.ts'
import { useMobileStore } from '@/store/mobile'

import DataTable from '@/components/modules/data/modules/DataTable.vue'
import DataCard from '@/components/modules/data/modules/DataCard.vue'

defineProps({
  rows: {
    type: Array as PropType<any[]>,
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
})

const emit = defineEmits(['change-page', 'update:pagination-options'])

const mobileStore = useMobileStore()
const isMobile = computed(() => mobileStore.isMobile)

const slots = useSlots()
const hasActions = ref(Boolean(slots['item:actions']))

const isCardView = ref(false)

const toggleView = () => {
  isCardView.value = !isCardView.value
}

const changePage = (url: string) => {
  emit('change-page', url)
}

const updatePaginationOptions = (options: DataPaginationInterface) => {
  emit('update:pagination-options', options)
}

watch(
  () => slots['item:actions'],
  (newSlot) => {
    hasActions.value = Boolean(newSlot)
  },
  { immediate: true },
)
</script>
<style lang="css" scoped>
.c-toggle--btn {
  position: fixed;
  right: 0;
  top: 20%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  z-index: 9;
}
</style>
