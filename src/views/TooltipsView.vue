<template>
  <div>
    <h1>Tooltips</h1>
    <p>Hover (or tab to focus) any trigger below to reveal its tooltip.</p>

    <DocSection
      title="Positions"
      description="The tooltip measures the trigger's real DOM position and Teleports itself to <body>."
      :code="code"
    >
      <VtTooltip text="I'm on top" position="top">
        <VtButton size="sm" variant="secondary">Top</VtButton>
      </VtTooltip>
      <VtTooltip text="Down here" position="bottom">
        <VtButton size="sm" variant="secondary">Bottom</VtButton>
      </VtTooltip>
      <VtTooltip text="To the left" position="left">
        <VtButton size="sm" variant="secondary">Left</VtButton>
      </VtTooltip>
      <VtTooltip text="To the right" position="right">
        <VtButton size="sm" variant="secondary">Right</VtButton>
      </VtTooltip>
    </DocSection>

    <DocSection title="On plain text" :code="textCode">
      <p>
        Vantage UI follows
        <VtTooltip text="Web Content Accessibility Guidelines">
          <span class="dotted">WCAG</span>
        </VtTooltip>
        2.1 AA standards.
      </p>
    </DocSection>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VtTooltip from '@/components/ui/VtTooltip.vue'
import VtButton from '@/components/ui/VtButton.vue'
import DocSection from '@/components/docs/DocSection.vue'

export default defineComponent({
  name: 'TooltipsView',
  components: { VtTooltip, VtButton, DocSection },
  data() {
    return {
      code: `<VtTooltip text="I'm on top" position="top">
  <VtButton size="sm" variant="secondary">Top</VtButton>
</VtTooltip>`,
      textCode: `<p>
  Vantage UI follows
  <VtTooltip text="Web Content Accessibility Guidelines">
    <span class="dotted">WCAG</span>
  </VtTooltip>
  2.1 AA standards.
</p>`,
    }
  },
})
</script>

<style scoped>
.dotted {
  text-decoration: underline dotted;
  text-underline-offset: 3px;
  cursor: help;
}
</style>
