<template>
  <div>
    <h1>Colors</h1>
    <p>
      Every color in Vantage UI is a CSS custom property, defined once in <code>tokens.css</code>.
    </p>

    <div v-for="group in swatchGroups" :key="group.title" class="swatch-group">
      <h3>{{ group.title }}</h3>
      <div class="swatch-row">
        <div v-for="swatch in group.colors" :key="swatch.varName" class="swatch">
          <div class="swatch__color" :style="{ background: `var(${swatch.varName})` }"></div>
          <div class="swatch__meta">
            <div class="swatch__name">{{ swatch.name }}</div>
            <div class="swatch__var">{{ swatch.varName }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Swatch {
  name: string
  varName: string
}
interface SwatchGroup {
  title: string
  colors: Swatch[]
}

export default defineComponent({
  name: 'ColorsView',

  data() {
    return {
      swatchGroups: [
        {
          title: 'Brand',
          colors: [
            { name: 'Primary', varName: '--vt-color-primary' },
            { name: 'Primary Hover', varName: '--vt-color-primary-hover' },
            { name: 'Primary Soft', varName: '--vt-color-primary-soft' },
          ],
        },
        {
          title: 'Feedback',
          colors: [
            { name: 'Success', varName: '--vt-color-success' },
            { name: 'Warning', varName: '--vt-color-warning' },
            { name: 'Danger', varName: '--vt-color-danger' },
          ],
        },
        {
          title: 'Neutral',
          colors: [
            { name: 'Text', varName: '--vt-color-text' },
            { name: 'Text Muted', varName: '--vt-color-text-muted' },
            { name: 'Border', varName: '--vt-color-border' },
            { name: 'Background Soft', varName: '--vt-color-bg-soft' },
          ],
        },
      ] as SwatchGroup[],
    }
  },
})
</script>

<style scoped>
.swatch-group {
  margin-top: var(--vt-space-8);
}

.swatch-row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--vt-space-4);
  margin-top: var(--vt-space-4);
}

.swatch {
  width: 160px;
}

.swatch__color {
  height: 64px;
  border-radius: var(--vt-radius-md);
  border: 1px solid var(--vt-color-border);
}

.swatch__meta {
  margin-top: var(--vt-space-2);
}

.swatch__name {
  font-weight: 600;
  font-size: var(--vt-text-sm);
}

.swatch__var {
  font-family: var(--vt-font-mono);
  font-size: var(--vt-text-xs);
  color: var(--vt-color-text-muted);
}
</style>
