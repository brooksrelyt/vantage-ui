<template>
  <section class="doc-section">
    <h3 class="doc-section__title">{{ title }}</h3>
    <p v-if="description" class="doc-section__description">{{ description }}</p>

    <!-- "Live" demo area: renders the actual component -->
    <div class="doc-section__demo">
      <slot />
    </div>

    <!-- Usage snippet -->
    <CodeBlock v-if="code" :code="code" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CodeBlock from './CodeBlock.vue'

export default defineComponent({
  name: 'DocSection',
  components: { CodeBlock },
  props: {
    title: { type: String, required: true },
    description: { type: String, default: '' },
    code: { type: String, default: '' },
  },
})
</script>

<style scoped>
.doc-section {
  margin-bottom: var(--vt-space-12);
}

.doc-section__title {
  font-size: var(--vt-text-xl);
  margin-bottom: var(--vt-space-2);
}

.doc-section__description {
  color: var(--vt-color-text-muted);
  margin-bottom: var(--vt-space-4);
}

.doc-section__demo {
  display: flex;
  flex-wrap: wrap;
  gap: var(--vt-space-4);
  align-items: center;
  padding: var(--vt-space-6);
  border: 1px dashed var(--vt-color-border);
  border-radius: var(--vt-radius-md);
  background: var(--vt-color-bg-soft);
  margin-bottom: var(--vt-space-3);
}
</style>
