import { mount } from "@vue/test-utils";
import SelectedCurrencyBox from "@/components/SelectedCurrencyBox.vue";

const currency = "pln";

describe("SelectedCurrencyBox.vue", () => {
	it("renders currency text", () => {
		const wrapper = mount(SelectedCurrencyBox, {
			propsData: { currency },
		});

		expect(wrapper.text()).toMatch(currency);
	});

	it("click emits select event", async () => {
		const wrapper = mount(SelectedCurrencyBox, {
			propsData: { currency },
		});

		await wrapper.find(".selected-currency-box__remove").trigger("click");

		expect(wrapper.emitted().remove).toBeTruthy();
	});
});
