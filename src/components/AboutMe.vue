<template>
    <header class="first-view">
        <section id="banner">
            <div class="wrapper">
                <avatar-container class="ava">
                    <image
                        href="../assets/img/ava_restraunt.JPG"
                        height="90%"
                        width="90%"
                        x="5%"
                        y="5%"
                    />
                </avatar-container>
                <div class="description">
                    <h2>
                        Привет! <br />
                        Меня зовут Макс. Я разработчик с 3+ годами опыта. Занимаюсь разработкой backend и frontend частей приложения. Улучшаю жизнь команды с помощью автоматизации рутины и внедрения новых практик.
                    </h2>
                    <nav>
                        <link-button
                            id="about-button"
                            class="in-darkness"
                            href="#ОбоМне"
                        >
                            Обо мне
                        </link-button>

                        <link-button
                            id="portfolio-button"
                            class="in-darkness"
                        >
                            Портфолио
                        </link-button>

                        <link-button class="in-darkness" id="resume-button">
                            Резюме
                        </link-button>
                        <link-button
                            id="dont-click-button"
                            animation="fade-in"
                            class="last noise_button"
                            @click="toOldTerminal"
                        >
                            Не кликай!
                        </link-button>
                    </nav>
                </div>
            </div>
        </section>
        <a
            href="#"
            class="lotos-tag in-darkness"
        >
            <div class="designed-by">Designed by</div>
            <div class="black-lotos"><span class="black">Black</span> <span class="lotos">Lotos</span></div>
        </a>
        <white-noise ref="whiteNoise" />
    </header>
</template>

<script setup>
import AvatarContainer from './AvatarContainer.vue';
import LinkButton from './ui/LinkButton.vue';
import WhiteNoise from './WhiteNoise.vue';
import { router } from '../router';
import { ref, unref } from 'vue';

const whiteNoise = ref(null);

async function toOldTerminal() {
    await unref(whiteNoise).startFullAnimation(() => {
        router.push('/old-terminal');
    });
}
</script>

<style scoped>
h2 {
    font-size: var(--text-xxl);
    font-weight: normal;
}

#banner {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 3rem;
}

#banner .wrapper {
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-auto-rows: 1fr;
    align-items: center;
    justify-content: center;
}

#banner .description {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: auto;
}

#banner .description nav {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
        'about portfolio resume'
        '. dontClick .';
    grid-column-gap: var(--space-xl);
    -moz-column-gap: var(--space-xl);
    column-gap: var(--space-xl);
    grid-row-gap: var(--space-md);
    row-gap: var(--space-md);
    max-width: 80%;
    margin-top: auto;
}

#about-button {
    grid-area: about;
}

#portfolio-button {
    grid-area: portfolio;
}

#resume-button {
    grid-area: resume;
}

#dont-click-button {
    grid-area: dontClick;
}

@media screen and (max-width: 1199.98px) {
    h2 {
        font-size: var(--text-xl);
    }

    #banner .wrapper {
        grid-template-columns: 2fr 3fr;
    }

    #banner .description nav {
        max-width: 100%;
        grid-template-areas:
            'about portfolio'
            'resume dontClick';
    }
}

@media screen and (max-width: 991.98px) {
    h2 {
        font-size: var(--text-lg);
    }
}

@media screen and (max-width: 767.98px) {
    #banner .wrapper {
        grid-template-columns: 1fr;
    }

    #banner .description {
        grid-gap: 2rem;
        gap: 2rem;
    }

    #banner .description nav {
    grid-template-columns: 1fr;
        grid-template-areas:
            'about'
            'portfolio'
            'resume'
            'dontClick';
    }
}

@media screen and (max-width: 575.98px) {
    #banner {
        padding: var(--space-md);
    }

    #banner .wrapper {
        grid-auto-rows: auto;
        grid-gap: 2rem;
        gap: 2rem;
    }
}
</style>
