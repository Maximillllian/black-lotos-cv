<template>
    <figure class="slide-ava ava move-border in-shadow">
        <svg>
            <slot />

            <line
                class="top"
                x1="0%"
                y1="0%"
                x2="300%"
                y2="0%"
            />
            <line
                class="right"
                x1="100%"
                y1="100%"
                x2="100%"
                y2="-300%"
            />
            <line
                class="bottom"
                x1="100%"
                y1="100%"
                x2="-200%"
                y2="100%"
            />
            <line
                class="left"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="400%"
            />
        </svg>
    </figure>
</template>

<script setup>
const props = defineProps({
    imageUrl: {
        type: String,
        required: true,
    }
})
</script>

<style scoped>
image {
    x: 5%;
    y: 5%;
    height: 90%;
    width: 90%;
}

.slide-ava{
    display: flex;
    width: 210px;
    height: 280px;
    /* border: 1px solid var(--color-secondary); */
    padding: 3px 5px;
    margin: auto;
}

svg line{
    -webkit-transition: all .6s;
	transition: transform .6s, stroke 2s;
}

.ava.move-border:hover line.top{
    -webkit-transform: translateX(-400px);
    transform: translateX(-50%);
}

.ava.move-border:hover line.right{
    -webkit-transform: translateY(-400px);
    transform: translateY(-88%);
}

.ava.move-border:hover line.bottom{
    -webkit-transform: translateX(400px);
    transform: translateX(50%);
}

.ava.move-border:hover line.left{
    -webkit-transform: translateY(400px);
    transform: translateY(88%);
}

.ava.move-border line.top, .ava.move-border line.bottom{
    stroke-dasharray: 35% 65%;
}

.ava.move-border line.right, .ava.move-border line.left{
    stroke-dasharray: 60%;
}

.aside-ava{
    position: relative;
    width: 210px;
    height: 280px;
    margin: 20px auto;
    /* border: 1px solid var(--color-secondary); */
}

.aside-ava img{
    position: relative;
    width: 100%;
    height: 100%;
}

.aside-ava > *{
    z-index: 10;
}

@media (min-width: 767.98px){
    .slide-ava{
        width: 300px;
        height: 400px;
    }
}
</style>
