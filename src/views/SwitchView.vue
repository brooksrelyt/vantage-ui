<template>
  <div>
    <h1>Toggle</h1>
    <p>Toggles were coded as an exercise in creating a component from scratch.</p>

    <DocSection title="Switch" description="Toggle state, bound with v-model." :code="switchCode">
      <VtSwitch v-model="notifications" label="Email notifications" />
    </DocSection>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VtSwitch from '@/components/ui/VtSwitch.vue'
import DocSection from '@/components/docs/DocSection.vue'

export default defineComponent({
  name: 'ToggleView',
  components: { VtSwitch, DocSection },
  data() {
    return {
      notifications: false,
      switchCode: `<VtSwitch v-model="notifications" label="Email notifications" />`,
    }
  },
})
</script>

<style scoped>
.vt-switch {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  user-select: none;
}
</style>
