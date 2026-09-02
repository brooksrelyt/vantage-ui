<template>
  <label class="vt-switch" :class="{ 'vt-switch--disabled': disabled }">
    <button
      type="button"
      role="switch"
      :aria-checked="modelValue"
      class="vt-switch__track"
      :class="[`vt-switch__track--${size}`, { 'vt-switch__track--on': modelValue }]"
      :disabled="disabled"
      @click="toggle"
    >
      <span class="vt-switch__thumb"></span>
    </button>
    <span v-if="label" class="vt-switch__label">{{ label }}</span>
  </label>
</template>
<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  props: {
    modelValue: { type: Boolean, defualt: false },
    label: { type: String, default: '' },
    size: { type: String as PropType<'sm' | 'md'>, default: 'md' },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],

  methods: {
    toggle() {
      if (this.disabled) return
      this.$emit('update:modelValue', !this.modelValue)
    },
  },
})
</script>

<style scoped>
.vt-switch__track {
  width: 40px;
  height: 22px;
  border-radius: 999px;
  background: var(--vt-color-border);
  border: none;
  position: relative;
  cursor: pointer;
  transition: background-color 0.15s ease;
}

.vt-switch__track--on {
  background: var(--vt-color-primary);
}

.vt-switch__thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: white;
  transition: transform 0.15s ease;
}

.vt-switch__track--on .vt-switch__thumb {
  transform: translateX(18px);
}

.vt-switch__track--sm {
  width: 32px;
  height: 18px;
}

.vt-switch--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
