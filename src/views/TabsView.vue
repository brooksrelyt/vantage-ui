<template>
  <div>
    <h1>Tabs</h1>
    <p>Organise content into switchable panels. VtTabs and VtTab communicate via <code>provide/inject</code> — no props required between them.</p>

    <!-- Basic tabs -->
    <DocSection
      title="Basic"
      description="Wrap VtTab children inside VtTabs. Each tab registers itself at mount time."
      :code="basicCode"
    >
      <VtTabs>
        <VtTab name="overview" label="Overview">
          <p>This is the <strong>Overview</strong> panel. Switch tabs to see the content change.</p>
        </VtTab>
        <VtTab name="details" label="Details">
          <p>This is the <strong>Details</strong> panel.</p>
        </VtTab>
        <VtTab name="history" label="History">
          <p>This is the <strong>History</strong> panel.</p>
        </VtTab>
      </VtTabs>
    </DocSection>

    <!-- Default tab -->
    <DocSection
      title="Default Tab"
      description="Use the defaultTab prop to control which tab is active on first render."
      :code="defaultCode"
    >
      <VtTabs default-tab="settings">
        <VtTab name="profile" label="Profile">
          <p>Profile content.</p>
        </VtTab>
        <VtTab name="settings" label="Settings">
          <p><strong>Settings</strong> is active by default here.</p>
        </VtTab>
        <VtTab name="billing" label="Billing">
          <p>Billing content.</p>
        </VtTab>
      </VtTabs>
    </DocSection>

    <!-- Tabs with richer content -->
    <DocSection
      title="Rich Content"
      description="Tab panels accept any content via the default slot — forms, cards, lists, anything."
      :code="richCode"
    >
      <VtTabs default-tab="alerts">
        <VtTab name="alerts" label="Alerts">
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <VtAlert type="success">Your changes have been saved.</VtAlert>
            <VtAlert type="warning">Your trial expires in 3 days.</VtAlert>
          </div>
        </VtTab>
        <VtTab name="form" label="Form">
          <div style="display: flex; flex-direction: column; gap: 12px; max-width: 360px;">
            <VtInput label="Full name" placeholder="Jane Smith" />
            <VtInput label="Email" placeholder="jane@example.com" type="email" />
            <VtButton>Save</VtButton>
          </div>
        </VtTab>
      </VtTabs>
    </DocSection>

    <SourceSection :source="vtTabsSource" filename="VtTabs.vue" />
    <SourceSection :source="vtTabSource" filename="VtTab.vue" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VtTabs from '@/components/ui/VtTabs.vue'
import VtTabsSource from '@/components/ui/VtTabs.vue?raw'
import VtTab from '@/components/ui/VtTab.vue'
import VtTabSource from '@/components/ui/VtTab.vue?raw'
import VtAlert from '@/components/ui/VtAlert.vue'
import VtInput from '@/components/ui/VtInput.vue'
import VtButton from '@/components/ui/VtButton.vue'
import DocSection from '@/components/docs/DocSection.vue'
import SourceSection from '@/components/docs/SourceSection.vue'

export default defineComponent({
  name: 'TabsView',
  components: { VtTabs, VtTab, VtAlert, VtInput, VtButton, DocSection, SourceSection },
  setup() {
    return { vtTabsSource: VtTabsSource, vtTabSource: VtTabSource }
  },
  data() {
    return {
      basicCode: `<VtTabs>
  <VtTab name="overview" label="Overview">
    <p>Overview content.</p>
  </VtTab>
  <VtTab name="details" label="Details">
    <p>Details content.</p>
  </VtTab>
</VtTabs>`,

      defaultCode: `<VtTabs default-tab="settings">
  <VtTab name="profile" label="Profile"> ... </VtTab>
  <VtTab name="settings" label="Settings"> ... </VtTab>
</VtTabs>`,

      richCode: `<VtTabs default-tab="alerts">
  <VtTab name="alerts" label="Alerts">
    <VtAlert type="success">Your changes have been saved.</VtAlert>
  </VtTab>
  <VtTab name="form" label="Form">
    <VtInput label="Full name" placeholder="Jane Smith" />
    <VtButton>Save</VtButton>
  </VtTab>
</VtTabs>`,
    }
  },
})
</script>
