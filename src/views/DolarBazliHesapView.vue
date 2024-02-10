<script lang="ts">
import CalcForm from '@/components/CalcForm.vue';

export default {
    name: 'DolarBazliHesapView',
    components: { CalcForm }
	};
</script>

<template>
  <div class="RightWrapper">
    <CalcForm formType="dolarBazli" />
  </div>
</template>
