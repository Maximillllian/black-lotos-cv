<template>
    <div class="noise_wrapper">
        <section
            id="white_noise"
            class="fucking_noise"
        >
            <svg id="svg_noise">
                <filter id="filter_noise">
                    <feTurbulence
                        type="turbulence"
                        baseFrequency="0 0"
                        numOctaves="1"
                        result="warp"
                    />
                    <feDisplacementMap
                        scale="60"
                        in="sourceGraphic"
                    />
                    <!-- in="warp" -->
                </filter>
            </svg>
        </section>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';

const emit = defineEmits(['animation-ended']);

const noise_wrapper = document.querySelector('.noise_wrapper');
const section = document.querySelector('section#white_noise');
let turb;

const animationStarted = ref(false);
const animationCompleted = ref(false);

function tl_begin() {
    const tl_begin = gsap.timeline();
    tl_begin
        .to(turb, { attr: { baseFrequency: '0.3 0' }, duration: 0.15 })
        .to(turb, { attr: { baseFrequency: '0.1 0' }, duration: 0.15 })
        .to(turb, {}, '+=0.1');
    // .to(turb, {attr:{baseFrequency: "0.3 0"}, duration: 0.15})
    // .to(turb, {attr:{baseFrequency: "0.3 0.3"}, duration: 0.5}, "+=0.7");

    return tl_begin;
}

function tl_noise(repeat) {
    const tl_noise = gsap.timeline({ repeat: repeat });
    tl_noise
        .to(turb, { attr: { baseFrequency: '0.9 0.9' }, duration: 0.1 })
        .to(turb, { attr: { baseFrequency: '0.8 0.8' }, duration: 0.1 })
        .to(turb, { attr: { baseFrequency: '0.9 0.9' }, duration: 0.3 });

    return tl_noise;
}

function tl_end() {
    const tl_end = gsap.timeline();
    tl_end
        .to(turb, { attr: { baseFrequency: '0 0.3' }, duration: 0.15 })
        .to(turb, {}, '+=2');

    return tl_end;
}

function tl_to_white(duration) {
    const tl_white = gsap.timeline();
    tl_white.to(noise_wrapper, { backgroundColor: 'rgba(255, 255, 255, 1)', duration: duration });

    return tl_white;
}

function startAnimation() {
    turb = document.querySelector('feTurbulence');

    const tl_master = gsap.timeline({
        onComplete: () => {
            emit('animation-ended');            
        },
    });
    tl_master
        .add(tl_begin())
        .add('to_white')
        .add(tl_to_white(5))
        .add(tl_noise(10), 'to_white')
        .add('to_end')
        .add(tl_end(), 'to_end');

    console.log('Конец');
}

onMounted(() => {
    startAnimation();
});
</script>

<style scoped>
.noise_wrapper {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 10000;
    background-color: rgba(255, 255, 255, 1);
}

section#white_noise {
    width: 100%;
    height: 100%;
}

.hidden {
    display: none;
}

.fucking_noise {
    filter: url(#filter_noise);
    background: repeating-linear-gradient(#111, #111 50%, #fff 50%, #fff);
    /* background: white; */
    background-size: 5px 5px;
    z-index: 10001;
}
</style>
