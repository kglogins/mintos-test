<template>
  <div class="currency-selector">
    <div class="currency-selector__selected">
      <SelectedCurrencyBox
        v-for="selectedCurrency in selectedCurrencies"
        :key="selectedCurrency"
        :currency="selectedCurrency"
        @remove="selectCurrency(selectedCurrency)"
      />
    </div>
    <div class="currency-selector__list">
      <CurrencyBox
        v-for="currency in currencies"
        :key="currency"
        :currency="currency"
        :isSelected="isSelectedCurrency(currency)"
        @select="selectCurrency(currency)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Vue } from "vue-property-decorator";
import CurrencyBox from "./CurrencyBox.vue";
import SelectedCurrencyBox from "./SelectedCurrencyBox.vue";

const selectedCurrencies: string[] = [];

export default Vue.extend({
  name: "CurrencySelector",
  components: {
    CurrencyBox,
    SelectedCurrencyBox,
  },
  props: {
    currencies: Array as PropType<Array<string>>,
  },
  data: () => ({
    selectedCurrencies,
  }),
  methods: {
    isSelectedCurrency(currency: string): boolean {
      return this.selectedCurrencies.includes(currency);
    },
    selectCurrency(currency: string): void {
      const index = this.selectedCurrencies.indexOf(currency);

      if (index > -1) {
        this.selectedCurrencies.splice(index, 1);
      } else {
        this.selectedCurrencies.push(currency);
      }
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.currency-selector {
  border: 1px rgba(0, 0, 0, 0.4) solid;
  border-radius: 5px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.15);
  max-width: 450px;
  width: 100%;
  padding: 20px 15px 15px 15px;

  &__selected {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px 15px;
    margin-bottom: 35px;
  }

  &__list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px 10px;
  }

  @media screen and (min-width: 400px) {
    &__list {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>
