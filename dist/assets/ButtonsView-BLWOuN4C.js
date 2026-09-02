import{a as e,c as t,d as n,f as r,g as i,h as a,l as o,n as s,t as c,u as l,y as u}from"./index-ChTsxk3Z.js";import{t as d}from"./DocSection-C8HL5fai.js";var f=n({name:`ButtonsView`,components:{VtButton:c,DocSection:d},data(){return{count:0,variantsCode:`<VtButton variant="primary">Primary</VtButton>
<VtButton variant="secondary">Secondary</VtButton>
<VtButton variant="danger">Danger</VtButton>
<VtButton variant="ghost">Ghost</VtButton>`,sizesCode:`<VtButton size="sm">Small</VtButton>
<VtButton size="md">Medium</VtButton>
<VtButton size="lg">Large</VtButton>`,clickCode:`<template>
  <VtButton @click="count++">Clicked {{ count }} times</VtButton>
</template>

<script>
export default {
  data() {
    return { count: 0 }
  },
}
<\/script>`,disabledCode:`<VtButton disabled>Can't touch this</VtButton>`}}});function p(n,s,c,d,f,p){let m=a(`VtButton`),h=a(`DocSection`);return r(),t(`div`,null,[s[9]||=e(`h1`,null,`Buttons`,-1),s[10]||=e(`p`,null,`Buttons come in four variants and three sizes, built from a single component.`,-1),l(h,{title:`Variants`,description:"Use `variant` to convey intent.",code:n.variantsCode},{default:i(()=>[l(m,{variant:`primary`},{default:i(()=>[...s[1]||=[o(`Primary`,-1)]]),_:1}),l(m,{variant:`secondary`},{default:i(()=>[...s[2]||=[o(`Secondary`,-1)]]),_:1}),l(m,{variant:`danger`},{default:i(()=>[...s[3]||=[o(`Danger`,-1)]]),_:1}),l(m,{variant:`ghost`},{default:i(()=>[...s[4]||=[o(`Ghost`,-1)]]),_:1})]),_:1},8,[`code`]),l(h,{title:`Sizes`,code:n.sizesCode},{default:i(()=>[l(m,{size:`sm`},{default:i(()=>[...s[5]||=[o(`Small`,-1)]]),_:1}),l(m,{size:`md`},{default:i(()=>[...s[6]||=[o(`Medium`,-1)]]),_:1}),l(m,{size:`lg`},{default:i(()=>[...s[7]||=[o(`Large`,-1)]]),_:1})]),_:1},8,[`code`]),l(h,{title:`Handling clicks`,description:`Click the button — the count below comes from this page's own reactive state.`,code:n.clickCode},{default:i(()=>[l(m,{onClick:s[0]||=e=>n.count++},{default:i(()=>[o(`Clicked `+u(n.count)+` times`,1)]),_:1})]),_:1},8,[`code`]),l(h,{title:`Disabled state`,code:n.disabledCode},{default:i(()=>[l(m,{disabled:``},{default:i(()=>[...s[8]||=[o(`Can't touch this`,-1)]]),_:1})]),_:1},8,[`code`])])}var m=s(f,[[`render`,p]]);export{m as default};