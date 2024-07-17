import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import FilterGlobalSearchInput from '../../components/modules/filter/atoms/FilterGlobalSearchInput.vue'

vi.mock('~/filters/commands/debounce', () => ({
  default: (fn: Function) => fn,
}))

describe('FilterGlobalSearchInput.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(FilterGlobalSearchInput, {
      props: {
        modelValue: '',
      },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('emits update:model-value on input', async () => {
    const wrapper = mount(FilterGlobalSearchInput, {
      props: {
        modelValue: '',
      },
    })
    const input = wrapper.find('input')
    await input.setValue('test')
    expect(wrapper.emitted()['update:model-value']).toBeTruthy()
    expect(wrapper.emitted()['update:model-value'][0]).toEqual(['test'])
  })
})
