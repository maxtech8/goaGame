<template>
    <div class="gameitem">
        <div class="titlediv"><span class="title">Winning information</span></div>
        <div class="row" v-for="(platform, index) in platforms" :key="index">
            <img :src="platform.left.src" :alt="platform.left.name" class="left-image">
            <div class="left-image-text">{{ platform.left.name }}</div>
            <div class="content"></div>
            <img :src="platform.right.src" :alt="platform.right.name" class="right-image">
            <div class="right-image-text">
                <span class="right-image-name">{{ platform.right.name }}</span>
                <span class="right-image-description">{{ platform.right.description }}</span>
            </div>
        </div>
    </div>
    <div class="gameitem">
        <div class="titlediv"><span class="title">Today's earning chart</span></div>
        <div class="winner">
            <div class="winner-item1">
                <img src="@/assets/king2.png" alt="Second Image" class="noimagea">
                <img :src=winner2 alt="Mem***NWK" class="winner-image">
                <img src="@/assets/no2.png" alt="Second Image" class="noimage">
                <div class="winner-name">Mem***NWK</div>
                <div class="winner-description">₹564,978,605.87</div>
            </div>
            <div class="winner-item2">
                <img src="@/assets/king1.png" alt="Second Image" class="noimagea">
                <img :src=winner1 alt="Mem***NWK" class="winner-image">
                <img src="@/assets/no1.png" alt="Second Image" class="noimage">
                <div class="winner-name">Mem***TZA</div>
                <div class="winner-description">₹705,529,440.00</div>
            </div>
            <div class="winner-item3">
                <img src="@/assets/king3.png" alt="Second Image" class="noimagea">
                <img :src=winner3 alt="Mem***NWK" class="winner-image">
                <img src="@/assets/no3.png" alt="Second Image" class="noimage">
                <div class="winner-name">Mem***OQE</div>
                <div class="winner-description">₹493,620,120.00</div>
            </div>   
            <img src="@/assets/winner.png" class="tabbar" />
        </div>
        <div style="margin-top: 20px">
            <div class="row" v-for="(today, index) in todays" :key="index">
                <div class="left-image-no">{{ today.left.no }}</div>
                <img :src="today.left.src" :alt="today.left.name" class="left-image">
                <div class="left-image-text">{{ today.left.name }}</div>
                <div class="content"></div>
                <div class="right-image-text">
                    <span class="right-image-earning">{{ today.right.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import winleft1 from '@/assets/winleft1.png'
import winleft2 from '@/assets/winleft2.png'
import winleft3 from '@/assets/winleft3.png'
import winleft4 from '@/assets/winleft4.png'
import winleft5 from '@/assets/winleft5.png'
import winright1 from '@/assets/winright1.png'
import winright2 from '@/assets/winright2.png'
import winner1 from '@/assets/winner1.png'
import winner2 from '@/assets/winner2.png'
import winner3 from '@/assets/winner3.png'

const platforms = [
    {
        left: { src: winleft1, name: 'Mem***WSR' },
        right: { src: winright1, name: 'Receive ₹40.67', description: 'Winning amount' }
    },
    {
        left: { src: winleft2, name: 'Mem***PMO' },
        right: { src: winright2, name: 'Receive ₹18.82', description: 'Winning amount' }
    },
    {
        left: { src: winleft3, name: 'Mem***ELO' },
        right: { src: winright2, name: 'Receive ₹34.80', description: 'Winning amount' }
    },
    {
        left: { src: winleft4, name: 'Mem***QXE' },
        right: { src: winright1, name: 'Receive ₹212.54', description: 'Winning amount' }
    },
    {
        left: { src: winleft5, name: 'Mem***FPW' },
        right: { src: winright2, name: 'Receive ₹103.49', description: 'Winning amount' }
    },
]


const todays = [
    {
        left: { src: winleft3, no: '4', name: 'Mem***FKE' },
        right: { name: '₹484,162,833.84' }
    },
    {
        left: { src: winleft5, no: '5', name: 'Mem***JDS' },
        right: { name: '₹464,254,707.14' }
    },
]
</script>

<style scoped>
.noimage {
    width: 65px;
    height: 11%;
    position: absolute;
    margin-top: 50px;
}
.noimagea {
    width: 45px;
    height: 45px;
    position: absolute;
    margin-top: -20px;
    margin-right: 35px;
}

.winnerface {
    background-image: url('/assets/winner1.png');
    border-radius: 20px;
    width: 200px; /* Adjust width as needed */
    height: 200px; /* Adjust height as needed */
    position: relative;
}

.winnerface img {
    position: absolute;
    width: 100px; /* Adjust width of images */
    height: 100px; /* Adjust height of images */
}

/* Position the images as desired */
.winnerface img:first-child {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.winnerface img:last-child {
    bottom: 0;
    right: 0;
}

.winner {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    position: relative;
}

.winner-item1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    z-index: 2;
    margin-top: 30px;
    margin-left: 10px;
    position: relative;
}

.winner-item2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    z-index: 2;
    margin-top: 10px;
}

.winner-item3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    z-index: 2;
    margin-top: 30px;
    margin-right: 10px;
}


.winner-image {
    width: 60px;
    height: 60px;
    border-radius: 40px;
    object-fit: cover;
    margin-bottom: 20px;
}

.winner-name {
    font-weight: 500;
    margin-bottom: 2px;
    color: #4781ff;
    font-size: 12px;
}

.winner-description {
    font-weight: bold;
    color: white;
    background: linear-gradient(90deg, #4ca6ff 1.9%, #57d1f9 98.57%);
    display: block;
    font-size: 10px;
    border-radius: 20px;
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
}

.winner .tabbar {
    height: 100px;
    width: 100%;
    position: absolute;
    margin-top: 70px;
}

.gameitem {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
}

.title {
    font-size: 16px;
    font-weight: 700;
    margin-left: 5px;
}

.titlediv {
    border-left: 3px solid #4781ff;
    margin-left: 10px;
    height: 18px;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}

.row {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    border-radius: 10px;
    padding: 16px;
    background-color: #ffffff;
    box-shadow: 0 .05333rem .21333rem #d0d0ed5c;
    position: relative;
}

.left-image {
    width: 50px;
    height: 50px;
    border-radius: 30px;
    object-fit: cover;
}

.left-image-text {
    margin-left: 10px;
    font-size: 12px;
    font-weight: 500;
}

.left-image-no {
    margin-left: 5px;
    margin-right: 15px;
    font-size: 15px;
    font-weight: bold;
    color: gray;
}

.right-image {
    width: 80px;
    height: 50px;
    border-radius: 10px;
    object-fit: cover;
    margin-left: 10px;
    margin-right: 10px;
}

.right-image-text {
    text-align: right;
    margin-right: 10px;
}

.right-image-name {
    font-weight: bold;
    display: block;
    font-size: 12px;
}

.right-image-earning {
    font-weight: bold;
    color: white;
    background: linear-gradient(90deg, #4ca6ff 1.9%, #57d1f9 98.57%);
    display: block;
    font-size: 14px;
    border-radius: 20px;
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
}

.right-image-description {
    color: gray;
    font-weight: bold;
    font-size: 10px;
    display: block;
}

.content {
    flex-grow: 1;
    margin: 0 10px;
    /* Add additional styling for the content if needed */
}

@media (max-width: 375px) {
    .left-image-text {
        margin-left: 10px;
        font-size: 9px;
        font-weight: 500;
    }

    .right-image-name {
        font-weight: bold;
        display: block;
        font-size: 11px;
    }
}
</style>