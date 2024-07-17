<template>
  <v-card class="c-sort">
    <v-select
      v-model="selectedField"
      :items="sortableFields"
      label="Sort by"
      color="primaryVariant"
      base-color="primaryVariant"
      class="c-sort__select"
      item-title="title"
      item-value="value"
    />
    <v-btn
      class="c-sort__btn"
      base-color="primaryVariant"
      @click="toggleSortOrder"
    >
      <v-icon>{{ isAscending ? 'mdi-arrow-up' : 'mdi-arrow-down' }}</v-icon>
    </v-btn>
  </v-card>
</template>

<script setup lang="ts">
import { ref, PropType, computed, watch } from 'vue'

const props = defineProps({
  fields: {
    type: Array as PropType<Array<{ title: string; value: string }>>,
    required: true,
  },
})

const emit = defineEmits(['update:sort'])

const selectedField = ref(props.fields[0]?.value ?? '')
const isAscending = ref(true)

const toggleSortOrder = () => {
  isAscending.value = !isAscending.value
  emit('update:sort', {
    field: selectedField.value,
    order: isAscending.value ? 'asc' : 'desc',
  })
}

watch(selectedField, () => {
  emit('update:sort', {
    field: selectedField.value,
    order: isAscending.value ? 'asc' : 'desc',
  })
})

const sortableFields = computed(() =>
  props.fields.map((field) => ({ title: field.title, value: field.value })),
)
</script>

<style scoped>
.c-sort {
  display: flex;
  align-items: flex-start;
  gap: var(--gap);
  color: var(--primary-variant);
  border: 2px solid var(--primary-variant);
  background-color: var(--lts-primary-variant);
  padding: var(--padding-xs);
  margin: 0 0 var(--margin-xxs) 0;
}
</style>
