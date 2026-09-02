<template>
  <nav class="sidebar">
    <div class="sidebar__brand">Vantage UI</div>

    <div v-for="section in sections" :key="section.heading" class="sidebar__section">
      <div class="sidebar__heading">{{ section.heading }}</div>
      <ul class="sidebar__list">
        <li v-for="link in section.links" :key="link.path">
          <RouterLink :to="link.path" class="sidebar__link" active-class="sidebar__link--active">
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>
    </div>

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
      sections: [
        {
          heading: 'Getting Started',
          links: [
            { path: '/', label: 'Introduction' },
            { path: '/colors', label: 'Colors' },
            { path: '/typography', label: 'Typography' },
            { path: '/grid', label: 'Grid' },
          ],
        },
        {
          heading: 'Components',
          links: [
            { path: '/buttons', label: 'Buttons' },
            { path: '/cards', label: 'Cards' },
            { path: '/forms', label: 'Forms & Inputs' },
            { path: '/select', label: 'Select' },
            { path: '/alerts', label: 'Alerts' },
            { path: '/badges', label: 'Badges' },
            { path: '/tooltips', label: 'Tooltips' },
            { path: '/switch', label: 'Switch' },
            { path: '/modal', label: 'Modal' },
            { path: '/tabs', label: 'Tabs' },
          ],
        },
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
  overflow-y: auto;
}

.sidebar__brand {
  font-weight: 700;
  font-size: var(--vt-text-lg);
  margin-bottom: var(--vt-space-6);
  padding: 0 var(--vt-space-2);
}

.sidebar__section {
  margin-bottom: var(--vt-space-4);
}

.sidebar__heading {
  font-size: var(--vt-text-xs);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--vt-color-text-muted);
  padding: 0 var(--vt-space-2);
  margin-bottom: var(--vt-space-1);
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
  margin-top: var(--vt-space-4);
  width: 100%;
}
</style>
