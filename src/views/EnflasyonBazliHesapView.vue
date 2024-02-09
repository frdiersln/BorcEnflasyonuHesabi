<script lang="ts">
import CalcForm from '@/components/CalcForm.vue';

import { defineComponent } from 'vue';
export default defineComponent({
    name: 'EnflasyonBazliHesapView',
    components: { CalcForm }
});
</script>

<template>
  <div class="enflasyonBazliHesap">
    <div class="inPageHeader">
      <h1>Enflasyon Bazlı Hesap Sayfası</h1>
    </div>  
    <CalcForm formType="enflasyonBazli" />
  </div>
</template>

<style>
.enflasyonBazliHesap {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 14rem 0;
}

@media (max-width: 1024px) {
  .enflasyonBazliHesap {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
  }
}
</style>
