<template>
  <!-- This wrapper is "inline-block" so it hugs whatever's inside it (the
       trigger element passed via the default slot), and it's the element
       we attach the hover listeners to. -->
  <span
    ref="triggerEl"
    class="vt-tooltip-wrapper"
    @mouseenter="show"
    @mouseleave="hide"
    @focusin="show"
    @focusout="hide"
  >
    <slot />

    <!-- Teleport moves this element's rendered DOM elsewhere in the page
         (here, straight to <body>) while keeping it logically part of
         THIS component. That matters for tooltips/modals/dropdowns:
         without it, a parent with `overflow: hidden` or a low z-index
         stacking context could clip or bury the tooltip. -->
    <Teleport to="body">
      <div
        v-if="visible"
        class="vt-tooltip"
        :class="`vt-tooltip--${position}`"
        :style="tooltipStyle"
        role="tooltip"
      >
        {{ text }}
      </div>
    </Teleport>
  </span>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

type Position = 'top' | 'bottom' | 'left' | 'right'

export default defineComponent({
  name: 'VtTooltip',

  props: {
    text: { type: String, required: true },
    position: {
      type: String as PropType<Position>,
      default: 'top',
    },
  },

  data() {
    return {
      visible: false,
      // Coordinates for the teleported tooltip, computed from the
      // trigger element's actual position on screen.
      coords: { top: 0, left: 0 },
    }
  },

  computed: {
    tooltipStyle(): Record<string, string> {
      return {
        top: `${this.coords.top}px`,
        left: `${this.coords.left}px`,
      }
    },
  },

  methods: {
    show() {
      // `this.$refs.triggerEl` is a TEMPLATE REF: a direct handle to the
      // actual DOM element the `ref="triggerEl"` attribute is on. Vue
      // gives you this escape hatch for the rare cases you need real DOM
      // measurements (positioning, focus management, canvas, etc.) that
      // reactive state alone can't express.
      const el = this.$refs.triggerEl as HTMLElement
      if (!el) return

      const rect = el.getBoundingClientRect()
      const gap = 8

      const positions: Record<Position, { top: number; left: number }> = {
        top: { top: rect.top - gap, left: rect.left + rect.width / 2 },
        bottom: { top: rect.bottom + gap, left: rect.left + rect.width / 2 },
        left: { top: rect.top + rect.height / 2, left: rect.left - gap },
        right: { top: rect.top + rect.height / 2, left: rect.right + gap },
      }

      this.coords = positions[this.position]
      this.visible = true
    },
    hide() {
      this.visible = false
    },
  },
})
</script>

<style scoped>
.vt-tooltip-wrapper {
  display: inline-block;
}
</style>

<style>
/* Unscoped: this element lives in <body> via Teleport, outside this
   component's normal DOM tree, so `scoped` attribute selectors wouldn't
   reach it. */
.vt-tooltip {
  position: fixed;
  z-index: 1000;
  background: #111827;
  color: white;
  padding: var(--vt-space-1) var(--vt-space-3);
  border-radius: var(--vt-radius-sm);
  font-size: var(--vt-text-xs);
  white-space: nowrap;
  pointer-events: none;
  transform: translate(-50%, -100%);
}

.vt-tooltip--bottom {
  transform: translate(-50%, 0%);
}
.vt-tooltip--left {
  transform: translate(-100%, -50%);
}
.vt-tooltip--right {
  transform: translate(0%, -50%);
}
</style>
