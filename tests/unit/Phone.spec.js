import { mount } from "@vue/test-utils";
import Phone from "@/components/Phone.vue";
import { createTestStore } from "../test-helpers/store";

describe("Phone.vue", () => {
  it("renders Phone details", () => {
    const phone = { manufacturer: "Iphone", name: "Test name", has_5g: true };
    const wrapper = mount(
      Phone,
      { props: { phone: phone } },
      {
        global: {
          plugins: [createTestStore()],
        },
      }
    );
    expect(wrapper.html()).toContain("image");
    expect(wrapper.html()).toContain(phone.name);
    expect(wrapper.html()).toContain(phone.manufacturer);
  });
});
