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
    <CalcForm formType="dolarBazli" />
  </div>
</template>
