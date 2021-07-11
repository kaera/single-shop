import { mount } from "@vue/test-utils";
import PhoneFeed from "@/components/PhoneFeed.vue";
import { createTestStore } from "../test-helpers/store";
describe("PhoneFeed.vue", () => {
  it("renders phone component", () => {
    const wrapper = mount(PhoneFeed, {
      global: {
        plugins: [createTestStore()],
      },
    });
    expect(wrapper.html()).toContain("grid-main-container");
  });
});
