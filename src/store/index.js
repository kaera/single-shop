import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    initialPhoneList: [],
    phoneList: [],
  },

  mutations: {
    ["SET_INITIAL_PHONE_LIST"](state, data) {
      state.initialPhoneList = data;
    },
    ["SET_PHONE_LIST"](state) {
      state.phoneList = state.initialPhoneList;
    },
  },
  actions: {
    getPhoneList({ commit }) {
      axios.get("http://localhost:8080/products").then((response) => {
        commit("SET_INITIAL_PHONE_LIST", response.data.products);
        commit("SET_PHONE_LIST");
      });
    },
  },
});
