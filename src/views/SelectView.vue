<template>
  <div>
    <h1>Select</h1>
    <p>
      A native <code>&lt;select&gt;</code> wrapped with label/error support, matching
      <code>VtInput</code>'s conventions. Use <code>v-model</code> to bind the chosen value.
    </p>

    <DocSection
      title="Basic"
      description="Pass an `options` array of { label, value } and a `placeholder` for the empty state."
      :code="basicCode"
    >
      <VtSelect v-model="fruit" label="Favorite fruit" placeholder="Choose a fruit" :options="fruitOptions" />
    </DocSection>

    <DocSection title="With a value pre-selected" :code="preselectedCode">
      <VtSelect v-model="role" label="Role" :options="roleOptions" />
    </DocSection>

    <DocSection title="Error state" description="Pass an `error` string to show validation feedback." :code="errorCode">
      <VtSelect v-model="plan" label="Plan" placeholder="Choose a plan" :options="planOptions" error="Please select a plan" />
    </DocSection>

    <DocSection title="Disabled" :code="disabledCode">
      <VtSelect label="Region" placeholder="Unavailable" :options="regionOptions" disabled />
    </DocSection>

    <SourceSection :source="vtSelectSource" filename="VtSelect.vue" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VtSelect from '@/components/ui/VtSelect.vue'
import VtSelectSource from '@/components/ui/VtSelect.vue?raw'
import DocSection from '@/components/docs/DocSection.vue'
import SourceSection from '@/components/docs/SourceSection.vue'

export default defineComponent({
  name: 'SelectView',
  components: { VtSelect, DocSection, SourceSection },
  setup() {
    return { vtSelectSource: VtSelectSource }
  },
  data() {
    return {
      fruit: '',
      fruitOptions: [
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Cherry', value: 'cherry' },
      ],

      role: 'editor',
      roleOptions: [
        { label: 'Viewer', value: 'viewer' },
        { label: 'Editor', value: 'editor' },
        { label: 'Admin', value: 'admin' },
      ],

      plan: '',
      planOptions: [
        { label: 'Free', value: 'free' },
        { label: 'Pro', value: 'pro' },
        { label: 'Enterprise', value: 'enterprise' },
      ],

      regionOptions: [
        { label: 'US East', value: 'us-east' },
        { label: 'US West', value: 'us-west' },
      ],

      basicCode: `<VtSelect
  v-model="fruit"
  label="Favorite fruit"
  placeholder="Choose a fruit"
  :options="[
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cherry', value: 'cherry' },
  ]"
/>`,
      preselectedCode: `<VtSelect
  v-model="role"
  label="Role"
  :options="[
    { label: 'Viewer', value: 'viewer' },
    { label: 'Editor', value: 'editor' },
    { label: 'Admin', value: 'admin' },
  ]"
/>
<!-- role: 'editor' -->`,
      errorCode: `<VtSelect
  v-model="plan"
  label="Plan"
  placeholder="Choose a plan"
  :options="planOptions"
  error="Please select a plan"
/>`,
      disabledCode: `<VtSelect
  label="Region"
  placeholder="Unavailable"
  :options="regionOptions"
  disabled
/>`,
    }
  },
})
</script>
