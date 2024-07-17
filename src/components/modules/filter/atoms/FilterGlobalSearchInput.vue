<template>
  <v-text-field
    ref="input"
    v-model="query"
    :clearable="true"
    base-color="primary"
    color="primary"
    label="Search"
    @keydown.enter.prevent="onEnter"
  />
</template>

<script lang="ts" setup>
import { computed, PropType, ref, watch } from 'vue'
import debounce from '~/filters/commands/debounce'

const props = defineProps({
  modelValue: {
    type: [String, null] as PropType<string | null>,
    required: true,
  },
})

const emit = defineEmits(['update:model-value'])

const query = ref<string | null>(props.modelValue)
const input = ref()

const debouncedEmit = debounce((value: string | null) => {
  emit('update:model-value', value)
}, 400)

watch(query, (newValue) => {
  debouncedEmit(newValue)
})

const onEnter = () => {
  input.value?.focus()
}

computed({
  get() {
    return query.value
  },
  set(value: string | null) {
    query.value = value
  },
})
</script>
