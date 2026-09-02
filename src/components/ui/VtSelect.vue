<template>
  <label class="vt-select" :class="{ 'vt-select--disabled': disabled }">
    <span v-if="label" class="vt-select__label">{{ label }}</span>
    <div class="vt-select__control">
      <select
        class="vt-select__field"
        :value="modelValue"
        :disabled="disabled"
        @change="onChange"
      >
        <option v-if="placeholder" value="" disabled>{{ placeholder }}</option>
        <option v-for="option in options" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
      <span class="vt-select__chevron" aria-hidden="true">▾</span>
    </div>
    <span v-if="error" class="vt-select__error">{{ error }}</span>
  </label>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export interface VtSelectOption {
  label: string
  value: string
}

export default defineComponent({
  name: 'VtSelect',

  props: {
    // `modelValue` + emitting `update:modelValue` is the exact contract
    // Vue looks for, enabling `<VtSelect v-model="value" />` on the parent.
    modelValue: {
      type: String,
      default: '',
    },
    options: {
      type: Array as PropType<VtSelectOption[]>,
      required: true,
    },
    label: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    error: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
  },

  emits: ['update:modelValue'],

  methods: {
    onChange(event: Event) {
      const target = event.target as HTMLSelectElement
      this.$emit('update:modelValue', target.value)
    },
  },
})
</script>

<style scoped>
.vt-select {
  display: flex;
  flex-direction: column;
  gap: var(--vt-space-1);
  font-size: var(--vt-text-sm);
}

.vt-select__label {
  font-weight: 600;
  color: var(--vt-color-text);
}

.vt-select__control {
  position: relative;
  display: flex;
}

.vt-select__field {
  width: 100%;
  font-family: inherit;
  font-size: var(--vt-text-base);
  color: var(--vt-color-text);
  background: var(--vt-color-bg);
  padding: var(--vt-space-2) var(--vt-space-8) var(--vt-space-2) var(--vt-space-3);
  border: 1px solid var(--vt-color-border);
  border-radius: var(--vt-radius-sm);
  outline: none;
  appearance: none;
  transition: border-color 0.15s ease;
}

.vt-select__field:focus {
  border-color: var(--vt-color-primary);
}

.vt-select--disabled .vt-select__field {
  background: var(--vt-color-bg-soft);
  color: var(--vt-color-text-muted);
  cursor: not-allowed;
}

.vt-select__chevron {
  position: absolute;
  right: var(--vt-space-3);
  top: 50%;
  transform: translateY(-50%);
  color: var(--vt-color-text-muted);
  pointer-events: none;
  font-size: var(--vt-text-xs);
}

.vt-select__error {
  color: var(--vt-color-danger);
  font-size: var(--vt-text-xs);
}
</style>
