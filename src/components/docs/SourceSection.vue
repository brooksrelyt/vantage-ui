<template>
  <section class="source-section">
    <div class="source-section__header">
      <div>
        <h3 class="source-section__title">Component source</h3>
        <p class="source-section__description">Full <code>{{ filename }}</code> file — copy and drop into your project.</p>
      </div>
      <button class="source-section__toggle" @click="showSource = !showSource">
        {{ showSource ? 'Hide source' : 'View source' }}
      </button>
    </div>

    <CodeBlock v-if="showSource" :code="source" language="vue" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CodeBlock from './CodeBlock.vue'

export default defineComponent({
  name: 'SourceSection',
  components: { CodeBlock },
  props: {
    // Full .vue file contents via Vite ?raw import
    source: { type: String, required: true },
    // The filename shown in the description (e.g. 'VtButton.vue')
    filename: { type: String, required: true },
  },
  data() {
    return {
      showSource: false,
    }
  },
})
</script>

<style scoped>
.source-section {
  margin-bottom: var(--vt-space-12);
  border-top: 1px solid var(--vt-color-border);
  padding-top: var(--vt-space-6);
}

.source-section__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--vt-space-4);
  margin-bottom: var(--vt-space-4);
}

.source-section__title {
  font-size: var(--vt-text-xl);
  margin-bottom: var(--vt-space-1);
}

.source-section__description {
  color: var(--vt-color-text-muted);
  font-size: var(--vt-text-sm);
  margin: 0;
}

.source-section__toggle {
  background: none;
  border: 1px solid var(--vt-color-border);
  border-radius: var(--vt-radius-sm);
  color: var(--vt-color-text-muted);
  font-size: var(--vt-text-xs);
  padding: var(--vt-space-1) var(--vt-space-3);
  cursor: pointer;
  white-space: nowrap;
  transition: color 0.15s ease, border-color 0.15s ease;
}
.source-section__toggle:hover {
  color: var(--vt-color-text);
  border-color: var(--vt-color-text-muted);
}
</style>
