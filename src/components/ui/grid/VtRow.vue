<template>
  <div class="vt-row" :style="{ '--vt-gutter': `${gutter}px` }">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VtRow',
  props: {
    gutter: { type: Number, default: 24 },
  },
})
</script>

<style scoped>
.vt-row {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--vt-gutter);
}
</style>
