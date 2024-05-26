<script setup>
import Header from '../components/Header.vue'
import Carousel from '../components/Carousel.vue'
import Notificationbar from '../components/Notificationbar.vue'
import Popular from '../components/Popular.vue'
import Newinfo from '../components/Newinfo.vue'
</script>

<template>
    <main>
        <div class="main-body">
            <Header />
            <div class="container">
                <Carousel/>
                <div>
                    <Notificationbar/>
                    <div class="menu_box1">
                        <div class="menu_box1_item item1">
                            <div class="image-containera">
                                <img src="@/assets/menu_box1_11.png" alt="Detail Icon" class="menubox1" />
                                <span class="label">Popular</span>
                            </div>
                        </div>
                        <div class="menu_box1_item item2">
                            <div class="image-container">
                                <img src="@/assets/menu_box1_22.png" alt="Detail Icon" class="menubox11" />
                                <span class="labela">Lottery</span>
                            </div>
                        </div>
                        <div class="menu_box1_item item3">
                            <div class="image-container">
                                <img src="@/assets/menu_box1_33.png" alt="Detail Icon" class="menubox111" />
                                <span class="labelb">Slots</span>
                            </div>
                        </div>
                    </div>

                    <div class="menu_box2">
                        <div class="menu_box2_item item1">
                            <div class="image-container">
                                <img src="@/assets/menu_box2_11.png" alt="Detail Icon" class="menubox2" />
                                <span class="labela">Sports</span>
                            </div>
                        </div>
                        <div class="menu_box2_item item2">
                            <div class="image-container">
                                <img src="@/assets/menu_box2_22.png" alt="Detail Icon" class="menubox22" />
                                <span class="labela">Casino</span>
                            </div>
                        </div>
                        <div class="menu_box2_item item3">
                            <div class="image-container">
                                <img src="@/assets/menu_box2_33.png" alt="Detail Icon" class="menubox222" />
                                <span class="labela">Rummy</span>
                            </div>
                        </div>
                    </div>

                    <div class="menu_box3">
                        <div class="menu_box3_item item1">
                            <div class="image-containerb">
                                <img src="@/assets/menu_box3_11.png" alt="Detail Icon" class="menubox3" />
                                <span class="labelbb">Fishing</span>
                            </div>
                        </div>
                        <div class="menu_box3_item item2">
                            <div class="image-containerb">
                                <img src="@/assets/menu_box3_22.png" alt="Detail Icon" class="menubox33" />
                                <span class="labelbb">Fishing</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Popular/>
                <Newinfo/>
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
    background-color: #F7F8FF;
    width: 400px;
    min-height: 100vh;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.container {
    margin-top: 50px;
    margin-bottom: 50px;
    overflow-y: auto;
}


.image-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: -14px;
}

.image-containerb {
    position: relative;
    display: flex;
    align-items: center;
}

.image-containerb .labelbb {
    font-weight: 700;
    color: #fff;
    padding: 5px;
    border-radius: 3px;
    font-size: 15px;
    text-align: center;
    width: 100%;
    margin-left: 20px;
    margin-top: 20px;
}


.image-containera {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 8px;
}

.image-containera .label {
    font-weight: 700;
    color: #fff;
    padding: 5px;
    border-radius: 3px;
    font-size: 15px;
    text-align: center;
    width: 100%;
}

.image-container .label {
    font-weight: 700;
    color: #fff;
    padding: 5px;
    border-radius: 3px;
    font-size: 15px;
    text-align: center;
    width: 100%;
}

.image-container .labela {
    font-weight: 700;
    color: #fff;
    padding: 5px;
    border-radius: 3px;
    font-size: 15px;
    text-align: center;
    width: 100%;
    margin-bottom: 20px;
}

.image-container .labelb {
    font-weight: 700;
    color: #fff;
    padding: 5px;
    border-radius: 3px;
    font-size: 15px;
    text-align: center;
    width: 100%;
    margin-bottom: 20px;
}

.menu_box1 {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    height: 110px;
}

.menu_box1_item {
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.menu_box1_item.item1 {
    width: 35%;
    background-image: url('@/assets/menu_box1_1.png');
    margin-left: 10px;

}

.menu_box1_item.item2 {
    width: 27%;
    background-image: url('@/assets/menu_box1_2.png');
}

.menu_box1_item.item3 {
    width: 27%;
    background-image: url('@/assets/menu_box1_3.png');
    margin-right: 10px;
}

.menubox1 {
    width: 105px;

}

.menubox11 {
    width: 90px;
}

.menubox111 {
    width: 90px;
}

.menubox2 {
    width: 65px;
    margin-top: 10px;
}

.menubox22 {
    width: 65px;
    margin-top: 10px;
}

.menubox222 {
    width: 65px;
    margin-top: 10px;
}

.menubox3 {
    width: 70px;
    margin-left: 10px;
}

.menubox33 {
    width: 70px;
    margin-left: 10px;
}

.menu_box2 {
    display: flex;
    margin-top: 15px;
    height: 90px;
    background-image: url('@/assets/menu_box2_1.png');
    border-radius: 10px;
    margin-left: 10px;
    margin-right: 10px;
}

.menu_box2_item {
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
}

.menu_box2_item.item1 {
    width: 33%;
    border-right: 1px solid #fdb7a4;
    display: flex;
    justify-content: center;
    align-items: center;
}

.menu_box2_item.item2 {
    width: 33%;
    border-right: 1px solid #fdb7a4;
}

.menu_box2_item.item3 {
    width: 33%;
}

.menu_box3 {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    height: 75px;
    border-radius: 10px;
    margin-left: 10px;
    margin-right: 10px;
}

.menu_box3_item {
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    display: flex;
    align-items: center;
}

.menu_box3_item.item1 {
    width: 47%;
    background-image: url('@/assets/menu_box3_1.png');
}

.menu_box3_item.item2 {
    width: 47%;
    background-image: url('@/assets/menu_box3_2.png');
}

@media (max-width: 480px) {
    .main-body {
        width: 100%;
    }
}

@media (max-width: 320px) {
    .menu_box1_item {
        height: 95px;
        background-size: cover;
        background-position: center;
    }

    .menu_box1 {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        height: 95px;
    }
}

@media (max-width: 375px) {
    .container {
        margin-top: 40px;
        margin-bottom: 50px;
        overflow-y: auto;
    }

    .menubox1 {
        width: 95px;
    }

    .menubox11 {
        width: 85px;
    }

    .menubox111 {
        width: 85px;
    }

    .menubox2 {
        width: 60px;
        margin-bottom: 10px;
    }

    .menubox22 {
        width: 60px;
        margin-bottom: 10px;
    }

    .menubox222 {
        width: 60px;
        margin-bottom: 10px;
    }

    .menubox3 {
        width: 60px;
        margin-left: 10px;
    }

    .menubox33 {
        width: 60px;
        margin-left: 10px;
    }

    .image-container .labela {
        font-weight: 700;
        color: #fff;
        padding: 5px;
        border-radius: 3px;
        font-size: 15px;
        text-align: center;
        width: 100%;
        margin-top: -10px;
    }

    .image-container .labelb {
        font-weight: 700;
        color: #fff;
        padding: 5px;
        border-radius: 3px;
        font-size: 15px;
        text-align: center;
        width: 100%;
        margin-top: -6px;
    }

    .image-container {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: -15px;
    }
}
</style>
