<template>
  <nav class="sidebar">
    <div class="sidebar__brand">Vantage UI</div>
    <ul class="sidebar__list">
      <!-- v-for renders a list item for each entry in `links`.
           :key gives Vue a stable identity per item so it can efficiently
           patch the DOM instead of re-rendering the whole list. -->
      <li v-for="link in links" :key="link.path">
        <!-- RouterLink swaps the view WITHOUT a full page reload, and
             automatically gets an "active" class when it matches the URL. -->
        <RouterLink :to="link.path" class="sidebar__link" active-class="sidebar__link--active">
          {{ link.label }}
        </RouterLink>
      </li>
    </ul>
    <VtButton variant="secondary" class="sidebar__theme-toggle" @click="toggleTheme">
      {{ theme.value ? '☀ Light mode' : '🌙 Dark mode' }}
    </VtButton>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { themeKey, toggleThemeKey } from '@/injectionKeys'
import VtButton from '@/components/ui/VtButton.vue'

export default defineComponent({
  name: 'TheSidebar',
  components: { VtButton },
  inject: {
    theme: { from: themeKey },
    toggleTheme: { from: toggleThemeKey },
  },
  data() {
    return {
      links: [
        { path: '/', label: 'Introduction' },
        { path: '/grid', label: 'Grid' },
        { path: '/colors', label: 'Colors' },
        { path: '/typography', label: 'Typography' },
        { path: '/buttons', label: 'Buttons' },
        { path: '/cards', label: 'Cards' },
        { path: '/forms', label: 'Forms & Inputs' },
        { path: '/alerts', label: 'Alerts' },
        { path: '/badges', label: 'Badges' },
        { path: '/tooltips', label: 'Tooltips' },
        { path: '/switch', label: 'Switch' },
        { path: '/modal', label: 'Modal' },
        { path: '/tabs', label: 'Tabs' },
      ],
    }
  },
  mounted() {
    console.log('sidebar theme on mount:', this.theme)
  },
})
</script>

<style scoped>
.sidebar {
  width: 220px;
  flex-shrink: 0;
  padding: var(--vt-space-6) var(--vt-space-4);
  border-right: 1px solid var(--vt-color-border);
  height: 100vh;
  position: sticky;
  top: 0;
}

.sidebar__brand {
  font-weight: 700;
  font-size: var(--vt-text-lg);
  margin-bottom: var(--vt-space-6);
  padding: 0 var(--vt-space-2);
}

.sidebar__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--vt-space-1);
}

.sidebar__link {
  display: block;
  padding: var(--vt-space-2);
  border-radius: var(--vt-radius-sm);
  color: var(--vt-color-text-muted);
  font-size: var(--vt-text-sm);
  font-weight: 500;
}
.sidebar__link:hover {
  background: var(--vt-color-bg-soft);
  text-decoration: none;
}

.sidebar__link--active {
  background: var(--vt-color-primary-soft);
  color: var(--vt-color-primary);
}
.sidebar > button {
  margin-top: 16px;
  width: 100%;
}
</style>
