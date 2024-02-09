<script setup lang="ts">
defineProps<{
  formType: string
}>()
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
    </div>
</template>

<style scoped>

.formWrapper {
    width: 80%;
    height: fit-content;
    border-radius: 35px;
    background: linear-gradient(145deg, var(--color-background-soft), var(--color-background));
    box-shadow:  11px 11px 24px var(--color-background-soft), -11px -11px 24px var(--color-background);
}
.formWrapper form {
    width: 100%;
    height: fit-content;
    height: 100%;
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
    width: fit-content;
}

.formWrapper form .formElem .radiosWrapper .radioWrapper input {
    width: 17px;
    height: 17px;
    margin-right: 4px;
}

</style>