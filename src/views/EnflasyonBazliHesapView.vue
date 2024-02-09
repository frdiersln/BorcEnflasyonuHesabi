<script lang="ts">
import CalcForm from '@/components/CalcForm.vue';

import { defineComponent } from 'vue';
export default defineComponent({
    name: 'EnflasyonBazliHesapView',
    components: { CalcForm }
});
</script>

<template>
  <div class="RightWrapper">
    <div class="inPageHeader">
      <h1>Enflasyon Bazlı Hesap Sayfası</h1>
    </div>  
    <CalcForm formType="enflasyonBazli" />
  </div>
</template>