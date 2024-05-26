<script setup>
import GameListHeader from "@/components/pages/HomePage/GameList/GameListHeader.vue";
</script>

<template>
  <main>
    <div class="main-body">
      <GameListHeader />
      <div class="container relative">
        <div class="game_background" />
        <div class="w-full p-[20px_20px_0px] flex">
          <div
            class="flex flex-col justify-start items-center w-full bg-white border border-white z-[10] rounded-[23px] p-[20px]"
          >
            <div>
              <p class="font-bold text-[22px]">₹0.00</p>
            </div>
            <div class="flex justify-center gap-[5px]">
              <img
                src="@/assets/gamelist/wallet.png"
                alt="Left Icon"
                class="w-[24px] h-[24px]"
              />
              Wallet balance
            </div>
            <div class="flex justify-between w-full pt-[20px] game_top">
              <button class="bg-blue text-white">Withdraw</button>
              <button class="text-blue">Deposit</button>
            </div>
          </div>
        </div>
        <div class="w-full flex z-[10]">
          <div
            class="flex justify-between items-center gap-[5px] w-full h-[40px] p-[0px_10px] bg-white overflow-hidden rounded-full"
          >
            <button class="p-[5px]">
              <img
                src="@/assets/gamelist/wallet.png"
                alt="Left Icon"
                class="w-[24px] h-[24px]"
              />
            </button>
            <p>
              Thank you for being a member of the GOA GAMES platform, we provide
              many industry-leading
              <!-- games. This is the world's leading gaming
              platform. Try our lottery games. While enjoying the best gaming
              experience, you can also join unlimited agents and earn money
              without leaving your home. -->
            </p>
            <button>
              <img
                src="@/assets/gamelist/wallet.png"
                alt="Left Icon"
                class="w-[24px] h-[24px]"
              />
              <p>Detail</p>
            </button>
          </div>
        </div>
        <div class="w-full flex z-[10] p-[0px_20px_0px]">
          <div class="w-full flex justify-center items-center p-[3px] bg-white rounded-[20px]">
            <div class="flex flex-col justify-center items-start p-[5px_20px]">
              <img
                src="@/assets/gamelist/time-1b645da4.png"
                alt="Left Icon"
                class="w-full aspect-w-1 aspect-h-1"
              />
              <p class="text-center text-[14px] leading-[100%]">
                Win Go <br />
                1Min
              </p>
            </div>
            <div class="flex flex-col justify-center items-start p-[5px_20px]">
              <img
                src="@/assets/gamelist/time-1b645da4.png"
                alt="Left Icon"
                class="w-full aspect-w-1 aspect-h-1"
              />
              <p class="text-center text-[14px] leading-[100%]">
                Win Go <br />
                3Min
              </p>
            </div>
            <div class="flex flex-col justify-center items-start p-[5px_20px]">
              <img
                src="@/assets/gamelist/time-1b645da4.png"
                alt="Left Icon"
                class="w-full aspect-w-1 aspect-h-1"
              />
              <p class="text-center text-[14px] leading-[100%]">
                Win Go <br />
                5Min
              </p>
            </div>
            <div class="flex flex-col justify-center items-start p-[5px_20px]">
              <img
                src="@/assets/gamelist/time-1b645da4.png"
                alt="Left Icon"
                class="w-full aspect-w-1 aspect-h-1"
              />
              <p class="text-center text-[14px] leading-[100%]">
                Win Go <br />
                10Min
              </p>
            </div>
          </div>
        </div>
        <div class="h-[400px]" />
      </div>
    </div>
  </main>
</template>

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
  min-height: 100vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
  overflow-y: auto;
  gap: 20px;
}

.game_background {
  width: 100%;
  height: 315px;
  background: #4784ff;
  border-radius: 0 0 1.53333rem 1.53333rem;
  position: absolute;
  top: 0;
  left: 0;
}

.game_top button {
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  border-width: 1px;
  border-color: #4784ff;
  border-radius: 30px;
  padding: 5px 40px;
}

@media (max-width: 480px) {
  .main-body {
    width: 100%;
  }
}

@media (max-width: 375px) {
  .container {
    margin-top: 40px;
    margin-bottom: 50px;
    overflow-y: auto;
  }
}
</style>
