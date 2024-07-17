<template>
  <FilterWrapper v-model="isOpened">
    <template #headerButtons>
      <slot name="headerButtons" />
    </template>
    <v-form
      :disabled="loading"
      class="c-filter-template"
    >
      <slot />
    </v-form>
  </FilterWrapper>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import FilterWrapper from '@/components/modules/filter/organisms/FilterWrapper.vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
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
.c-filter-template {
  display: flex;
  gap: var(--gap);
}

@media all and (max-width: 767px) {
  .c-filter-template {
    flex-direction: column;
    gap: var(--gap--xxs);
  }
}
</style>
