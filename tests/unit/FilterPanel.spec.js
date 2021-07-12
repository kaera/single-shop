import { mount } from "@vue/test-utils";
import FilterPanel from "@/components/FilterPanel.vue";
import { createTestStore } from "../test-helpers/store";

describe("FilterPanel.vue", () => {
  it("renders FilterPanel", () => {
    const wrapper = mount(FilterPanel, {
      global: {
        plugins: [createTestStore()],
      },
    });
    expect(wrapper.html()).toContain("network");
    expect(wrapper.html()).toContain("brand");
  });
  it("displays Network placeholder and selected option onClick ", () => {
    const networkFilter = () => [{ label: "Yes", value: true, qty: 1 }];
    const wrapper = mount(FilterPanel, {
      global: {
        plugins: [createTestStore({ getters: { networkFilter } })],
      },
    });
    expect(wrapper.html()).toContain("5G");
    wrapper.find("select").trigger("click");
    expect(wrapper.findAll("select")[0].text()).toContain("Yes (1)");
  });
  it("displays Brand placeholder and selected option onClick ", () => {
    const brandFilter = () => [{ label: "Apple", qty: 1 }];
    const wrapper = mount(FilterPanel, {
      global: {
        plugins: [createTestStore({ getters: { brandFilter } })],
      },
    });
    expect(wrapper.html()).toContain("Brand");
    wrapper.find("select").trigger("click");
    expect(wrapper.findAll("select")[1].text()).toContain("Apple (1)");
  });
});
