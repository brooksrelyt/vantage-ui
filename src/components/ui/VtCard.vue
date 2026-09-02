<template>
  <div class="vt-card">
    <!-- A NAMED slot: the parent targets it with <template #header> -->
    <header v-if="$slots.header" class="vt-card__header">
      <slot name="header" />
    </header>

    <!-- The unnamed slot is the "default" -->
    <div class="vt-card__body">
      <slot />
    </div>

    <footer v-if="$slots.footer" class="vt-card__footer">
      <slot name="footer" />
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VtCard',
})
</script>

<style scoped>
.vt-card {
  border: 1px solid var(--vt-color-border);
  border-radius: var(--vt-radius-lg);
  background: var(--vt-color-bg);
  box-shadow: var(--vt-shadow-sm);
  overflow: hidden;
}

.vt-card__header {
  padding: var(--vt-space-4) var(--vt-space-6);
  border-bottom: 1px solid var(--vt-color-border);
  font-weight: 600;
}

.vt-card__body {
  padding: var(--vt-space-6);
}

.vt-card__footer {
  padding: var(--vt-space-4) var(--vt-space-6);
  border-top: 1px solid var(--vt-color-border);
  background: var(--vt-color-bg-soft);
}
</style>
