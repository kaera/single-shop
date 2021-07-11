<template>
  <div class="grid-main-container">
    <div v-for="phone in phones" :key="phone.id">
      <Phone :phone="phone" />
    </div>
  </div>
</template>

<script>
import Phone from "./Phone";
import { mapState } from "vuex";

export default {
  name: "PhoneFeed",
  components: {
    Phone,
  },

  computed: mapState({
    phones: (state) => state.phoneList,
  }),
  mounted() {
    this.$store.dispatch("getPhoneList");
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
