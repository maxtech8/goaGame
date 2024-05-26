<template>
    <Carousel :autoplay="5000" :wrap-around="true">
        <Slide v-for="(image, index) in images" :key="index">
            <img :src="image" alt="Carousel Image" class="carousel-image">
        </Slide>
    </Carousel>
</template>

<script setup>
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

import image1 from '@/assets/carousel1.png'
import image2 from '@/assets/carousel2.png'
import image3 from '@/assets/carousel3.png'
import image4 from '@/assets/carousel4.png'
import image5 from '@/assets/carousel5.png'
import image6 from '@/assets/carousel6.png'

const images = [image1, image2, image3, image4, image5, image6]
</script>

<style scoped>
.carousel-image {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    padding: 5px 10px;
}
</style>