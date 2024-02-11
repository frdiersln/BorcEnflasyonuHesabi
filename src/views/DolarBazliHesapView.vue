<script lang="ts">
import CalcForm from '@/components/CalcForm.vue';

export default {
    name: 'DolarBazliHesapView',
    components: { CalcForm },
    data() {
      return {
        results: [], // this will be fetched from CalcForm
      };
    },
    methods: {
      receiveResultsFromCalcForm(results: any) {
        this.results = results;
        console.log(this.results);
      }
    }
}
</script>

<template>
  <div class="RightWrapper">
    <CalcForm formType="dolarBazli" @passResults="receiveResultsFromCalcForm" />
    <div v-if="results.length == 4" class="Results">
      <h2>Results</h2>
      <p>Alınan/Verilen Borç: {{ results[0] }}TL Geçmiş Dolar Kuru: {{results[1]}}TL Güncel Dolar Kuru: {{ results[2] }}TL Hesaplanan Borç: {{ results[3] }}TL </p>
    </div>
  </div>
</template>
