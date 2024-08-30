<template>
    <about-me />
    <main
        class="in-shadow"
        id="ОбоМне"
    >
        <aside>
            <avatar-container>
                <image
                    href="../assets/img/ava-cool.jpg"
                    height="90%"
                    width="90%"
                    x="5%"
                    y="5%"
                />
            </avatar-container>
            <div class="contacts-list">
                <div>ФИО:</div>
                <div class="in-shadow">Воронин Максим Андреевич</div>
                <div>Телефон:</div>
                <div class="in-shadow"><a href="tel:+7-901-201-62-28">8-901-201-62-28</a></div>
                <div>Почта:</div>
                <div class="in-shadow">
                    <a href="mailto: voronin.maksim.2000@gmail.com">voronin.maksim.2000@gmail.com</a>
                </div>
                <div>telegram:</div>
                <div class="in-shadow"><a href="https://t.me/cryptodeputat">@cryptodeputat</a></div>
                <div>vk:</div>
                <div class="in-shadow"><a href="https://vk.com/maximillllian">vk.com/maximillllian</a></div>
                <div>github:</div>
                <div class="in-shadow"><a href="https://github.com/Maximillllian">Maximillllian</a></div>
                <div>Город:</div>
                <div class="in-shadow">Екатеринбург</div>
            </div>
        </aside>
        <ul class="aside-nav">
            <li class="in-shadow"><a href="#Образование">Образование</a></li>
            <li class="in-shadow"><a href="#Навыки">Навыки</a></li>
            <li class="in-shadow"><a href="#Портфолио">Портфолио</a></li>
        </ul>
        <article>
            <section
                class="roadmap"
                id="Образование"
            >
                <h2>Образование</h2>
                <div class="timeline">
                    <div class="event left">
                        <h4>УИУ РАНХиГС</h4>
                        <p>2018-2022</p>
                        <div class="in-shadow dropdown">Государственное и муниципальное управление</div>
                    </div>
                    <div class="event right">
                        <h4 class="mb-0">Python-разработчик</h4>
                        <h6>stepik.com</h6>
                        <p>2018-2021</p>
                        <div class="in-shadow dropdown">
                            Клик<i class="arrow arrow-right"></i>
                            <div class="dropdown-content">
                                <a href="https://stepik.org/cert/213327">Python: основы</a>
                                <a href="https://stepik.org/cert/203580">Программирование на Python</a>
                                <a href="https://stepik.org/cert/686102">Python в примерах и задачах</a>
                            </div>
                        </div>
                    </div>
                    <div class="event left">
                        <h4 class="mb-0">DataScience</h4>
                        <h6>stepik.com</h6>
                        <p>2018-2021</p>
                        <div class="in-shadow dropdown">
                            Клик<i class="arrow arrow-right"></i>
                            <div class="dropdown-content">
                                <a href="https://stepik.org/cert/284309">Введение в DataScience</a>
                                <a href="https://stepik.org/cert/208624">Основы статистики</a>
                                <a href="https://stepik.org/cert/373973">Основы статистики. Часть 2</a>
                                <a href="https://stepik.org/cert/329007">Анализ данных в R</a>
                            </div>
                        </div>
                    </div>
                    <div class="event right">
                        <h4 class="mb-0">ODS Course</h4>
                        <p>2021</p>
                        <i class="in-shadow dropdown">Machine Learning</i>
                    </div>
                    <div class="event left">
                        <h4 class="mb-0">Веб-разработка</h4>
                        <h6>stepik.com</h6>
                        <p>2021</p>
                        <div class="in-shadow dropdown">
                            Клик<i class="arrow arrow-right"></i>
                            <div class="dropdown-content">
                                <a href="https://stepik.org/cert/1044572">HTML и CSS</a>
                                <a href="https://stepik.org/cert/1061285">JavaScript</a>
                                <a href="https://stepik.org/cert/809461">Автоматизация тестирования Selenium</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                class="skills"
                id="Навыки"
            >
                <h2>Навыки</h2>
                <div class="row">
                    <div class="col-xs-12 col-md-6">
                        <h4>DataScience</h4>
                        <div class="skills-list">
                            <div>Инструменты:</div>
                            <div class="in-shadow">Python, SQL</div>
                            <div>Библиотеки:</div>
                            <div class="in-shadow">scikit-learn, XGBoost, pandas, numpy, matplotlib, seaborn</div>
                            <div>Алгоритмы:</div>
                            <div class="in-shadow">
                                RandomForest, DecisionTree, XGBoost, Linear regression, Logistic Regression
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <h4>Веб-разработка</h4>
                        <div class="skills-list">
                            <div>Инструменты:</div>
                            <div class="in-shadow">HTML5, CSS3, JavaScript, Python, SQL</div>
                            <div>Библиотеки:</div>
                            <div class="in-shadow">JQuery, Django, Selenium WebDriver</div>
                            <div>CSS frameworks:</div>
                            <div class="in-shadow">Bootstrap, flexboxgrid2</div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                class="portfolio"
                id="Портфолио"
            >
                <header>
                    <h2>Потрфолио</h2>
                    <button class="in-darkness"><a href="">Подробнее</a></button>
                </header>
                <div class="portfolio-block">
                    <h3>Анализ заседаний в Государственной Думе за 2016-2021 гг.</h3>
                    <div class="project-description">
                        <div>Какие задачи?</div>
                        <div class="in-shadow">
                            <ul class="m-0">
                                <li>
                                    Собрать данные с сайта <a href="http://vote.duma.gov.ru/">vote.duma.gov.ru</a> о
                                    каждом заседании 7 созыва (около 20.000 заседаний);
                                </li>
                                <li>
                                    Посмотреть на статистику (посещаемость заседаний депутатами каждой партии,
                                    зависимость принятия закона и времени/даты заседания);
                                </li>
                                <li>
                                    Построить модели машинного обучения, предсказывающие, будет принят закон или нет;
                                </li>
                            </ul>
                        </div>
                        <div>Какие инструменты?</div>
                        <div class="in-shadow">
                            <ul class="m-0">
                                <li>BeautifulSoup4 - для парсинга данных</li>
                                <li>Pandas - работа с данными</li>
                                <li>Seaborn, Matplotlib - визуализация</li>
                                <li>Scikit-learn - алгоритмы машинного обучения</li>
                            </ul>
                        </div>
                        <div>Ссылка на ноутбук:</div>
                        <div></div>
                    </div>
                </div>
                <div class="portfolio-block">
                    <h3>Сайт-портфолио</h3>
                    <div class="project-description">
                        <div>Какие задачи?</div>
                        <div class="in-shadow">
                            <ul class="m-0">
                                <li>
                                    С нуля создать личный сайт, где будет размещена информация обо мне и мои проекты
                                </li>
                            </ul>
                        </div>
                        <div>Какие инструменты?</div>
                        <div class="in-shadow">
                            <ul class="m-0">
                                <li>HTML, CSS - разметка страницы и дизайн</li>
                                <li>JavaScript - некоторые анимации</li>
                                <li>
                                    Django - движок сайта. Зачем нужен на статичном сайте? Для создания шаблонов (в
                                    частности футера) и тренировки
                                </li>
                            </ul>
                        </div>
                        <div>Ссылка на сайт:</div>
                        <div class="in-shadow">
                            <ul class="m-0">
                                <li>
                                    Вы находитесь на этом сайте:) Но на всякий случай
                                    <a
                                        href="https://maximillllian.pythonanywhere.com/"
                                        class="void-button"
                                        >КЛИК</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    </main>
    <footer>
        <div class="inspiration">
            <h4 class="in-darkness">Дизайн вдохновлен:</h4>
            <ul>
                <li class="in-darkness"><a href="https://czg.vercel.app/">CSS Zen Garden</a></li>
                <li class="in-darkness"><a href="https://stylestage.dev/styles/">StyleStage</a></li>
            </ul>
        </div>
        <div class="socials">
            <a
                href="https://www.instagram.com/black_voro/"
                class="in-darkness"
            >
                <img src="../components/svg/instagram.svg" id="insta" />
            </a>
            <a
                href="https://vk.com/maximillllian"
                class="in-darkness"
            >
                <img src="../components/svg/vk.svg" id="vk" />
            </a>
        </div>
        <img
            src="../assets/img/lindemann.png"
            alt=""
            class="in-darkness hero"
        />
    </footer>
    <black-lotos-preloader />    
</template>

<script setup>
import AvatarContainer from '../components/AvatarContainer.vue';
import AboutMe from '../components/AboutMe.vue';
import BlackLotosPreloader from '../components/BlackLotosPreloader.vue';

document.body.className = 'main';


</script>

<style scoped>

.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
