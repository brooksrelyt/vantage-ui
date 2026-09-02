<template>
  <div>
    <h1>Vantage UI</h1>
    <p class="lede">
      A design system and component library for internal Vantage products, built with Vue 3.
    </p>

    <VtAlert type="info" style="margin-top: 1.5rem">
      This site is itself a Vue application — every component you browse here is the same component
      you'd import into a real project.
    </VtAlert>

    <h2 style="margin-top: 2rem">Getting started</h2>
    <p>Install the package and import components as you need them:</p>
    <CodeBlock code="npm install @vantage/ui" language="bash" />

    <h2 style="margin-top: 2rem">Principles</h2>
    <ul class="principles">
      <li><strong>Consistent</strong> — one set of tokens drives every component.</li>
      <li><strong>Composable</strong> — small components combine into bigger ones.</li>
      <li><strong>Accessible</strong> — semantic HTML and ARIA roles by default.</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VtAlert from '@/components/ui/VtAlert.vue'
import CodeBlock from '@/components/docs/CodeBlock.vue'

export default defineComponent({
  name: 'IntroductionView',
  components: { VtAlert, CodeBlock },
})
</script>

<style scoped>
.lede {
  font-size: var(--vt-text-lg);
  color: var(--vt-color-text-muted);
}

.principles {
  padding-left: var(--vt-space-6);
  display: flex;
  flex-direction: column;
  gap: var(--vt-space-2);
}
</style>
