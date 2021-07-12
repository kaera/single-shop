<template>
  <footer>
    <div data-testid="footer-data" class="footer-elements-container">
      <div>Alle voorwaarden</div>

      <div>Missie en privacy statement</div>
      <div>Security</div>

      <div>Report Vulnerability</div>

      <div>Beveiligingslek melden</div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  background: #232323;
  margin: 0;
  height: 250px;
  width: 100%;
  color: white;
  font-family: "Helvetica Neue";
  font-size: 16px;
  text-align: center;
}

.footer-elements-container {
  margin-top: 30px;
  padding-top: 30px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 5px;
}

@media (min-width: 480px) {
  .footer-elements-container {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media (min-width: 960px) {
  .footer-elements-container {
    grid-template-columns: repeat(5, 1fr);
  }
}

@media (min-width: 1440px) {
  .footer-elements-container {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>
