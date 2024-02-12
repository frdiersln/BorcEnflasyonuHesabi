<script setup lang="ts">
defineProps<{
  header: string
}>()
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="/favicon.ico" width="256" height="256" />

    <div class="wrapper">
      <div class="greetings">
        <h1 class="green">{{ header }}</h1>
      </div>
      <nav>
        <RouterLink :to="{ name: 'enflasyonBazliHesap' }">Enflasyon Bazlı Hesap</RouterLink>
        <RouterLink :to="{ name: 'DolarBazliHesap' }">Dolar Bazlı Hesap</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.4;
  height: fit-content;
  margin-bottom: 1.4rem;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  display:flex;
  justify-content: center;
  font-size: 12px;
  text-align: center;
  flex-wrap: nowrap;
}

nav a.router-link-exact-active {
  color: var(--color-text);
  border-left: 3px solid var(--color-border);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  margin-top: 0.5rem;
  font-size: 1.4rem;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  header {
    display: flex;
    place-items: center;
    margin: auto;
    width: 80%;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    justify-content: flex-start;
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    flex-wrap: wrap;
    padding: 1rem 0;
  }

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
