<template>
  <div class="selected-currency-box">
    <span class="selected-currency-box__remove" @click="$emit('remove')"
      >X
    </span>
    {{ currency }}
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default Vue.extend({
  name: "SelectedCurrencyBox",
  props: {
    currency: String,
  },
});
</script>

<style scoped lang="scss">
.selected-currency-box {
  background: #e5e5e5;
  border-radius: 2px;
  padding: 5px 0px;
  text-transform: uppercase;
  position: relative;
  text-align: center;

  &__remove {
    position: absolute;
    border-radius: 50%;
    border: 2px #fff solid;
    height: 16px;
    width: 16px;
    background: #000;
    color: #fff;
    font-size: 12px;
    line-height: 16px;
    right: -8px;
    top: -8px;
    font-weight: bold;
  }

  &__remove:hover {
    color: #000;
    background: #fff;
    border-color: #000;
    cursor: pointer;
  }
}
</style>