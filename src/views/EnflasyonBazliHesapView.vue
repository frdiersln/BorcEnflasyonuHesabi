<script lang="ts">
import CalcForm from '@/components/CalcForm.vue';

export default {
    name: 'EnflasyonBazliHesapView',
    components: { CalcForm }
	};
</script>

<template>
  <div class="RightWrapper">
    <CalcForm formType="enflasyonBazli" />
  </div>
</template>