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
    <div class="resultsWrapper">
      <div v-if="results.length > 0" class="resultsHeading">
        <h2>Sonuçlar</h2>
      </div>
      <div v-if="results.length > 0" class="results">
        <div v-for="result in results" :key="result" class="row">
          <div class="date"> {{ result[0] }} </div>
          <div class="cell"><div class="label"> Borç Miktarı</div> <div class="value"> {{ result[1] }} </div></div>
          <div class="cell"><div class="label"> Borç Tarihindeki Kur</div> <div class="value"> {{ result[2] }}</div></div>
          <div class="cell"><div class="label"> Güncel Kur</div> <div class="value"> {{ result[3] }}</div></div>
          <div class="cell"><div class="label"> Hesaplanan Borç</div> <div class="value"> {{ result[4] }}</div></div>
        </div>
      </div>
    </div>
  </div>
</template>
