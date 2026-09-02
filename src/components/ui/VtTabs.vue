<template>
  <div class="vt-tabs">

    <!-- Tab header bar: one button per registered tab -->
    <div class="vt-tabs__list" role="tablist">
      <button
        v-for="tab in tabs"
        :key="tab.name"
        class="vt-tabs__tab"
        :class="{ 'vt-tabs__tab--active': tab.name === activeTab }"
        role="tab"
        :aria-selected="tab.name === activeTab"
        @click="setActiveTab(tab.name)"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- Panel area: VtTab children render themselves here when active -->
    <div class="vt-tabs__panels">
      <slot />
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// A tab registration record — each VtTab child sends one of these up
// when it mounts, so VtTabs knows what tabs exist.
interface TabRecord {
  name: string
  label: string
}

export default defineComponent({
  name: 'VtTabs',

  props: {
    // The initially active tab. Matches the `name` prop on a VtTab child.
    defaultTab: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      activeTab: this.defaultTab,
      // tabs is built dynamically as VtTab children mount and register
      // themselves. This is the key to the provide/inject pattern: the
      // parent doesn't need to know about its children at authoring time.
      tabs: [] as TabRecord[],
    }
  },

  // provide() exposes values that any descendant can inject — regardless
  // of how deeply nested they are. It's the right tool when you have a
  // parent/child contract that would be painful to thread through props.
  provide() {
    return {
      // Descendants read activeTab to know if they should be visible.
      // NOTE: to make this reactive, we provide a getter function rather
      // than the raw value — if we provided `this.activeTab` directly,
      // Vue would snapshot the string at provide() time and it would
      // never update.
      getActiveTab: () => this.activeTab,

      // Descendants call this to switch the active tab.
      setActiveTab: this.setActiveTab,

      // Descendants call this on mount to register themselves.
      registerTab: this.registerTab,
    }
  },

  methods: {
    setActiveTab(name: string) {
      this.activeTab = name
    },
    registerTab(tab: TabRecord) {
      // Avoid duplicates if the component re-mounts
      if (!this.tabs.find((t) => t.name === tab.name)) {
        this.tabs.push(tab)
        // If no defaultTab was given, activate the first one that registers
        if (!this.activeTab) {
          this.activeTab = tab.name
        }
      }
    },
  },
})
</script>

<style scoped>
.vt-tabs {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.vt-tabs__list {
  display: flex;
  gap: var(--vt-space-1);
  border-bottom: 2px solid var(--vt-color-border);
  padding-bottom: 0;
}

.vt-tabs__tab {
  background: none;
  border: none;
  padding: var(--vt-space-2) var(--vt-space-4);
  font-family: inherit;
  font-size: var(--vt-text-sm);
  font-weight: 500;
  color: var(--vt-color-text-muted);
  cursor: pointer;
  border-bottom: 2px solid transparent;
  margin-bottom: -2px;
  border-radius: var(--vt-radius-sm) var(--vt-radius-sm) 0 0;
  transition: color 0.15s ease, border-color 0.15s ease;
}

.vt-tabs__tab:hover {
  color: var(--vt-color-text);
  background: var(--vt-color-bg-soft);
}

.vt-tabs__tab--active {
  color: var(--vt-color-primary);
  border-bottom-color: var(--vt-color-primary);
}

.vt-tabs__panels {
  padding-top: var(--vt-space-4);
}
</style>
