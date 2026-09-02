<template>
  <!-- Teleport moves the modal DOM to <body> so it's never clipped by a
       parent's overflow:hidden or z-index stacking context. The modal stays
       logically owned by this component even though it renders elsewhere. -->
  <Teleport to="body">
    <Transition name="vt-modal">
      <!-- v-if fully unmounts the modal when closed, cleaning up listeners
           and resetting any internal state inside the default slot. -->
      <div
        v-if="modelValue"
        class="vt-modal-backdrop"
        role="dialog"
        aria-modal="true"
        :aria-label="title"
        @click.self="handleBackdropClick"
      >
        <div class="vt-modal" :class="`vt-modal--${size}`">

          <!-- Header: always rendered so there's always a close button -->
          <div class="vt-modal__header">
            <span class="vt-modal__title">{{ title }}</span>
            <button class="vt-modal__close" aria-label="Close modal" @click="close">&#x2715;</button>
          </div>

          <!-- Body: the default slot lets the parent inject any content -->
          <div class="vt-modal__body">
            <slot />
          </div>

          <!-- Footer: only rendered when the parent provides footer content.
               $slots.footer is truthy when the parent passes a #footer template. -->
          <div v-if="$slots.footer" class="vt-modal__footer">
            <slot name="footer" />
          </div>

        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

type Size = 'sm' | 'md' | 'lg'

export default defineComponent({
  name: 'VtModal',

  props: {
    // v-model binding: parent passes :modelValue, we emit update:modelValue
    // to close. This is the standard Vue 3 v-model contract.
    modelValue: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      default: 'Modal',
    },
    size: {
      type: String as PropType<Size>,
      default: 'md',
    },
    // When true, clicking the dark backdrop dismisses the modal.
    closeOnBackdrop: {
      type: Boolean,
      default: true,
    },
  },

  emits: ['update:modelValue'],

  mounted() {
    // Listen for Escape key globally while the modal is open.
    // We attach to the document rather than the modal element itself
    // because the modal may not be focused when Escape is pressed.
    document.addEventListener('keydown', this.handleKeydown)
  },

  beforeUnmount() {
    // Always clean up event listeners when the component is destroyed
    // to prevent memory leaks and phantom handlers.
    document.removeEventListener('keydown', this.handleKeydown)
  },

  methods: {
    close() {
      // Tell the parent to set its boolean to false via v-model.
      this.$emit('update:modelValue', false)
    },
    handleBackdropClick() {
      if (this.closeOnBackdrop) this.close()
    },
    handleKeydown(event: KeyboardEvent) {
      if (event.key === 'Escape' && this.modelValue) this.close()
    },
  },
})
</script>

<style>
/* Unscoped: this element lives in <body> via Teleport, so scoped attribute
   selectors won't reach it — same pattern as VtTooltip. */

.vt-modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: var(--vt-space-4);
}

.vt-modal {
  background: var(--vt-color-bg, #fff);
  border-radius: var(--vt-radius-lg);
  box-shadow: var(--vt-shadow-md);
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  width: 100%;
}

/* Sizes */
.vt-modal--sm { max-width: 400px; }
.vt-modal--md { max-width: 560px; }
.vt-modal--lg { max-width: 800px; }

.vt-modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--vt-space-4) var(--vt-space-6);
  border-bottom: 1px solid var(--vt-color-border);
}

.vt-modal__title {
  font-weight: 600;
  font-size: var(--vt-text-lg);
  color: var(--vt-color-text);
}

.vt-modal__close {
  background: none;
  border: none;
  font-size: var(--vt-text-base);
  color: var(--vt-color-text-muted);
  cursor: pointer;
  padding: var(--vt-space-1);
  border-radius: var(--vt-radius-sm);
  line-height: 1;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.vt-modal__close:hover {
  background: var(--vt-color-bg-soft);
  color: var(--vt-color-text);
}

.vt-modal__body {
  padding: var(--vt-space-6);
  overflow-y: auto;
  color: var(--vt-color-text);
}

.vt-modal__footer {
  display: flex;
  justify-content: flex-end;
  gap: var(--vt-space-3);
  padding: var(--vt-space-4) var(--vt-space-6);
  border-top: 1px solid var(--vt-color-border);
}

/* Transition: fade + slight scale-up on enter, reverse on leave */
.vt-modal-enter-active,
.vt-modal-leave-active {
  transition: opacity 0.2s ease;
}
.vt-modal-enter-active .vt-modal,
.vt-modal-leave-active .vt-modal {
  transition: transform 0.2s ease;
}

.vt-modal-enter-from,
.vt-modal-leave-to {
  opacity: 0;
}
.vt-modal-enter-from .vt-modal {
  transform: scale(0.95);
}
.vt-modal-leave-to .vt-modal {
  transform: scale(0.95);
}
</style>
