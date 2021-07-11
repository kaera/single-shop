<template>
  <div class="item">
    <img class="image" src="../assets/iphone.png" />
    <div>{{ phone.manufacturer }}</div>
    <div class="phone-name">{{ phone.name }}</div>
  </div>
</template>

<script>
export default {
  name: "Phone",
  props: ["phone"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item {
  background: #fff;
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  padding: 16px;
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 1.5;
  color: #333;
}

.image {
  height: 240px;
  margin: auto;
  display: block;
  padding-bottom: 30px;
}

.phone-name {
  font-weight: bold;
}
</style>
