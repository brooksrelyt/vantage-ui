<template>
  <div>
    <h1>Cards</h1>
    <p>
      Cards use named slots for an optional header and footer, plus a default slot for the body.
    </p>

    <DocSection title="Basic card" :code="basicCode">
      <VtCard style="width: 320px">
        <template #header>Project Alpha</template>
        Cards group related content and actions into a single container.
        <template #footer>
          <VtButton size="sm">View details</VtButton>
        </template>
      </VtCard>
    </DocSection>

    <DocSection title="Body only" :code="bodyOnlyCode">
      <VtCard style="width: 320px">
        No header or footer — those sections just don't render.
      </VtCard>
    </DocSection>

    <SourceSection :source="vtCardSource" filename="VtCard.vue" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VtCard from '@/components/ui/VtCard.vue'
import VtCardSource from '@/components/ui/VtCard.vue?raw'
import VtButton from '@/components/ui/VtButton.vue'
import DocSection from '@/components/docs/DocSection.vue'
import SourceSection from '@/components/docs/SourceSection.vue'

export default defineComponent({
  name: 'CardsView',
  components: { VtCard, VtButton, DocSection, SourceSection },
  setup() {
    return { vtCardSource: VtCardSource }
  },
  data() {
    return {
      basicCode: `<VtCard>
  <template #header>Project Alpha</template>
  Cards group related content and actions into a single container.
  <template #footer>
    <VtButton size="sm">View details</VtButton>
  </template>
</VtCard>`,
      bodyOnlyCode: `<VtCard>
  No header or footer — those sections just don't render.
</VtCard>`,
    }
  },
})
</script>
