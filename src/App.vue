<template>
  <div id="app">
    <CurrencySelector :currencies="currencies" />
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import CurrencySelector from "./components/CurrencySelector.vue";

const currencies: string[] = [
  "eur",
  "pln",
  "gel",
  "dkk",
  "czk",
  "gbp",
  "sek",
  "usd",
  "rub",
];

export default Vue.extend({
  name: "App",
  components: {
    CurrencySelector,
  },
  data: () => ({
    currencies,
  }),
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
</style>
