<script setup>
  import Header from '@/components/Header.vue';
</script>

<template>
  <main>
    <div class="main-body">
      <Header />
      wall</div>
  </main>
</template>

<script>
export default {
  name: "PageName", // Replace PageName with the appropriate page name
};
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.main-body {
  background-color: #f7f8ff;
  width: 400px;
  height: 100vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

@media (max-width: 480px) {
  .main-body {
    width: 100%;
  }
}
</style>
