<template>
  <CardExpandable v-model="isOpened">
    <template #header>
      <FilterHeader v-model="isOpened">
        <template #buttons>
          <slot name="headerButtons" />
        </template>
      </FilterHeader>
    </template>
    <div class="c-filter-content">
      <slot />
    </div>
  </CardExpandable>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import CardExpandable from '@/components/modules/filter/molecules/FilterCardExpandable.vue'
import FilterHeader from '@/components/modules/filter/molecules/FilterHeader.vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['update:model-value'])

const isOpened = computed({
  get() {
    return props.modelValue
  },
  set(value: boolean) {
    emit('update:model-value', value)
  },
})
</script>

<style lang="css" scoped>
.c-filter-content {
  padding: var(--padding);
}
</style>
