import{a as e,c as t,d as n,f as r,g as i,h as a,l as o,n as s,s as c,u as l,y as u}from"./index-ChTsxk3Z.js";import{t as d}from"./DocSection-C8HL5fai.js";var f=n({name:`VtInput`,props:{modelValue:{type:String,default:``},label:{type:String,default:``},placeholder:{type:String,default:``},type:{type:String,default:`text`},error:{type:String,default:``}},emits:[`update:modelValue`],methods:{onInput(e){let t=e.target;this.$emit(`update:modelValue`,t.value)}}}),p={class:`vt-input`},m={key:0,class:`vt-input__label`},h=[`type`,`placeholder`,`value`],g={key:1,class:`vt-input__error`};function _(n,i,a,o,s,l){return r(),t(`label`,p,[n.label?(r(),t(`span`,m,u(n.label),1)):c(``,!0),e(`input`,{class:`vt-input__field`,type:n.type,placeholder:n.placeholder,value:n.modelValue,onInput:i[0]||=(...e)=>n.onInput&&n.onInput(...e)},null,40,h),n.error?(r(),t(`span`,g,u(n.error),1)):c(``,!0)])}var v=s(f,[[`render`,_],[`__scopeId`,`data-v-73747a74`]]),y=n({name:`VtTextarea`,props:{modelValue:{type:String,default:``},label:{type:String,default:``},placeholder:{type:String,default:``},error:{type:String,default:``},rows:{type:Number,default:4}},emits:[`update:modelValue`],methods:{onInput(e){let t=e.target;this.$emit(`update:modelValue`,t.value)}}}),b={class:`vt-textarea`},x={key:0,class:`vt-textarea__label`},S=[`placeholder`,`rows`,`value`],C={key:1,class:`vt-textarea__error`};function w(n,i,a,o,s,l){return r(),t(`label`,b,[n.label?(r(),t(`span`,x,u(n.label),1)):c(``,!0),e(`textarea`,{class:`vt-textarea__field`,placeholder:n.placeholder,rows:n.rows,value:n.modelValue,onInput:i[0]||=(...e)=>n.onInput&&n.onInput(...e)},null,40,S),n.error?(r(),t(`span`,C,u(n.error),1)):c(``,!0)])}var T=n({name:`FormsView`,components:{VtInput:v,DocSection:d,VtTextarea:s(y,[[`render`,w],[`__scopeId`,`data-v-877c4e44`]])},data(){return{name:``,email:``,message:``,basicCode:`<template>
  <VtInput v-model="name" label="Your name" placeholder="Ada Lovelace" />
  <p>You typed: {{ name }}</p>
</template>

<script>
export default {
  data() {
    return { name: '', message: '' }
  },
}
<\/script>`,validationCode:`<VtInput v-model="email" label="Email" :error="emailError" />

// In the component:
computed: {
  emailError() {
    if (!this.email) return ''
    return this.email.includes('@') ? '' : 'Enter a valid email'
  },

}`,textareaCode:`<VtTextarea v-model="message" label="Message" placeholder="Write something..." />`}},computed:{emailError(){return this.email?this.email.includes(`@`)?``:`Enter a valid email`:``}}}),E={style:{"align-self":`center`}};function D(n,s,c,d,f,p){let m=a(`VtInput`),h=a(`DocSection`),g=a(`VtTextarea`);return r(),t(`div`,null,[s[4]||=e(`h1`,null,`Forms & Inputs`,-1),s[5]||=e(`p`,null,[e(`code`,null,`VtInput`),o(` supports `),e(`code`,null,`v-model`),o(` for two-way binding.`)],-1),l(h,{title:`Basic input`,description:`Type below — the value updates live via v-model.`,code:n.basicCode},{default:i(()=>[l(m,{modelValue:n.name,"onUpdate:modelValue":s[0]||=e=>n.name=e,label:`Your name`,placeholder:`Ada Lovelace`,style:{width:`260px`}},null,8,[`modelValue`]),e(`p`,E,[s[3]||=o(` You typed: `,-1),e(`strong`,null,u(n.name||`(nothing yet)`),1)])]),_:1},8,[`code`]),l(h,{title:`Validation`,description:`A computed property derives an error message from the input's state.`,code:n.validationCode},{default:i(()=>[l(m,{modelValue:n.email,"onUpdate:modelValue":s[1]||=e=>n.email=e,label:`Email`,placeholder:`you@company.com`,error:n.emailError},null,8,[`modelValue`,`error`])]),_:1},8,[`code`]),l(h,{title:`Textarea`,description:`VtTextarea shares VtInput's v-model contract, for multi-line text.`,code:n.textareaCode},{default:i(()=>[l(g,{modelValue:n.message,"onUpdate:modelValue":s[2]||=e=>n.message=e,label:`Message`,placeholder:`Write something...`},null,8,[`modelValue`])]),_:1},8,[`code`])])}var O=s(T,[[`render`,D]]);export{O as default};