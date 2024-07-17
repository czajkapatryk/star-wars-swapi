<template>
  <div class="c-expandable-btn">
    <v-btn
      :icon="true"
      density="comfortable"
      color="primary"
      @click="toggleOpen"
    >
      <v-icon>{{
        isOpened ? 'mdi-arrow-up-thin' : 'mdi-arrow-down-thin'
      }}</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['update:model-value'])

const isOpened = computed<boolean>({
  get() {
    return props.modelValue
  },
  set(value: boolean) {
    emit('update:model-value', value)
  },
})

const toggleOpen = () => {
  isOpened.value = !isOpened.value
}
</script>

<style lang="css" scoped>
.c-expandable-btn {
  padding: var(--padding-xxs);
  border-radius: 100%;
  box-shadow: rgba(0, 0, 0, 0.16) 0 -2px 0 0 !important;
}
</style>
