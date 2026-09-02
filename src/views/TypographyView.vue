<template>
  <div>
    <h1>Typography</h1>
    <p>The type scale runs from <code>--vt-text-xs</code> to <code>--vt-text-3xl</code>.</p>

    <div v-for="size in sizes" :key="size.varName" class="type-row">
      <span class="type-row__label">{{ size.varName }}</span>
      <span class="type-row__sample" :style="{ fontSize: `var(${size.varName})` }">
        The quick brown fox
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TypographyView',
  data() {
    return {
      sizes: [
        { varName: '--vt-text-xs' },
        { varName: '--vt-text-sm' },
        { varName: '--vt-text-base' },
        { varName: '--vt-text-lg' },
        { varName: '--vt-text-xl' },
        { varName: '--vt-text-2xl' },
        { varName: '--vt-text-3xl' },
      ],
    }
  },
})
</script>

<style scoped>
.type-row {
  display: flex;
  align-items: baseline;
  gap: var(--vt-space-6);
  padding: var(--vt-space-3) 0;
  border-bottom: 1px solid var(--vt-color-border);
}

.type-row__label {
  width: 140px;
  flex-shrink: 0;
  font-family: var(--vt-font-mono);
  font-size: var(--vt-text-xs);
  color: var(--vt-color-text-muted);
}
</style>
