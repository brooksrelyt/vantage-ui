<template>
  <div class="app-shell" :data-theme="isDark ? 'dark' : 'light'">
    <TheSidebar />
    <main class="app-content">
      <!-- RouterView is where the currently matched view gets rendered.
           It's a "portal" — its content changes as the URL changes,
           but everything outside it (the sidebar) stays put. -->
      <RouterView />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { themeKey, toggleThemeKey } from '@/injectionKeys'
import TheSidebar from '@/components/layout/TheSidebar.vue'

export default defineComponent({
  name: 'App',
  components: { TheSidebar },
  data() {
    return { isDark: false }
  },

  provide() {
    return {
      [themeKey]: computed(() => this.isDark),
      [toggleThemeKey]: this.toggleTheme,
    }
  },
  methods: {
    toggleTheme() {
      console.log('toggleTheme called, isDark was:', this.isDark)
      this.isDark = !this.isDark
    },
  },
})
</script>

<style scoped>
.app-shell {
  display: flex;
  min-height: 100vh;
  background: var(--vt-color-bg);
  color: var(--vt-color-text);
}

.app-content {
  flex: 1;
  padding: var(--vt-space-8) var(--vt-space-12);
  max-width: 900px;
}
</style>
