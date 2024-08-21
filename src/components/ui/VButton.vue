<template>
    <button>
        <slot />
    </button>
</template>

<script setup>

</script>

<style scoped>
button {
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

button * {
    z-index: 100;
}

button::after, button::before{
    content: "";
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-bg);
    z-index: -1;
    transition: all .7s;
}

button::after{
    width: 110%;
    height: 60%;
}

button::before{
    width: 80%;
    height: calc(100% + var(--space-xxs));
}

/* Анимация границ кнопки */

button{
    transition: .5s ease-out;
}

button::after, button::before{
    transition: .5s ease-out;
}

button:hover::after{
    width: 0;
}

button:hover::before{
    height: 0;
}

@media (min-width: 575.98px){
}

@media (min-width: 767.98px) {
}

@media (min-width: 1199.98px){
}
</style>