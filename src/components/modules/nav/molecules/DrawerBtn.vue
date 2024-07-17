<template>
  <div class="c-toggle__drawer-btn">
    <v-btn
      :icon="true"
      right
      density="compact"
      v-bind="$attrs"
      color="primary"
      @click.stop="$emit('toggleVariant')"
    >
      <v-icon>{{
        miniVariant ? 'mdi-chevron-right' : 'mdi-chevron-left'
      }}</v-icon>
    </v-btn>
  </div>
</template>

<script setup lang="ts">
defineProps({
  miniVariant: {
    type: Boolean,
    required: true,
  },
})

defineEmits(['toggleVariant'])
</script>

<style lang="css" scoped>
.c-toggle__drawer-btn {
  right: -1.3rem !important;
  padding: 6px;
  background: black;
  border-radius: 100%;
  border: 2px solid var(--primary);
  top: 80px !important;
  z-index: 10;
  position: absolute;
}
</style>
