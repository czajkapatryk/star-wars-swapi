<template>
  <div>
    <div class="c-no-data">
      <v-icon
        color="primary"
        class="c-no-data__icon"
      >
        mdi-{{ icon }}
      </v-icon>
      <v-card-text class="c-no-data__text">
        {{ title }}
      </v-card-text>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'No data',
  },
  icon: {
    type: String,
    default: 'database-eye-off-outline',
  },
})
</script>
<style lang="css" scoped>
.c-no-data {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 var(--margin);
  padding: var(--padding) 0;
}

.c-no-data__icon {
  font-size: var(--font_size--xxxl);
}

.c-no-data__text {
  color: var(--primary);
  font-weight: bold;
  padding: unset;
}
</style>
