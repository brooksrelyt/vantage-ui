<template>
  <div>
    <h1>Modal</h1>
    <p>A dialog overlay rendered via Teleport. Supports v-model, named slots, sizes, and keyboard/backdrop dismissal.</p>

    <!-- Basic modal -->
    <DocSection
      title="Basic"
      description="v-model controls open/close state. The modal emits update:modelValue false when dismissed."
      :code="basicCode"
    >
      <VtButton @click="showBasic = true">Open Modal</VtButton>

      <VtModal v-model="showBasic" title="Basic Modal">
        <p>This is the modal body. Any content can go here via the default slot.</p>
      </VtModal>
    </DocSection>

    <!-- Modal with footer -->
    <DocSection
      title="With Footer"
      description="Provide a #footer slot to render action buttons in the modal footer."
      :code="footerCode"
    >
      <VtButton @click="showFooter = true">Open Modal</VtButton>

      <VtModal v-model="showFooter" title="Confirm Action">
        <p>Are you sure you want to delete this item? This action cannot be undone.</p>
        <template #footer>
          <VtButton variant="secondary" @click="showFooter = false">Cancel</VtButton>
          <VtButton variant="danger" @click="showFooter = false">Delete</VtButton>
        </template>
      </VtModal>
    </DocSection>

    <!-- Sizes -->
    <DocSection
      title="Sizes"
      description="Three sizes available: sm (400px), md (560px, default), lg (800px)."
      :code="sizesCode"
    >
      <VtButton variant="secondary" size="sm" @click="showSm = true">Small</VtButton>
      <VtButton variant="secondary" size="sm" @click="showMd = true">Medium</VtButton>
      <VtButton variant="secondary" size="sm" @click="showLg = true">Large</VtButton>

      <VtModal v-model="showSm" title="Small Modal" size="sm">
        <p>This modal has a max-width of 400px.</p>
      </VtModal>
      <VtModal v-model="showMd" title="Medium Modal" size="md">
        <p>This modal has a max-width of 560px (the default).</p>
      </VtModal>
      <VtModal v-model="showLg" title="Large Modal" size="lg">
        <p>This modal has a max-width of 800px — good for forms or data tables.</p>
      </VtModal>
    </DocSection>

    <!-- No backdrop close -->
    <DocSection
      title="Backdrop Lock"
      description="Set :closeOnBackdrop='false' to prevent dismissal by clicking outside."
      :code="backdropCode"
    >
      <VtButton @click="showLocked = true">Open Locked Modal</VtButton>

      <VtModal v-model="showLocked" title="Locked Modal" :closeOnBackdrop="false">
        <p>Clicking outside won't close this modal. You must use the ✕ button or press Escape.</p>
        <template #footer>
          <VtButton @click="showLocked = false">Got it</VtButton>
        </template>
      </VtModal>
    </DocSection>

    <SourceSection :source="vtModalSource" filename="VtModal.vue" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VtModal from '@/components/ui/VtModal.vue'
import VtModalSource from '@/components/ui/VtModal.vue?raw'
import VtButton from '@/components/ui/VtButton.vue'
import DocSection from '@/components/docs/DocSection.vue'
import SourceSection from '@/components/docs/SourceSection.vue'

export default defineComponent({
  name: 'ModalView',
  components: { VtModal, VtButton, DocSection, SourceSection },
  setup() {
    return { vtModalSource: VtModalSource }
  },
  data() {
    return {
      showBasic: false,
      showFooter: false,
      showSm: false,
      showMd: false,
      showLg: false,
      showLocked: false,

      basicCode: `<VtButton @click="showModal = true">Open Modal</VtButton>

<VtModal v-model="showModal" title="Basic Modal">
  <p>This is the modal body.</p>
</VtModal>`,

      footerCode: `<VtModal v-model="showModal" title="Confirm Action">
  <p>Are you sure you want to delete this item?</p>
  <template #footer>
    <VtButton variant="secondary" @click="showModal = false">Cancel</VtButton>
    <VtButton variant="danger" @click="showModal = false">Delete</VtButton>
  </template>
</VtModal>`,

      sizesCode: `<VtModal v-model="showSm" title="Small Modal" size="sm"> ... </VtModal>
<VtModal v-model="showMd" title="Medium Modal" size="md"> ... </VtModal>
<VtModal v-model="showLg" title="Large Modal" size="lg"> ... </VtModal>`,

      backdropCode: `<VtModal v-model="showModal" title="Locked" :closeOnBackdrop="false">
  <p>Click outside won't close this modal.</p>
</VtModal>`,
    }
  },
})
</script>
