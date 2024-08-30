<template>
    <div class="scanline"></div>

    <div class="terminal">
        <main v-if="isAnimationEnded">
            <aside>
                <span class="old-button to-main" @click="toMainPage">
                    Главная
                </span>
                <div class="designed-by">Designed by Black Lotos</div>
            </aside>
            <section class="content">
                <h2>Анекдоты</h2>
                <!-- TODO: InfinityScroll -->
                <div class="anecdots">
                    <div class="anecdot-item">
                        Военная часть, солдат много, еды мало, офицеры уже все съели, поэтому надо чем-то солдат от еды
                        отвадить. Встаёт перед новобранцами сержант и командует: <br />
                        - Баланду будут выдавать у западных ворот лагеря! К западным воротам бегом марш!
                        <br />
                        Солдаты бегут через всю часть, у западных ворот их встречает лейтенант:
                        <br />
                        - Кто приказал бегать? <br />
                        - Да вот мы за обедом, товарищ лейтенант <br />
                        - Кто сказал что обед у западных ворот?! Обед у восточных ворот! К восточным воротам бегом марш!
                        <br />
                        Солдаты со сбитым дыханием бегут туда, уже все уставшие и голодные. <br />
                        У восточных ворот их ждёт полковник: <br />
                        - Кто разрешил бегать по лагерю?! За беготню по лагерю обед отменяется!!!
                        <br />
                    </div>
                    <div class="anecdot-item">
                        Мои мысли, когда я иду к стоматологу: <br />
                        - Мне нужна маленькая пломба <br />
                        Мысли стоматолога: <br />
                        - Ему нужен новый рот
                    </div>
                    <div class="anecdot-item">
                        Завод по производству гробов произвел слияние с заводом, производящим вентиляторы. Теперь
                        производят моторные лодки
                    </div>
                    <div class="anecdot-item">
                        - Мам, купи собаку-у-у! <br />
                        - Отстань, не куплю. <br />
                        - Ну мам, смотри, какая она красивая, добрая, ну купи-и-и! <br />
                        - Сказала - не куплю. Отстань! <br />
                        - Ма-а-ам, ну пожалуйста, ну купи-и-и! <br />
                        - Изя, отстань, продай свою собаку кому-нибудь другому!
                    </div>
                    <div class="anecdot-item">
                        В Питере турист подходит к мальчику и спрашивает: <br />
                        - Парень, скажи, а солнце у вас тут как часто бывает? <br />
                        - Не знаю, мне только тринадцать лет ещё
                    </div>
                    <div class="anecdot-item">
                        Акция: две бутылки паленлй водки за 199 рублей, и собака-поводырь бесплатно!
                    </div>
                    <div class="anecdot-item">
                        1945 год, Берлин взят, русская армия входит в город, сам Жуков едет до Рейхстага. За этим из
                        окна наблюдает немецкие внук и бабка его слепая.
                        <br />
                        Раздается звук салюта. Бабка спрашивает: <br />
                        - Внучек, а это в честь чего? <br />
                        - Это герр Жуков, маршал СССР приехал! <br />
                        Раздается второй салют. Бабка: <br />
                        - А что, с первого раза по Жукову не попали?
                    </div>
                    <div class="anecdot-item">
                        - Сынок, повторяй: КОФ-ТА. К-О-Ф-Т-А <br />
                        - Свитшот <br />
                        - Дорогая, ну все, Даня Милохин едет обратно в приют
                    </div>
                    <div class="anecdot-item">
                        Идёт белый американец по железной дороге и видит, как на шпалах сидит негр. Тут поезд, белый
                        быстро отбегает, а негр не успевает сойти и попадает под колеса. <br />
                        Белый в шоке: <br />
                        - Это же я мог быть на его месте! <br />
                        На следующий день американец устроился водителем поезда
                    </div>
                    <div class="anecdot-item">
                        Идут по пустыне три инвалида: один без рук, второй слепой, третий на коляске. Тут на пути оазис.
                        Первый безрукий зашёл, окунулся, и руки снова появились. <br />
                        Второй зашёл слепой и прозрел. <br />
                        Оборачиваются они, чтобы третьего донести, а он уже сам несётся на коляске прямо в оазис. Через
                        секунду: <br />
                        - Ура, новые покрышки!
                    </div>
                    <div class="anecdot-item">
                        Меряет мужик шляпу, а она ему как раз. <br />
                        Меряет вторую, а она ему как два
                    </div>
                </div>
            </section>
        </main>
        <section
            v-else
            class="intro"
        >
            <div>
                <span class="intro-message"></span>
            </div>
        </section>
        <white-noise ref="whiteNoise" />
    </div>
