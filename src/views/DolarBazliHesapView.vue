<script lang="ts">
import CalcForm from '@/components/CalcForm.vue';

import { defineComponent } from 'vue';
export default defineComponent({
    name: 'DolarBazliHesapView',
    components: { CalcForm }
});
</script>

<template>
  <div class="RightWrapper">
    <div class="inPageHeader">
      <h1>Dolar Bazlı Hesap Sayfası</h1>
    </div>  
    <CalcForm formType="dolarBazli" />
  </div>
</template>
