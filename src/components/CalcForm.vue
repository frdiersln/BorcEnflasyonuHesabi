<script setup lang="ts">
defineProps<{
  formType: string
}>()
</script>

<template>
    <div class="formWrapper">
        <form>
            <div class="formElem">
                <label for="borcTutari">Alınan/Verilen Borç Miktarı:</label>
                <input type="number" id="borcTutari" placeholder="Borç Miktarı" />
            </div>
            <div class="formElem">
                <label for="selectBox">Para Birim:</label>
                <select id="selectBox">
                <option value="dolar">Dolar</option>
                <option value="euro">Euro</option>
                </select>
            </div>
            <div class="formElem">
                <label for="datetime">Borç Alınma Tarihi:</label>
                <input type="datetime-local" id="datetime" />
            </div>
        </form>
    </div>
</template>
