<template>
  <FilterPanel />
  <div class="grid-main-container">
    <div v-for="phone in phones" :key="phone.id">
      <Phone :phone="phone" />
    </div>
  </div>
</template>

<script>
import Phone from "./Phone";
import FilterPanel from "./FilterPanel";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  name: "PhoneFeed",
  components: {
    Phone,
    FilterPanel,
  },

  setup() {
    const store = useStore();
    const phones = computed(() => store.state.phoneList);
    onMounted(() => store.dispatch("getPhoneList"));

    return {
      phones,
    };
  },
};
</script>

<style scoped>
.grid-main-container {
  display: grid;
  margin: 0 15px;
  margin-bottom: 10px;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  height: 100%;
}
@media only screen and (min-width: 360px) and (max-width: 500px) {
  .grid-main-container {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media (min-width: 800px) {
  .grid-main-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 960px) {
  .grid-main-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1440px) {
  .grid-main-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
