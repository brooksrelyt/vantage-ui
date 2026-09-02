<template>
  <button
    class="vt-button"
    :class="[`vt-button--${variant}`, `vt-button--${size}`, { 'vt-button--full': fullWidth }]"
    :disabled="disabled"
    @click="handleClick"
  >
    <!-- The default slot lets the PARENT decide what text/icons go inside -->
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

type Variant = 'primary' | 'secondary' | 'danger' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

export default defineComponent({
  name: 'VtButton',

  // Props are how a PARENT passes data DOWN into this component.
  // Each prop is typed and can have a default and validation.
  props: {
    variant: {
      type: String as PropType<Variant>,
      default: 'primary',
    },
    size: {
      type: String as PropType<Size>,
      default: 'md',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
  },

  // Emits declares the custom events this component can send UP to its parent.
  // Declaring them (rather than just calling $emit) documents the component's
  // public API and lets TypeScript check listeners.
  emits: ['click'],

  methods: {
    handleClick(event: MouseEvent) {
      if (this.disabled) return
      this.$emit('click', event)
    },
  },
})
</script>

<style scoped>
.vt-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--vt-space-2);
  font-family: inherit;
  font-weight: 600;
  border-radius: var(--vt-radius-md);
  border: 1px solid transparent;
  cursor: pointer;
  transition:
    background-color 0.15s ease,
    border-color 0.15s ease,
    opacity 0.15s ease;
}

.vt-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Sizes */
.vt-button--sm {
  padding: var(--vt-space-1) var(--vt-space-3);
  font-size: var(--vt-text-sm);
}
.vt-button--md {
  padding: var(--vt-space-2) var(--vt-space-4);
  font-size: var(--vt-text-base);
}
.vt-button--lg {
  padding: var(--vt-space-3) var(--vt-space-6);
  font-size: var(--vt-text-lg);
}

.vt-button--full {
  width: 100%;
}

/* Variants */
.vt-button--primary {
  background: var(--vt-color-primary);
  color: white;
}
.vt-button--primary:not(:disabled):hover {
  background: var(--vt-color-primary-hover);
}

.vt-button--secondary {
  background: var(--vt-color-bg-soft);
  color: var(--vt-color-text);
  border-color: var(--vt-color-border);
}
.vt-button--secondary:not(:disabled):hover {
  background: var(--vt-color-border);
}

.vt-button--danger {
  background: var(--vt-color-danger);
  color: white;
}
.vt-button--danger:not(:disabled):hover {
  opacity: 0.9;
}

.vt-button--ghost {
  background: transparent;
  color: var(--vt-color-primary);
}
.vt-button--ghost:not(:disabled):hover {
  background: var(--vt-color-primary-soft);
}
</style>
