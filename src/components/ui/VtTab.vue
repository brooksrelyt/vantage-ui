<template>
  <!-- Only render content when this tab is the active one.
       v-show keeps the DOM mounted (unlike v-if) so content like forms
       don't lose their state when you switch tabs. -->
  <div
    v-show="isActive"
    class="vt-tab"
    role="tabpanel"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VtTab',

  props: {
    // A unique identifier for this tab — matched against VtTabs' activeTab
    name: {
      type: String,
      required: true,
    },
    // The human-readable label shown in the tab button
    label: {
      type: String,
      required: true,
    },
  },

  // inject pulls values that a VtTabs ancestor provided.
  // This is what makes VtTab work without receiving any props from VtTabs:
  // the communication channel is vertical through the component tree,
  // not horizontal through template attributes.
  inject: ['getActiveTab', 'setActiveTab', 'registerTab'],

  computed: {
    isActive(): boolean {
      // Call the getter function provided by VtTabs to get the current value.
      // Because it's a function call, Vue's reactivity tracks it correctly
      // and re-evaluates whenever activeTab changes in the parent.
      return (this.getActiveTab as () => string)() === this.name
    },
  },

  mounted() {
    // Tell the parent we exist so it can render our tab button.
    // This happens at mount time so VtTabs doesn't need to know about
    // its children at authoring time — the relationship is established
    // at runtime, not compile time.
    ;(this.registerTab as (tab: { name: string; label: string }) => void)({
      name: this.name,
      label: this.label,
    })
  },
})
</script>

<style scoped>
.vt-tab {
  color: var(--vt-color-text);
}
</style>
