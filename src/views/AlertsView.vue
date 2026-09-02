<template>
  <div>
    <h1>Alerts</h1>
    <p>Alerts communicate status. The icon is derived automatically from <code>type</code>.</p>

    <DocSection title="Types" :code="code">
      <div class="stack">
        <VtAlert type="info">This is an informational message.</VtAlert>
        <VtAlert type="success">Your changes were saved successfully.</VtAlert>
        <VtAlert type="warning">Your session will expire in 5 minutes.</VtAlert>
        <VtAlert type="danger">Something went wrong — please try again.</VtAlert>
      </div>
    </DocSection>

    <SourceSection :source="vtAlertSource" filename="VtAlert.vue" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VtAlert from '@/components/ui/VtAlert.vue'
import VtAlertSource from '@/components/ui/VtAlert.vue?raw'
import DocSection from '@/components/docs/DocSection.vue'
import SourceSection from '@/components/docs/SourceSection.vue'

export default defineComponent({
  name: 'AlertsView',
  components: { VtAlert, DocSection, SourceSection },
  setup() {
    return { vtAlertSource: VtAlertSource }
  },
  data() {
    return {
      code: `<VtAlert type="info">This is an informational message.</VtAlert>
<VtAlert type="success">Your changes were saved successfully.</VtAlert>
<VtAlert type="warning">Your session will expire in 5 minutes.</VtAlert>
<VtAlert type="danger">Something went wrong — please try again.</VtAlert>`,
    }
  },
})
</script>

<style scoped>
.stack {
  display: flex;
  flex-direction: column;
  gap: var(--vt-space-3);
  width: 100%;
}
</style>
