<template>
  <label class="currency-box" :class="isChecked">
    <span class="currency-box__checkbox-mark" />
    <input
      type="checkbox"
      name="vehicle1"
      value="currency"
      @input="$emit('select')"
    />
    {{ currency }}
  </label>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default Vue.extend({
  name: "CurrencyBox",
  props: {
    currency: String,
    isSelected: Boolean,
  },
  computed: {
    isChecked() {
      return this.isSelected ? "currency-box--selected" : "";
    },
  },
});
</script>

<style scoped lang="scss">
.currency-box {
  border: 1px solid #a3a3a3;
  padding: 2px 40px 2px 2px;
  text-transform: uppercase;
  background: #ececec;
  color: #104372;

  &:hover {
    background: #dcdcdc;
    cursor: pointer;
  }

  &--selected {
    background: #fff;
  }
}
</style>