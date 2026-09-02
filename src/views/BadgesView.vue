<template>
  <div>
    <h1>Badges</h1>
    <p>Small status labels. Same pattern as buttons and alerts: a <code>variant</code> prop drives color.</p>

    <DocSection title="Variants" :code="variantsCode">
      <VtBadge variant="neutral">Neutral</VtBadge>
      <VtBadge variant="primary">Primary</VtBadge>
      <VtBadge variant="success">Success</VtBadge>
      <VtBadge variant="warning">Warning</VtBadge>
      <VtBadge variant="danger">Danger</VtBadge>
    </DocSection>

    <DocSection
      title="With a status dot"
      description="Don't rely on color alone to convey status — pair it with a dot or icon."
      :code="dotCode"
    >
      <VtBadge variant="success" dot>Online</VtBadge>
      <VtBadge variant="danger" dot>Offline</VtBadge>
    </DocSection>

    <SourceSection :source="vtBadgeSource" filename="VtBadge.vue" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VtBadge from '@/components/ui/VtBadge.vue'
import VtBadgeSource from '@/components/ui/VtBadge.vue?raw'
import DocSection from '@/components/docs/DocSection.vue'
import SourceSection from '@/components/docs/SourceSection.vue'

export default defineComponent({
  name: 'BadgesView',
  components: { VtBadge, DocSection, SourceSection },
  setup() {
    return { vtBadgeSource: VtBadgeSource }
  },
  data() {
    return {
      variantsCode: `<VtBadge variant="neutral">Neutral</VtBadge>
<VtBadge variant="primary">Primary</VtBadge>
<VtBadge variant="success">Success</VtBadge>
<VtBadge variant="warning">Warning</VtBadge>
<VtBadge variant="danger">Danger</VtBadge>`,
      dotCode: `<VtBadge variant="success" dot>Online</VtBadge>
<VtBadge variant="danger" dot>Offline</VtBadge>`,
    }
  },
})
</script>
