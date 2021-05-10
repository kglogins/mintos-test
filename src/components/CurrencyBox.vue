<template>
  <label class="currency-box" :class="isChecked">
    <span class="currency-box__checkbox-mark">X</span>
    <input
      type="checkbox"
      name="checkbox"
      :checked="isSelected"
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
  padding: 2px;
  text-transform: uppercase;
  background: #ececec;
  color: #104372;
  position: relative;

  &:hover {
    background: #dcdcdc;
    cursor: pointer;
  }

  &--selected {
    background: #fff;
  }

  & input[type="checkbox"] {
    opacity: 0;
  }

  &__checkbox-mark {
    position: absolute;
    height: 16px;
    width: 16px;
    border-radius: 5px;
    border: 1px #a3a3a3 solid;
    left: 6px;
    top: 8px;

    color: transparent;
    line-height: 16px;
    font-size: 15px;
    font-weight: bold;
    text-align: center;
  }

  &--selected &__checkbox-mark {
    color: #ff1f1b;
  }
}
</style>
