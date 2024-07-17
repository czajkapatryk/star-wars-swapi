<template>
  <div :class="itemClass">
    <span v-if="header">{{ header }}:</span>
    <span :class="valueClass">{{ value || 'Brak' }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  header: {
    type: String,
    default: '',
  },
  value: {
    type: [String, Number],
    default: undefined,
  },
  itemClass: {
    type: String,
    default: 'o-flex o-flex__gap--xxs',
  },
  valueClass: {
    type: String,
    default: '',
  },
})
</script>
