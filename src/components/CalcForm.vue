<script lang="ts">
export default {
    name: 'CalcForm',
    props: {
        formType: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            datedRate: 0, // this will be fetched from the API
            todaysRate: 0, // this will be fetched from the API
            borcTutari: 0,
            tl: true, // its true because default selected currency is TL
            usd: false,
            euro: false,
            debtDate: (new Date).toString().slice(0, 15) // null is not working in methods, so I used today's date instead of null
        }
    },
    methods: {
		async fetchDatedRate() {
            var date = this.debtDate.split('-');
            let year = date[0];
            let month = date[1];
            let day = date[2];
			await fetch('https://thingproxy.freeboard.io/fetch/https://www.tcmb.gov.tr/kurlar/'+year+month+'/'+day+month+year+'.xml')
            .then(response => response.text())
            .then(data => {
                let datedRateTemp = data.split('ABD DOLARI')[1].split('<BanknoteSelling>')[1].split('</BanknoteSelling>')[0];
                this.datedRate = parseFloat(datedRateTemp.split('.')[0] +'.'+ datedRateTemp.split('.')[1].slice(0, 2)); // got first 2 digits from decimal part of rate (like 8.1234 and convert it to 8.12)
                return this.datedRate;
            })
            .catch(error => console.error('Error:', error));
		},
        async fetchTodaysRate() {
            await fetch('https://api.exchangerate-api.com/v4/latest/USD')
            .then(response => response.json())
            .then(data => {
                this.todaysRate = data.rates.TRY;
                return this.todaysRate;
            })
            .catch(error => console.error('Error:', error));
        },
        async calculate() {
            if (this.formType == 'dolarBazli') {
                await this.fetchDatedRate();
                await this.fetchTodaysRate();
                var result = this.borcTutari / this.datedRate * this.todaysRate;
                if(result < 1){
                    result = parseFloat(result.toString().slice(0,4)); // got first 4 digits of result (like 0.1234 and convert it to 0.12)
                }
                else{
                    result = parseFloat(result.toString().split('.')[0]); // got integer part of result (like 123.456 and convert it to 123)
                }
                this.$emit('passResults', [this.borcTutari, this.datedRate, this.todaysRate, result] ); // pass the results to DolarBazliHesapView (or any other parent)
            }
            else if (this.formType == 'enflasyonBazli'){
                console.log(this.borcTutari);
                if(this.tl) {
                    console.log('TL');
                } else if(this.usd) {
                    console.log('USD');
                } else if(this.euro) {
                    console.log('EURO');
                }
                console.log(this.debtDate);
            }
        }
	},
    computed: {
        isButtonDisabled() {
        return ( !this.borcTutari || (this.debtDate == (new Date).toString().slice(0, 15)) );
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
                <input v-model="borcTutari" type="number" id="borcTutari" placeholder="Borç Miktarı" oninput="if(this.value < 0) this.value = 0;" />
            </div>
            <div class="formElem" v-show="formType == 'enflasyonBazli'">
                <label for="selectBox">Para Birim:</label>
                <div class="radiosWrapper">
                    <div  class="radioWrapper">
                        <input v-model="tl" checked type="radio" id="tl" name="paraBirimi" value="tl" />
                        <label for="tl">TL</label>
                    </div>
                    <div class="radioWrapper">
                        <input v-model="usd" type="radio" id="usd" name="paraBirimi" value="usd" />
                        <label for="usd">USD</label>
                    </div>
                    <div class="radioWrapper">
                        <input v-model="euro" type="radio" id="euro" name="paraBirimi" value="euro" />
                        <label for="euro">EURO</label>
                    </div>
                </div>
            </div>
            <div class="formElem">
                <label for="debtDate">Borç Alınma Tarihi:</label>
                <input v-model="debtDate" type="date" id="debtDate" :max="new Date().toISOString().split('T')[0]" />
            </div>
        </form>
        <button :disabled="isButtonDisabled" @click="calculate"> HESAPLA </button>
    </div>
</template>

<style scoped>

.formWrapper {
    width: 80%;
    height: auto;
    border-radius: 35px;
     border-bottom-left-radius: 10px; /* same radius with "HESAPLA" btn */
    border-bottom-right-radius: 10px;
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

.formWrapper button:disabled {
    background-color: hsla(160, 100%, 37%, 0.16);
    cursor: not-allowed;
}

</style>