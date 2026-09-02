<template>
  <div>
    <h1>Buttons</h1>
    <p>Buttons come in four variants and three sizes, built from a single component.</p>

    <DocSection title="Variants" description="Use `variant` to convey intent." :code="variantsCode">
      <VtButton variant="primary">Primary</VtButton>
      <VtButton variant="secondary">Secondary</VtButton>
      <VtButton variant="danger">Danger</VtButton>
      <VtButton variant="ghost">Ghost</VtButton>
    </DocSection>

    <DocSection title="Sizes" :code="sizesCode">
      <VtButton size="sm">Small</VtButton>
      <VtButton size="md">Medium</VtButton>
      <VtButton size="lg">Large</VtButton>
    </DocSection>

    <DocSection
      title="Handling clicks"
      description="Click the button — the count below comes from this page's own reactive state."
      :code="clickCode"
    >
      <VtButton @click="count++">Clicked {{ count }} times</VtButton>
    </DocSection>

    <DocSection title="Disabled state" :code="disabledCode">
      <VtButton disabled>Can't touch this</VtButton>
    </DocSection>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VtButton from '@/components/ui/VtButton.vue'
import DocSection from '@/components/docs/DocSection.vue'

export default defineComponent({
  name: 'ButtonsView',
  components: { VtButton, DocSection },

  data() {
    return {
      count: 0,
      variantsCode: `<VtButton variant="primary">Primary</VtButton>
<VtButton variant="secondary">Secondary</VtButton>
<VtButton variant="danger">Danger</VtButton>
<VtButton variant="ghost">Ghost</VtButton>`,
      sizesCode: `<VtButton size="sm">Small</VtButton>
<VtButton size="md">Medium</VtButton>
<VtButton size="lg">Large</VtButton>`,
      clickCode: `<template>
  <VtButton @click="count++">Clicked {{ count }} times</VtButton>
</template>

<script>
export default {
  data() {
    return { count: 0 }
  },
}
</scr${''}ipt>`,
      disabledCode: `<VtButton disabled>Can't touch this</VtButton>`,
    }
  },
})
</script>
