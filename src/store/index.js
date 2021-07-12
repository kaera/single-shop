import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    initialPhoneList: [],
    phoneList: [],
    selectedNetwork: "",
    selectedBrand: "",
  },
  getters: {
    networkFilter: (state) => {
      const result = [];
      const phones = state.selectedBrand
        ? state.initialPhoneList.filter(
            (phone) => phone.manufacturer === state.selectedBrand
          )
        : state.initialPhoneList;
      phones.reduce((res, value) => {
        if (!res[value.has_5g]) {
          res[value.has_5g] = {
            label: value.has_5g ? "Yes" : "No",
            value: value.has_5g,
            qty: 0,
          };
          result.push(res[value.has_5g]);
        }
        res[value.has_5g].qty += 1;
        return res;
      }, {});
      return result;
    },
    brandFilter: (state) => {
      const result = [];
      const phones =
        state.selectedNetwork !== ""
          ? state.initialPhoneList.filter(
              (phone) => phone.has_5g === state.selectedNetwork
            )
          : state.initialPhoneList;
      phones.reduce((res, value) => {
        if (!res[value.manufacturer]) {
          res[value.manufacturer] = { label: value.manufacturer, qty: 0 };
          result.push(res[value.manufacturer]);
        }
        res[value.manufacturer].qty += 1;
        return res;
      }, {});

      return result;
    },
  },
  mutations: {
    ["SET_INITIAL_PHONE_LIST"](state, data) {
      state.initialPhoneList = data;
    },
    ["SET_PHONE_LIST"](state) {
      state.phoneList = state.initialPhoneList;
    },
    ["FILTER_BY_NETWORK"](state) {
      const res =
        state.selectedNetwork !== ""
          ? state.initialPhoneList.filter(
              (phone) => phone.has_5g === state.selectedNetwork
            )
          : state.initialPhoneList;
      state.phoneList = state.selectedBrand
        ? res.filter((phone) => phone.manufacturer === state.selectedBrand)
        : res;
    },
    ["FILTER_BY_BRAND"](state) {
      const res = state.selectedBrand
        ? state.initialPhoneList.filter(
            (phone) => phone.manufacturer === state.selectedBrand
          )
        : state.initialPhoneList;
      state.phoneList =
        state.selectedNetwork !== ""
          ? res.filter((phone) => phone.has_5g === state.selectedNetwork)
          : res;
    },
    ["RESET_FILTERS"](state) {
      state.phoneList = state.initialPhoneList;
    },
    ["SET_NETWORK_FILTER"](state, filter) {
      state.selectedNetwork = filter;
    },
    ["SET_BRAND_FILTER"](state, filter) {
      state.selectedBrand = filter;
    },
  },
  actions: {
    getPhoneList({ commit }) {
      axios.get("http://localhost:8080/products").then((response) => {
        commit("SET_INITIAL_PHONE_LIST", response.data.products);
        commit("SET_PHONE_LIST");
      });
    },
    filterByNetwork({ commit }) {
      commit("FILTER_BY_NETWORK");
    },
    filterByBrand({ commit }) {
      commit("FILTER_BY_BRAND");
    },
    resetFilters({ commit }) {
      commit("RESET_FILTERS");
    },
    setNetworkFilter({ commit }, filter) {
      commit("SET_NETWORK_FILTER", filter);
    },
    setBrandFilter({ commit }, filter) {
      commit("SET_BRAND_FILTER", filter);
    },
  },
});
