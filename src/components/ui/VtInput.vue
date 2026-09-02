<template>
  <label class="vt-input">
    <span v-if="label" class="vt-input__label">{{ label }}</span>
    <input
      class="vt-input__field"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="onInput"
    />
    <span v-if="error" class="vt-input__error">{{ error }}</span>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VtInput',

  props: {
    // `modelValue` + emitting `update:modelValue` is the exact contract
    // Vue looks for. It's what lets a PARENT write:
    //   <VtInput v-model="name" />
    // ...which is really just shorthand for:
    //   <VtInput :model-value="name" @update:model-value="name = $event" />
    modelValue: {
      type: String,
      default: '',
    },
    label: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    type: { type: String, default: 'text' },
    error: { type: String, default: '' },
  },

  emits: ['update:modelValue'],

  methods: {
    onInput(event: Event) {
      const target = event.target as HTMLInputElement
      this.$emit('update:modelValue', target.value)
    },
  },
})
</script>

<style scoped>
.vt-input {
  display: flex;
  flex-direction: column;
  gap: var(--vt-space-1);
  font-size: var(--vt-text-sm);
}

.vt-input__label {
  font-weight: 600;
  color: var(--vt-color-text);
}

.vt-input__field {
  font-family: inherit;
  font-size: var(--vt-text-base);
  padding: var(--vt-space-2) var(--vt-space-3);
  border: 1px solid var(--vt-color-border);
  border-radius: var(--vt-radius-sm);
  outline: none;
  transition: border-color 0.15s ease;
}

.vt-input__field:focus {
  border-color: var(--vt-color-primary);
}

.vt-input__error {
  color: var(--vt-color-danger);
  font-size: var(--vt-text-xs);
}
</style>
