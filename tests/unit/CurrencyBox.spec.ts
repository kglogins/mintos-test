import { mount } from "@vue/test-utils";
import CurrencyBox from "@/components/CurrencyBox.vue";

const currency = "pln";

describe("CurrencyBox.vue", () => {
	it("renders CurrencyBox.vue", () => {
		const wrapper = mount(CurrencyBox, {
			propsData: { currency },
		});

		expect(wrapper.text()).toMatch(currency);
	});

	it("click emits select event", async () => {
		const wrapper = mount(CurrencyBox, {
			propsData: { currency },
		});

		await wrapper.find(".currency-box").trigger("click");

		expect(wrapper.emitted().select).toBeTruthy();
	});

	it("renders CurrencyBox.vue with selected class when props.selected is passed", () => {
		const wrapper = mount(CurrencyBox, {
			propsData: {
				currency,
				isSelected: true,
			}
		});

		expect(wrapper.find(".currency-box--selected")).toBeTruthy();
	})
});
