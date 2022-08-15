<script setup>
import Footer from "./components/Footer.vue";
import NavBar from "./components/NavBar.vue";
</script>

<template>
    <NavBar />
    <router-view v-slot="{Component}">
        <transition mode="out-in">
            <component :is="Component"></component>
        </transition>
    </router-view>
    <Footer />
</template>

<style >
@font-face {
    font-family: "Oxygen";
    src: local("Oxygen"),
        url(./fonts/Oxygen/Oxygen-Regular.ttf) format("truetype");
}

.v-leave-to,
 .v-enter-from {
     opacity: 0;
     transform: translateY(100px);
     transform: scale(0.7);
 }

.v-leave-from,
.v-enter-to {
    opacity: 1;
    transform: translateY(0);
    transform: scale(1);
}

 .v-enter-active,
 .v-leave-active {
     transition: all 0.5s ease;
 }

</style>
