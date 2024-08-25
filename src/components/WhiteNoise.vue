<template>
    <div v-if="animationInProcess" class="noise_wrapper" ref="noiseWrapper">
        <section
            id="white_noise"
            class="fucking_noise"
            ref="section"
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
import { onBeforeUnmount, onMounted, ref, computed, unref, nextTick } from 'vue';
import gsap from 'gsap';

const emit = defineEmits(['animation-ended']);

const animationInProcess = ref(false);

const noiseWrapperPath = '.noise_wrapper';
const turbPath = 'feTurbulence';

let masterTl;
let callbackAfterAnimation = null;

function tl_begin() {
    const tl_begin = gsap.timeline();
    tl_begin
        .to(noiseWrapperPath, { backgroundColor: 'rgb(0, 0, 0)', duration: .5 })
        .to(turbPath, { attr: { baseFrequency: '0.3 0' }, duration: 0.15 })
        .to(turbPath, { attr: { baseFrequency: '0.1 0' }, duration: 0.15 })
        .to(turbPath, {}, '+=0.1');
    // .to(turb, {attr:{baseFrequency: "0.3 0"}, duration: 0.15})
    // .to(turb, {attr:{baseFrequency: "0.3 0.3"}, duration: 0.5}, "+=0.7");

    return tl_begin;
}

function tl_noise(repeat) {
    const tl_noise = gsap.timeline({ repeat: repeat });
    tl_noise
        .to(turbPath, { attr: { baseFrequency: '0.9 0.9' }, duration: 0.1 })
        .to(turbPath, { attr: { baseFrequency: '0.8 0.8' }, duration: 0.1 })
        .to(turbPath, { attr: { baseFrequency: '0.9 0.9' }, duration: 0.3 });

    return tl_noise;
}

function tl_end(delay = 2) {
    const tl_end = gsap.timeline();
    tl_end
        .to(turbPath, { attr: { baseFrequency: '0 0.3' }, duration: 0.15 })
        .to(turbPath, {}, '+=' + `${delay}`);

    return tl_end;
}

function tl_to_white(duration) {
    const tl_white = gsap.timeline();
    tl_white.to(noiseWrapperPath, { backgroundColor: 'rgba(255, 255, 255, 1)', duration: duration });

    return tl_white;
}

async function startFullAnimation(callback) {
    await wrapAnimation(async () => {
        masterTl = gsap.timeline();
        await masterTl
            .add(tl_begin())
            .add('to_white')
            .add(tl_to_white(5))
            .add(tl_noise(10), 'to_white')
            .add('to_end')
            .add(tl_end(2), 'to_end');
    }, callback);
}

async function startShortAnimation(callback) {
    await wrapAnimation(async () => {
        masterTl = gsap.timeline();
        await masterTl.add(tl_end(1), 'to_end');
    }, callback);
}

async function wrapAnimation(animationFn, callback) {
    callbackAfterAnimation = callback;

    document.body.className = 'main';
    animationInProcess.value = true;
    await nextTick();
    await animationFn();
    animationInProcess.value = false;

    useCallback();
}

function useCallback() {
    if (!callbackAfterAnimation) {
        return;
    }

    callbackAfterAnimation();
    callbackAfterAnimation = null;
}

function skipAnimation() {
    if (!unref(animationInProcess)) {
        return; 
    }

    masterTl.kill();  
    useCallback();
}

onMounted(() => {
    document.addEventListener('keypress', skipAnimation);
});

onBeforeUnmount(() => {
    document.removeEventListener('keypress', skipAnimation);
});

defineExpose({ startFullAnimation, startShortAnimation });
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
