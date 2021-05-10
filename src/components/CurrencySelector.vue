<template>
  <div class="currency-selector">
    <div class="currency-selector__selected"></div>
    <div class="currency-selector__list">
      <div v-for="currency in currencies" :key="currency">
        {{ currency }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Vue } from "vue-property-decorator";

export default Vue.extend({
  name: "CurrencySelector",
  props: {
    currencies: Array as PropType<Array<string>>,
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
}
</style>
