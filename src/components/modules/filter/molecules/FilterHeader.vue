<template>
  <v-card-title class="c-filter-header">
    <div class="c-filter-header__title">
      <h1>Filters</h1>
      <FilterExpandButton
        v-model="isOpened"
        class="c-card-expandable__button"
      />
    </div>
    <div class="c-filter-header__buttons">
      <slot name="buttons" />
    </div>
  </v-card-title>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import FilterExpandButton from '@/components/modules/filter/atoms/FilterExpandButton.vue'

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
.c-filter-header__buttons {
  overflow: unset !important;
  height: 36px;
}
.c-filter-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 115%;
  color: var(--primary);
  transition: margin-bottom 0.2s ease-out;
}
.c-filter-header__title {
  display: flex;
  gap: 1rem;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}

.c-filter-header h1 {
  font-size: var(--font_size--xl);
}
</style>
