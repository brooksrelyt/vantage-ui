<template>
  <span class="vt-badge" :class="[`vt-badge--${variant}`, { 'vt-badge--dot': dot }]">
    <span v-if="dot" class="vt-badge__dot"></span>
    <slot />
  </span>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

type Variant = 'neutral' | 'primary' | 'success' | 'warning' | 'danger'

export default defineComponent({
  name: 'VtBadge',

  props: {
    variant: {
      type: String as PropType<Variant>,
      default: 'neutral',
    },
    // `dot` renders a small status dot instead of relying on color alone —
    // useful for accessibility, since color shouldn't be the only signal.
    dot: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style scoped>
.vt-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--vt-space-1);
  padding: 2px var(--vt-space-2);
  border-radius: 999px;
  font-size: var(--vt-text-xs);
  font-weight: 600;
  line-height: 1.4;
}

.vt-badge__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
}

.vt-badge--neutral {
  background: var(--vt-color-bg-soft);
  color: var(--vt-color-text-muted);
  border: 1px solid var(--vt-color-border);
}
.vt-badge--primary {
  background: var(--vt-color-primary-soft);
  color: var(--vt-color-primary-hover);
}
.vt-badge--success {
  background: var(--vt-color-success-soft);
  color: var(--vt-color-success);
}
.vt-badge--warning {
  background: var(--vt-color-warning-soft);
  color: var(--vt-color-warning);
}
.vt-badge--danger {
  background: var(--vt-color-danger-soft);
  color: var(--vt-color-danger);
}
</style>
