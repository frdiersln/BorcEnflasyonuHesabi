<script lang="ts">
import CalcForm from '@/components/CalcForm.vue';

export default {
    name: 'DolarBazliHesapView',
    components: { CalcForm },
    methods: {
		fetchData() {
			fetch('https://api.allorigins.win/raw?url=https://www.tcmb.gov.tr/kurlar/202402/09022024.xml')
      .then(response => response.text())
      .then(data => {
        console.log("1 Dolar " + data.split('ABD DOLARI')[1].split('<BanknoteSelling>')[1].split('</BanknoteSelling>')[0] + " TL");
      })
      .catch(error => console.error('Error:', error));
		}
	}
};
</script>

<template>
  <div class="RightWrapper">
    <CalcForm formType="dolarBazli" />
    <button @click="fetchData">Fetch Data</button>
  </div>
</template>
