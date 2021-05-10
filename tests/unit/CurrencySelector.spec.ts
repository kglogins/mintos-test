import { mount } from "@vue/test-utils";
import CurrencySelector from "@/components/CurrencySelector.vue";

const currencies: string[] = ["pln", "eur"];

describe("CurrencySelector.vue", () => {
  it("renders CurrencyBox.vue", () => {
    const wrapper = mount(CurrencySelector, {
      propsData: { currencies },
    });

    expect(wrapper.find('.currency-box')).toBeTruthy();
  });

  it("have no selected currency at the beginning", () => {
    const wrapper = mount(CurrencySelector, {
      propsData: { currencies }
    })

    expect(wrapper.findAll(".currency-box-selected").length).toEqual(0);
  });

  it("selecting CurrencyBox.vue will select an currency", async () => {
    const wrapper = mount(CurrencySelector, {
      propsData: { currencies },
    });

    await wrapper.find(".currency-box").trigger("click");

    expect(wrapper.findAll(".currency-box--selected").length).toEqual(1);
  });

  it("clicking on CurrencyBox.vue will deselect the currency", async () => {
    const wrapper = mount(CurrencySelector, {
      propsData: { currencies },
    });

    wrapper.setData({ selectedCurrencies: ["pln"] })

    await wrapper.find(".currency-box--selected").trigger("click");

    expect(wrapper.findAll(".currency-box--selected").length).toEqual(0);
  });
});
