<template>
    <div class="gameitem">
        <div class="titlediv"><span class="title">Platform recommendation</span></div>
        <div class="game-grid">
            <div v-for="(platform, index) in platforms" :key="index" class="game-box">
                <img :src="platform" alt="Game Image" class="game-image">
            </div>
        </div>
    </div>
    <div class="gameitem">
        <div class="titlediv"><span class="title">Popular</span></div>
        <div class="game-grid">
            <div v-for="(polular, index) in polulars" :key="index" class="game-box">
                <img :src="polular" alt="Game Image" class="game-image">
            </div>
        </div>
    </div>
</template>

<script setup>
import platform1 from '@/assets/platform1.png'
import platform2 from '@/assets/platform2.png'
import platform3 from '@/assets/platform3.png'
import platform4 from '@/assets/platform4.png'
import platform5 from '@/assets/platform5.png'
import platform6 from '@/assets/platform6.png'

const platforms = [platform1, platform2, platform3, platform4, platform5, platform6]

import polular1 from '@/assets/popular1.png'
import polular2 from '@/assets/popular2.png'
import polular3 from '@/assets/popular3.png'
import polular4 from '@/assets/popular4.png'
import polular5 from '@/assets/popular5.png'
import polular6 from '@/assets/popular6.png'
import polular7 from '@/assets/popular7.png'
import polular8 from '@/assets/popular8.png'
import polular9 from '@/assets/popular9.png'
import polular10 from '@/assets/popular10.png'
import polular11 from '@/assets/popular11.png'
import polular12 from '@/assets/popular12.png'
import polular13 from '@/assets/popular13.png'
import polular14 from '@/assets/popular14.png'
import polular15 from '@/assets/popular15.png'
import polular16 from '@/assets/popular16.png'
import polular17 from '@/assets/popular17.png'
import polular18 from '@/assets/popular18.png'

const polulars = [polular1, polular2, polular3, polular4, polular5, polular6, polular7, polular8, polular9, polular10, polular11, polular12, polular13, polular14, polular15, polular16, polular17, polular18]
</script>

<style scoped>
.gameitem {
    margin-top: 20px;
}

.title {
    font-size: 16px;
    font-weight: 700;
    margin-left: 5px;
}

.titlediv {
    border-left: 3px solid #FA5D5D;
    margin-left: 10px;
    height: 18px;
    display: flex;
    align-items: center;
}


.game-grid {
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
    justify-content: space-between;
}

.game-box {
    height: 120px;
    margin: 5px;
    background-image: url('@/assets/game_box.png');
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    display: flex;
    align-items: center;
    width: 116px;
}

.game-image {
    max-width: 100%;
    max-height: 100%;
    border-radius: 10px;
    padding: 5px;
    justify-content: center;
}

@media (max-width: 375px) {
    .game-box {
        height: 106px;
        margin: 5px;
        background-image: url('@/assets/game_box.png');
        background-size: cover;
        background-position: center;
        border-radius: 10px;
        display: flex;
        align-items: center;
        width: 106px;
    }
}
</style>