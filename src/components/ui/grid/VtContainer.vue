<template>
  <div class="vt-container" :class="{ 'vt-container--fluid': fluid }">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VtContainer',
  props: {
    fluid: { type: Boolean, default: false }, // true = always 100% width
  },
})
</script>

<style scoped>
.vt-container {
  width: 100%;
  margin-inline: auto;
  padding-inline: var(--vt-space-4);
}

/* Each breakpoint caps max-width, same values Bootstrap uses */
@media (min-width: 576px) {
  .vt-container:not(.vt-container--fluid) {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .vt-container:not(.vt-container--fluid) {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .vt-container:not(.vt-container--fluid) {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .vt-container:not(.vt-container--fluid) {
    max-width: 1140px;
  }
}
</style>
