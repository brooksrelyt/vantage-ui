<template>
  <div class="vt-col" :style="colStyle">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VtCol',

  props: {
    cols: { type: Number, default: 12 },
    sm: { type: Number, default: null },
    md: { type: Number, default: null },
    lg: { type: Number, default: null },
    xl: { type: Number, default: null },
  },

  computed: {
    // This is the "mobile-first cascade": each breakpoint falls back to
    // the previous one if not explicitly set, so you only specify what
    // actually CHANGES at each breakpoint — same UX as Bootstrap's
    // col-12 col-md-6 col-lg-4 class-stacking, just resolved in JS
    // instead of relying on CSS class specificity.
    colStyle(): Record<string, string> {
      const sm = this.sm ?? this.cols
      const md = this.md ?? sm
      const lg = this.lg ?? md
      const xl = this.xl ?? lg

      return {
        '--vt-col-xs': String(this.cols),
        '--vt-col-sm': String(sm),
        '--vt-col-md': String(md),
        '--vt-col-lg': String(lg),
        '--vt-col-xl': String(xl),
      }
    },
  },
})
</script>

<style scoped>
.vt-col {
  grid-column: span var(--vt-col-xs);
  min-width: 0; /* prevents content like long text/images from overflowing the column */
}

@media (min-width: 576px) {
  .vt-col {
    grid-column: span var(--vt-col-sm);
  }
}
@media (min-width: 768px) {
  .vt-col {
    grid-column: span var(--vt-col-md);
  }
}
@media (min-width: 992px) {
  .vt-col {
    grid-column: span var(--vt-col-lg);
  }
}
@media (min-width: 1200px) {
  .vt-col {
    grid-column: span var(--vt-col-xl);
  }
}
</style>
