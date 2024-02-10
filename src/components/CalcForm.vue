<script lang="ts">

export default {
    name: 'CalcForm',
    props: {
        formType: {
            type: String,
            required: true
        }
    },
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
    <div class="formWrapper">
        <form>
            <div class="formElem">
                <label v-if="formType == 'dolarBazli'" for="borcTutari">Alınan/Verilen Dolar Miktarı:</label>
                <label v-else for="borcTutari">Alınan/Verilen Borç Miktarı:</label>
                <input type="number" id="borcTutari" placeholder="Borç Miktarı" oninput="if(this.value < 0) this.value = 0;" />
            </div>
            <div class="formElem" v-show="formType == 'enflasyonBazli'">
                <label for="selectBox">Para Birim:</label>
                <div class="radiosWrapper">
                    <div  class="radioWrapper">
                        <input checked type="radio" id="tl" name="paraBirimi" value="tl" />
                        <label for="tl">TL</label>
                    </div>
                    <div class="radioWrapper">
                        <input type="radio" id="usd" name="paraBirimi" value="usd" />
                        <label for="usd">USD</label>
                    </div>
                    <div class="radioWrapper">
                        <input type="radio" id="euro" name="paraBirimi" value="euro" />
                        <label for="euro">EURO</label>
                    </div>
                </div>
            </div>
            <div class="formElem">
                <label for="debtDate">Borç Alınma Tarihi:</label>
                <input type="date" id="debtDate" :max="new Date().toISOString().split('T')[0]" />
            </div>
        </form>
        <button @click="fetchData"> HESAPLA </button>
    </div>
</template>

<style scoped>

.formWrapper {
    width: 80%;
    height: auto;
    border-radius: 35px;
    background: linear-gradient(145deg, var(--color-background-soft), var(--color-background));
    box-shadow:  11px 11px 24px var(--color-background-soft), -11px -11px 24px var(--color-background);
}
.formWrapper form {
    width: 100%;
    height: auto;
    padding: 41px 26px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
}

.formWrapper form .formElem{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
}

.formWrapper form .formElem:last-child {
    margin-bottom: 0;
}

.formWrapper form .formElem label {
    font-size: 1rem;
    font-weight: 400;
    color: var(--color-text);
}

.formWrapper form .formElem input {
    width: 41%;
    height: 40px;
    border-radius: 10px;
    border: 1px solid var(--color-text);
    padding: 0 10px;
    font-size: 1rem;
    font-weight: 400;
    color: var(--color-text);
    background: transparent;
}

.formWrapper form .formElem .radiosWrapper {
    width: 41%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.formWrapper form .formElem .radiosWrapper .radioWrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: auto;
}

.formWrapper form .formElem .radiosWrapper .radioWrapper input {
    width: 17px;
    height: 17px;
    margin-right: 4px;
}

.formWrapper button {
    width: 100%;
    height: auto;
    padding: 10px;
    border-radius: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border: none;
    font-size: 2rem;
    font-weight: 600;
    color: var(--color-text);
    background-color: hsla(160, 100%, 37%, 0.41);
    cursor: pointer;
}
.formWrapper button:hover {
    background-color: hsla(160, 100%, 37%, 0.66);
}
</style>