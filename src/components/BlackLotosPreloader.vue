<template>
    <div v-if="!isAnimationEnded" id="black-lotos-preloader-container" class="container-preloader">
        <div class="preloader">
            <div>
                <div class="designed-by">Designed by</div>
                <div id="black-lotos-preloader" class="black-lotos">Black Lotos</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useAnimation } from '../composables/use_animation';

const { isAnimationEnded, endAnimation } = useAnimation();



onMounted(() => {
    const blackLotosPreloader = document.getElementById('black-lotos-preloader-container');
    blackLotosPreloader.addEventListener('animationend', event => {
        console.log(event);
        endAnimation();
    });
});
</script>

<style scoped>
@keyframes loader {
    0% {
        opacity: 0;
    }

    30%, 70% {
        opacity: 0.8;
    }

    100% {
        opacity: 0;
    }
}

@keyframes loader-background {
    0%, 30%, 70% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

@keyframes loader-out {
    0%{
        opacity: 0.8;
    }

    100%{
        opacity: 0;
    }
}


.container-preloader {
    --animation-duration: 3s;
    --letter-animation-delay: 1s;
    --letter-animation-duration: calc(var(--animation-duration) - var(--letter-animation-delay));

    --letter-animation: loader-out var(--letter-animation-duration) var(--letter-animation-delay) cubic-bezier(.73, .86, .20, 1);
    
    height: 100%;
    background-color: var(--color-bg);
    width: 100%;
    position: fixed;
    z-index: 100501;
    top: 0;
    animation-name: loader-background;
    animation-duration: var(--animation-duration);
    animation-delay: 0s;
    animation-timing-function: cubic-bezier(1, -0, .59, .79);

    
}

.preloader {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: auto;
    align-items: center;
    justify-content: center;

    opacity: 0.8;
    color: var(--color-main);
    font-size: 8rem;
    font-family: 'Exo', sans-serif;
    

    animation-name: loader;
    animation-duration: var(--animation-duration);
    animation-delay: 0s;
    animation-timing-function: cubic-bezier(1, -0, .59, .79);
}


.preloader div{
    /* font-size: 8rem;
    font-family: 'Exo', sans-serif; */
}

.preloader .designed-by{
    font-size: 3vw;
    font-family: 'Exo', sans-serif;
    padding-left: var(--space-xxxs);
    align-self: start;

    animation-name: var(--letter-animation);
}

.preloader .black-lotos{
    font-size: 12vw;
    font-family: 'Exo', sans-serif;
    animation-name: var(--letter-animation);
}
</style>
