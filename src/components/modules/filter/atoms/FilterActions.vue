<template>
  <div class="c-filter-actions">
    <v-btn
      title="Reset"
      :loading="loading"
      color="primaryVariant"
      @click="emitReset"
    >
      <v-icon left>mdi-filter-remove</v-icon>
      Reset
    </v-btn>
    <v-btn
      type="submit"
      title="Filter"
      color="primary"
      :disabled="filterDisabled"
      :loading="loading"
    >
      <v-icon left>mdi-filter</v-icon>
      Filter
    </v-btn>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  filterDisabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['reset', 'filter'])

const emitReset = () => {
  emit('reset')
}
</script>

<style scoped>
.c-filter-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}
</style>
