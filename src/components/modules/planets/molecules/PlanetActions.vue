<template>
  <v-btn
    :icon="true"
    color="primary"
    density="compact"
    @click="$emit('planetPreview', row.url)"
  >
    <v-icon>mdi-eye-outline</v-icon>
    <v-tooltip>Planet preview</v-tooltip>
  </v-btn>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import PlanetInterface from '@/features/planet/interfaces/PlanetInterface'

defineProps({
  row: {
    type: Object as PropType<PlanetInterface>,
    required: true,
  },
})

defineEmits(['planetPreview'])
</script>
