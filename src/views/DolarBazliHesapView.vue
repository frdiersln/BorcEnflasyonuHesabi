<script lang="ts">
import CalcForm from '@/components/CalcForm.vue';

import { defineComponent } from 'vue';
export default defineComponent({
    name: 'DolarBazliHesapView',
    components: { CalcForm }
});
</script>

<template>
  <div class="dolarBazliHesap">
    <div class="inPageHeader">
      <h1>Dolar Bazlı Hesap Sayfası</h1>
    </div>  
    <CalcForm formType="dolarBazli" />
  </div>
</template>

<style>
.dolarBazliHesap {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 14rem 0;
}

@media (max-width: 1024px) {
  .dolarBazliHesap {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    border: 1px solid red;
  }
}
</style>
