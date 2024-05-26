<script setup>

</script>

<template>
  <div class="navbar">
    <img src="https://ossimg.goa999.vip//GoaGame/other/h5setting_20231005151012qocp.png" alt="Left Icon"
      class="navbar-left-icon" />
    <div class="flex">
      <img src="@/assets/mail.svg" alt="Left Icon" class="navbar-right-icon-mess" />
      <img src="@/assets/download.svg" alt="Left Icon" class="navbar-right-icon-down" />
    </div>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: #4781FF;
  padding: 0 10px;
  position: fixed;
  width: 400px;
  z-index: 1;
}

.navbar-left-icon {
  height: 40px;
}

.navbar-right-icon-mess {
  height: 22px;
}

.navbar-right-icon-down {
  height: 18px;
  margin-left: 15px;
  margin-right: 10px;
  margin-bottom: 3px;
}
@media (max-width: 480px) {
  .navbar{
      width: 100%;
  }
}

@media (max-width: 375px) {
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    background-color: #4781FF;
    padding: 0 10px;
    position: fixed;
    width: 400px;
    z-index: 1;
    width: 100%;
  }

  .navbar-right-icon-mess {
    height: 18px;
  }
  
  .navbar-right-icon-down {
    height: 16px;
    margin-left: 15px;
    margin-right: 10px;
    margin-bottom: 2px;
  }

  .navbar-left-icon {
    height: 35px;
  }
}
</style>
