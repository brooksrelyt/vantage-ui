<template>
  <div class="code-block">
    <div class="code-block__toolbar">
      <span class="code-block__lang">{{ language }}</span>
      <button class="code-block__copy" @click="copy">
        {{ copied ? 'Copied!' : 'Copy' }}
      </button>
    </div>
    <pre class="code-block__pre"><code>{{ code }}</code></pre>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CodeBlock',

  props: {
    code: { type: String, required: true },
    language: { type: String, default: 'vue-html' },
  },

  data() {
    // `data()` returns the reactive state OWNED by this component instance.
    // Every property returned here is tracked: when `copied` changes,
    // Vue knows exactly which part of the template to re-render.
    return {
      copied: false,
    }
  },

  methods: {
    async copy() {
      await navigator.clipboard.writeText(this.code)
      this.copied = true
      // setTimeout mutating `this.copied` still triggers reactivity —
      // Vue doesn't care WHEN state changes, only THAT it changes.
      setTimeout(() => {
        this.copied = false
      }, 1500)
    },
  },
})
</script>

<style scoped>
.code-block {
  border-radius: var(--vt-radius-md);
  overflow: hidden;
  border: 1px solid var(--vt-color-border);
}

.code-block__toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--vt-space-2) var(--vt-space-4);
  background: #1f2937;
  color: #9ca3af;
  font-size: var(--vt-text-xs);
}

.code-block__copy {
  background: none;
  border: 1px solid #4b5563;
  color: #d1d5db;
  border-radius: var(--vt-radius-sm);
  padding: 2px var(--vt-space-2);
  font-size: var(--vt-text-xs);
  cursor: pointer;
}
.code-block__copy:hover {
  background: #374151;
}

.code-block__pre {
  margin: 0;
  padding: var(--vt-space-4);
  background: #111827;
  color: #e5e7eb;
  overflow-x: auto;
  font-family: var(--vt-font-mono);
  font-size: var(--vt-text-sm);
  line-height: 1.5;
}
</style>
