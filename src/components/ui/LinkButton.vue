<template>
    <component :is="buttonComponent" :href="href" class="button" :class="{ 'fade-in': isFadeIn }">
        <slot />
    </component>
</template>

<script setup>
import { computed, unref } from "vue";

const props = defineProps({
    href: {
        type: String,
        required: true,
    },
    animation: {
        type: String,
        required: false,
        default: 'default',
        validation: value => ['default', 'fade-in'].includes(value),
    },
});

const isFadeIn = computed(() => unref(props.animation) === 'fade-in');
const buttonComponent = computed(() => !unref(props.href) ? 'span' : 'a');
</script>

<style>

</style>

<style scoped>
.button {
    position: relative;
    min-width: 200px;
    color: inherit;
    background-color: inherit;
    border: 1px solid var(--color-secondary);
    padding: var(--space-xxs) 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--text-xl);
    font-weight: normal;
}

.button * {
    z-index: 100;
}

.button::after, .button::before{
    content: "";
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-bg);
    z-index: -1;
    transition: all .7s;
}

.button::after{
    width: 110%;
    height: 60%;
}

.button::before{
    width: 80%;
    height: calc(100% + var(--space-xxs));
}

/* Анимация границ кнопки */

.button {
    transition: .5s ease-out;
}

.button:not(.fade-in)::after, .button:not(.fade-in)::before{
    transition: .5s ease-out;
}

.button:not(.fade-in):hover::after{
    height: 0;
}

.button:not(.fade-in):hover::before{
    width: 0;
}

/* Анимация появляющегося текста на кнопке. Это обычная анимация появления 
границ у кнопки, только текст по z-index находится под кнопкой. Плюс пропадают границы */

.fade-in {
    z-index: 1;
    transition: all .6s ease-out;
}

.fade-in:before {
    z-index: 1;
    animation: fade-in-infinity 3s cubic-bezier(0.625, 0.145, 0.375, 0.755) infinite alternate;
}

.fade-in:after {
    height: 0;
}



.fade-in *{
    z-index: 0;
    opacity: 0;
    transition: all .6s ease-out;
}

.fade-in:hover *{
    opacity: 1;
}

@media (min-width: 575.98px){
    .fade-in *{
        opacity: 1;
    }
}

@media (min-width: 767.98px) {
}

@media (min-width: 1199.98px){
}

@keyframes fade-in-infinity {
    0%, 20% {
        width: 80%;
    }
    80%, 100% {
        width: 0;
    }
}
</style>