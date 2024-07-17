<template>
  <v-list
    nav
    base-color="tertiary"
    active-class="c-list--active"
    open-strategy="single"
    color="primary"
  >
    <div
      v-for="(item, i) in items"
      :key="`list-${i}`"
      class="c-list--items"
    >
      <v-list-item
        v-if="!item.items"
        exact
        :to="item.to"
        :class="{ 'v-list-group-mini': miniVariant }"
        :prepend-icon="item.icon"
        :title="item.title"
        color="primary"
      />
    </div>
  </v-list>
</template>

<script setup lang="ts">
import type { NavItemsType } from '@/features/nav/types/NavItemsType'

defineProps<{
  items: NavItemsType
  miniVariant: boolean
}>()
</script>

<style lang="css" scoped>
.c-list--items {
  margin-bottom: 1rem;
}

:deep(.v-list-item--nav) {
  padding: 1.2rem;
}

:deep(.v-list .v-list-item--nav:not(:only-child)) {
  margin-left: unset;
  padding: 0.8rem;
}

:deep(.v-list-item-title) {
  line-height: unset !important;
  font-size: 1rem !important;
}

:deep(.v-list-item__prepend) {
  width: 36px;
}

:deep(.v-list-item--active) {
  border-radius: 4px;
}

:deep(.v-list-item--active:hover) {
  border-radius: 4px;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}

:deep(.v-list-item:hover) {
  border-radius: 4px;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}

:deep(.v-list-item__icon:first-child) {
  margin-right: 0 !important;
}
</style>