</template>

<script setup>
import { onBeforeUnmount, ref, unref, nextTick } from 'vue';
import gsap from 'gsap';
import Typewriter from 'typewriter-effect/dist/core';
import { router } from '../router';
import { onMounted } from 'vue';
import WhiteNoise from '../components/WhiteNoise.vue';
import { useAnimation } from '../composables/use_animation';

document.body.className = 'terminal-page';

const { isAnimationEnded, endAnimation } = useAnimation();

const whiteNoise = ref(null);

function startIntro() {
    const introMessage = document.querySelector('.intro-message');
    const firstLine = 'Привет. Ты попал сюда, потому что кликлнул, куда не надо.';
    const secondLine = '<br>Теперь придется читать анекдоты.';
    const end = ' Крепись';

    const typewriter = new Typewriter(introMessage, { cursorClassName: 'cursor', delay: 50 });
    typewriter
        .typeString(firstLine)
        .pauseFor(1000)
        .typeString(secondLine)
        .pauseFor(500)
        .typeString(end)
        .pauseFor(2000)
        .deleteAll(25)
        .start()
        .callFunction(async () => {
            endAnimation();
            await nextTick();
            await unref(whiteNoise).startShortAnimation();
            document.body.className = 'terminal-page';
        });

    const cursor = gsap.to('.cursor', { opacity: 0, ease: 'steps(1)', duration: 1, repeat: -1 });
}

async function toMainPage() {
    await unref(whiteNoise).startFullAnimation(() => {
        router.push('/');
    });
};

onMounted(() => {
    startIntro();
});
</script>

<style scoped>
.terminal main {
    display: flex;
    flex-direction: row;
}

main .content {
    border-top: 5px double #fff;
    border-right: 5px double #fff;
    border-bottom: 5px double #fff;
}

main .content > * {
    padding: 0 50px;
}

main .content h2 {
    border-bottom: 5px double #fff;
    font-weight: 100;
}

.terminal aside {
    flex-basis: 15%;
    top: 0;
    align-self: flex-start;
    padding: 50px 20px 0;
    position: -webkit-sticky;
    position: sticky;
    height: 100vh;
    border: 5px double #fff;
}

.old-button {
    text-decoration: none;
    padding: 5px 10px;
    border: 5px double #fff;
    margin-bottom: 5px;
    display: inline-block;
    cursor: pointer;
}

.old-button:hover {
    background: #fff;
    color: #000;
    border: 5px double #000;
}

.designed-by {
    margin-top: 20px;
    font-size: 1rem;
}

.anecdot-item {
    position: relative;
    margin-top: 60px;
    padding: var(--space-md) 0;
}

.anecdot-item::before {
    content: "***";
    font-size: 1.5rem;
    position: absolute;
    top: 0;
}

@media screen and (max-width: 767.98px) {
    .terminal main {
        flex-direction: column;
    }

    .terminal aside {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-self: stretch;
        border-bottom: none;
        padding: var(--space-sm);
        gap: 20px;
    }

    .designed-by {
        margin: 0;
    }

    .terminal main .content h2 {
        display: none;
    }

    .terminal main .content {
        border: 5px             double #fff;
    }
}

@media screen and (max-width: 575.98px) {
  body.terminal-page .terminal {
    -webkit-animation: none;
    animation: none;
  }

  main .content > * {
    padding: var(--space-md);
  }

  .anecdot-item {
    margin-top: 0;
  }
}
</style>
