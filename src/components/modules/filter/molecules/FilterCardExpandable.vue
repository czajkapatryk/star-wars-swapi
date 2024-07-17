<template>
  <div class="c-card-expandable">
    <v-card :header="false">
      <slot name="header" />
      <div
        class="c-card-expandable__content"
        :class="{
          'c-card-expandable__content--opened': isOpened,
        }"
      >
        <slot />
      </div>
    </v-card>
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
.c-card-expandable {
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin-bottom: var(--margin);
}
.c-card-expandable__content {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s ease-out;
}
.c-card-expandable__content--opened {
  max-height: 1000px;
  transition: max-height 1s ease-out;
}
:deep(.v-card) {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  color: var(--primary);
  border: 2px solid var(--primary);
  background-color: var(--lts-primary);
  width: 100%;
}
</style>
