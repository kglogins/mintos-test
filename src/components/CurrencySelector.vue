<template>
  <div class="currency-selector">
    <div class="currency-selector__selected">
      {{ selectedCurrencies }}
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

const selectedCurrencies: string[] = [];

export default Vue.extend({
  name: "CurrencySelector",
  components: {
    CurrencyBox,
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
      const index = this.selectedCurrencies.indexOf(currency, 0);

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
  max-width: 800px;
  padding: 15px;

  &__list {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 10px 5px;
  }
}
</style>
