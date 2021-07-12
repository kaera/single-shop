<template>
  <div class="filters">
    <div class="network">
      <select v-model="selectedNetwork" @change="onNetworkChange()">
        <option value="" selected>5G</option>
        <option
          v-for="(item, index) in networkFilter"
          v-bind:value="item.value"
          :key="index"
        >
          {{ item.label }} ({{ item.qty }})
        </option>
      </select>
    </div>
    <div class="brand">
      <select v-model="selectedBrand" @change="onBrandChange()">
        <option value="" selected>Brand</option>

        <option
          v-for="(item, index) in brandFilter"
          v-bind:value="item.label"
          :key="index"
        >
          {{ item.label }} ({{ item.qty }})
        </option>
      </select>
    </div>
    <div class="clearFilters" v-if="selectedNetwork !== '' || selectedBrand">
      <button @click="onClick()">Clear Filters</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterPanel",

  computed: {
    networkFilter() {
      return this.$store.getters.networkFilter;
    },
    brandFilter() {
      return this.$store.getters.brandFilter;
    },
  },
  data() {
    return {
      selectedNetwork: "",
      selectedBrand: "",
    };
  },

  methods: {
    onNetworkChange() {
      this.$store.dispatch("setNetworkFilter", this.selectedNetwork);
      this.$store.dispatch("filterByNetwork");
    },
    onBrandChange() {
      this.$store.dispatch("setBrandFilter", this.selectedBrand);
      this.$store.dispatch("filterByBrand");
    },
    onClick() {
      this.selectedNetwork = "";
      this.selectedBrand = "";
      this.$store.dispatch("resetFilters");
    },
  },
};
</script>

<style scoped>
.filters {
  grid-template-columns: repeat(3, 170px);
  height: 80px;
  margin: 100px 15px 10px;
  box-shadow: 0 2px 5px 1px rgb(64 60 67 / 16%);
  border-radius: 16px;
  background: white;
  display: grid;
}

.network,
.brand,
.clearFilters {
  align-self: center;
}
.network,
.brand,
.clearFilters {
  margin-left: 20px;
}

select {
  width: 140px;
  padding: 10px;
}

button {
  border: none;
  background: transparent;
  color: #09f;
  text-decoration: underline;
  font-family: "Helvetica Neue";
  font-size: 16px;
}
button:hover {
  cursor: pointer;
}

@media only screen and (min-width: 360px) and (max-width: 500px) {
  .filters {
    grid-template-columns: repeat(1, 170px);
    height: 170px;
  }
  .network,
  .brand,
  .clearFilters {
    margin-left: 20px;
  }
}
</style>
