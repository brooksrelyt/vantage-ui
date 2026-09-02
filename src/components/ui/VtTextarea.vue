<template>
  <label class="vt-textarea">
    <span v-if="label" class="vt-textarea__label">{{ label }}</span>
    <textarea
      class="vt-textarea__field"
      :placeholder="placeholder"
      :rows="rows"
      :value="modelValue"
      @input="onInput"
    ></textarea>
    <span v-if="error" class="vt-textarea__error">{{ error }}</span>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VtTextarea',

  props: {
    modelValue: {
      type: String,
      default: '',
    },
    label: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    error: { type: String, default: '' },
    rows: {
      type: Number,
      default: 4,
    },
  },

  emits: ['update:modelValue'],

  methods: {
    onInput(event: Event) {
      const target = event.target as HTMLTextAreaElement
      this.$emit('update:modelValue', target.value)
    },
  },
})
</script>

<style scoped>
.vt-textarea {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--vt-space-1);
  font-size: var(--vt-text-sm);
}

.vt-textarea__label {
  font-weight: 600;
  color: var(--vt-color-text);
}

.vt-textarea__field {
  font-family: inherit;
  font-size: var(--vt-text-base);
  padding: var(--vt-space-2) var(--vt-space-3);
  border: 1px solid var(--vt-color-border);
  border-radius: var(--vt-radius-sm);
  outline: none;
  resize: vertical;
  transition: border-color 0.15s ease;
}

.vt-textarea__field:focus {
  border-color: var(--vt-color-primary);
}

.vt-textarea__error {
  color: var(--vt-color-danger);
  font-size: var(--vt-text-xs);
}
</style>
