<template>
  <div>
    <h1>Forms &amp; Inputs</h1>
    <p><code>VtInput</code> supports <code>v-model</code> for two-way binding.</p>

    <DocSection
      title="Basic input"
      description="Type below — the value updates live via v-model."
      :code="basicCode"
    >
      <VtInput v-model="name" label="Your name" placeholder="Ada Lovelace" style="width: 260px" />
      <p style="align-self: center">
        You typed: <strong>{{ name || '(nothing yet)' }}</strong>
      </p>
    </DocSection>

    <DocSection
      title="Validation"
      description="A computed property derives an error message from the input's state."
      :code="validationCode"
    >
      <VtInput v-model="email" label="Email" placeholder="you@company.com" :error="emailError" />
    </DocSection>

    <DocSection
      title="Textarea"
      description="VtTextarea shares VtInput's v-model contract, for multi-line text."
      :code="textareaCode"
    >
      <VtTextarea v-model="message" label="Message" placeholder="Write something..." />
    </DocSection>

    <SourceSection :source="vtInputSource" filename="VtInput.vue" />
    <SourceSection :source="vtTextareaSource" filename="VtTextarea.vue" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VtInput from '@/components/ui/VtInput.vue'
import VtInputSource from '@/components/ui/VtInput.vue?raw'
import VtTextarea from '@/components/ui/VtTextarea.vue'
import VtTextareaSource from '@/components/ui/VtTextarea.vue?raw'
import DocSection from '@/components/docs/DocSection.vue'
import SourceSection from '@/components/docs/SourceSection.vue'

export default defineComponent({
  name: 'FormsView',
  components: { VtInput, VtTextarea, DocSection, SourceSection },
  setup() {
    return { vtInputSource: VtInputSource, vtTextareaSource: VtTextareaSource }
  },

  data() {
    return {
      name: '',
      email: '',
      message: '',
      basicCode: `<template>
  <VtInput v-model="name" label="Your name" placeholder="Ada Lovelace" />
  <p>You typed: {{ name }}</p>
</template>

<script>
export default {
  data() {
    return { name: '', message: '' }
  },
}
</scr${''}ipt>`,
      validationCode: `<VtInput v-model="email" label="Email" :error="emailError" />

// In the component:
computed: {
  emailError() {
    if (!this.email) return ''
    return this.email.includes('@') ? '' : 'Enter a valid email'
  },

}`,
      textareaCode: `<VtTextarea v-model="message" label="Message" placeholder="Write something..." />`,
    }
  },

  computed: {
    emailError(): string {
      if (!this.email) return ''
      return this.email.includes('@') ? '' : 'Enter a valid email'
    },
  },
})
</script>
