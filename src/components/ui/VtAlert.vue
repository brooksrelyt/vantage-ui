<template>
  <div class="vt-alert" :class="`vt-alert--${type}`" role="alert">
    <span class="vt-alert__icon">{{ icon }}</span>
    <div class="vt-alert__content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

type AlertType = 'info' | 'success' | 'warning' | 'danger'

export default defineComponent({
  name: 'VtAlert',

  props: {
    type: {
      type: String as PropType<AlertType>,
      default: 'info',
    },
  },

  computed: {
    // A computed property DERIVES a value from reactive state (here, a prop).
    // It automatically recalculates and re-renders whenever `type` changes,
    // and it's cached between re-renders unless a dependency changes —
    // unlike a method, which reruns on every render regardless.
    icon(): string {
      const icons: Record<AlertType, string> = {
        info: 'ℹ',
        success: '✓',
        warning: '⚠',
        danger: '✕',
      }
      return icons[this.type]
    },
  },
})
</script>

<style scoped>
.vt-alert {
  display: flex;
  gap: var(--vt-space-3);
  padding: var(--vt-space-4);
  border-radius: var(--vt-radius-md);
  border: 1px solid transparent;
  font-size: var(--vt-text-sm);
}

.vt-alert__icon {
  font-weight: 700;
  flex-shrink: 0;
}

.vt-alert--info {
  background: var(--vt-color-primary-soft);
  color: var(--vt-color-primary-hover);
  border-color: var(--vt-color-primary);
}
.vt-alert--success {
  background: var(--vt-color-success-soft);
  color: var(--vt-color-success);
  border-color: var(--vt-color-success);
}
.vt-alert--warning {
  background: var(--vt-color-warning-soft);
  color: var(--vt-color-warning);
  border-color: var(--vt-color-warning);
}
.vt-alert--danger {
  background: var(--vt-color-danger-soft);
  color: var(--vt-color-danger);
  border-color: var(--vt-color-danger);
}
</style>
