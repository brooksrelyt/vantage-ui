Since your components moved into a subfolder, the import paths just need that extra segment —
everything else follows the same pattern as ButtonsView.vue or CardsView.vue. Import paths change
slightly tsimport VtContainer from '@/components/ui/grid/VtContainer.vue' import VtRow from
'@/components/ui/grid/VtRow.vue' import VtCol from '@/components/ui/grid/VtCol.vue' The @/ alias
always points to src/, so it's just a literal path from there — grid/ slots in exactly where you put
the folder. A barrel file scoped to just this folder Since you've now got a natural grouping, this
is a good spot for the barrel pattern we talked about — but scoped to grid/ specifically rather than
all of ui/: ts// src/components/ui/grid/index.ts export { default as VtContainer } from
'./VtContainer.vue' export { default as VtRow } from './VtRow.vue' export { default as VtCol } from
'./VtCol.vue' Then any view importing all three collapses to one line: tsimport { VtContainer,
VtRow, VtCol } from '@/components/ui/grid' GridView.vue vue
<template>
  <div>
    <h1>Grid</h1>
    <p>
      A 12-column responsive grid: <code>VtContainer</code> centers and caps width,
      <code>VtRow</code> lays out columns, <code>VtCol</code> sizes itself per breakpoint.
    </p>

    <DocSection
      title="Equal-width columns"
      description="With no props, VtCol splits the row evenly."
      :code="equalCode"
    >
      <VtContainer fluid>
        <VtRow>
          <VtCol class="demo-col">1</VtCol>
          <VtCol class="demo-col">2</VtCol>
          <VtCol class="demo-col">3</VtCol>
        </VtRow>
      </VtContainer>
    </DocSection>

    <DocSection
      title="Responsive spans"
      description="Resize the window — this stacks full-width on mobile, then splits at md."
      :code="responsiveCode"
    >
      <VtContainer fluid>
        <VtRow>
          <VtCol :cols="12" :md="6" :lg="4" class="demo-col">Sidebar</VtCol>
          <VtCol :cols="12" :md="6" :lg="8" class="demo-col">Main content</VtCol>
        </VtRow>
      </VtContainer>
    </DocSection>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { VtContainer, VtRow, VtCol } from '@/components/ui/grid'
import DocSection from '@/components/docs/DocSection.vue'

export default defineComponent({
  name: 'GridView',
  components: { VtContainer, VtRow, VtCol, DocSection },
  data() {
    return {
      equalCode: `<VtRow>
  <VtCol>1</VtCol>
  <VtCol>2</VtCol>
  <VtCol>3</VtCol>
</VtRow>`,
      responsiveCode: `<VtRow>
  <VtCol :cols="12" :md="6" :lg="4">Sidebar</VtCol>
  <VtCol :cols="12" :md="6" :lg="8">Main content</VtCol>
</VtRow>`,
    }
  },
})
</script>

<style scoped>
.demo-col {
  background: var(--vt-color-primary-soft);
  border: 1px solid var(--vt-color-primary);
  border-radius: var(--vt-radius-sm);
  padding: var(--vt-space-4);
  text-align: center;
  font-weight: 600;
}
</style>
