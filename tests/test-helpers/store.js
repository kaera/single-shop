import { createStore } from "vuex";

export function createTestStore(params) {
  return createStore({
    state() {
      return {
        phoneList: params?.phoneList || [],
      };
    },
    getters: params?.getters || {
      networkFilter: () => {},
      brandFilter: () => {},
    },
    actions: params?.actions || {
      getPhoneList: () => {
        return [{ manufacturer: "Apple", model: "Test model", has_5g: true }];
      },
    },
  });
}
