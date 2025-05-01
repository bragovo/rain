"use client"

import React from 'react'
import { Playfair_Display } from 'next/font/google'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import classNames from 'classnames'
import page from '../pages.module.css'
import styles from './page.module.css'

export const playfair = Playfair_Display({
  subsets: ['cyrillic'],
  display: 'swap',
})

export default function About () {
  return (
    <div className={page.root}>
      <div className={classNames(styles.top)}>
        <div className={styles.placeholder} />

        <div className={page.text}>
              <h1>
                На темной стороне
              </h1>
              <p>
                Духовской пер. 17с15, м. Тульская
              </p>
        </div>
      </div>

      <section className={classNames(styles.description, page.section)}>
        <p>
          В RAIN нет случайных людей. Гость — наш подарок и новый виток истории. Нас выбирают, чтобы получить идеальный маникюр, наполнить
          себя ощущением лёгкости и прикоснуться к прекрасному среди серо-белых будней больших городов. Каждый дизайн — искусство, которое рождается из союза тёплого общения,
          вдохновения жизни и высокого уровня профессионализма нашей команды.
        </p>
      </section>

      <section className={classNames(styles.photo, page.section)}>
        <div className={classNames(styles.tables)} />
      </section>

      <section className={classNames(styles.senses, page.section)}>
        <div className={styles.txt}>
          <h2>
            Приходи. Твоя очередь хорошо себя чувствовать
          </h2>

          <p>
            Мы вкладываем смысл в каждый штрих наших пространств: мебель, свет, цвет, аромат, музыка. Геометрия дизайна транспортируется в правильные линии и изгибы нашего дома RAIN.
            Все, что вы видите — решенное уравнение, наши мысли и состояние, которым мы с удовольствием делимся с гостями.
          </p>
        </div>

        <div className={classNames(styles.feel)} />
      </section>

      <section className={classNames(styles.quote, page.section)}>
        <p className={classNames(styles.txt, playfair.className)}>
          «В Москве так мало искренних мест. И я рада, что нашла одно из них. Здесь действительно заботятся о качестве, и действительно искренне рады видеть.
          Ирина, спасибо за искренний сервис, ты невероятная!)»
        </p>

        <p className={styles.author}>
          — Светлана, отзыв на Google Картах
        </p>
      </section>

      <section className={classNames(styles.two_photos, page.section)}>
        <div className={classNames(styles.first)} />

        <div className={classNames(styles.second)} />
      </section>

      <section className={classNames(styles.space, page.section)}>
        <div className={styles.txt}>
          <h2>
            Космос в здании 1869 г. постройки
          </h2>

          <p>
            RAIN находится в резиденции The Loft Club. Проходи в центральные ворота с надписью The Loft. Иди прямо, поверни налево между 7 и 1 строением,
            поверни направо и двигайся вдоль 13 строения, пока не упрёшься в забор, поверни направо и ты на месте.
          </p>
        </div>

        <div className={styles.contacts}>
          <p>+7 926 042-58-85</p>
          <p>10:00 — 22:00</p>
          <p>Духовской переулок, дом 17, строение 15 <br />Москва</p>
        </div>
      </section>
      <section className={classNames(styles.roads, page.section)}>
        <div className={classNames(styles.active)}>
          <div>
            <div className={styles.road} />

            <div className={styles.txt}>
              Схема движения по Лофту
            </div>
          </div>

          <div>
            <div className={styles.map}>
              <YMaps>
                <Map className={styles.ymap} width={'100%'} defaultState={{ center: [55.7039, 37.6162], zoom: 17, width: 100 }}>
                  <Placemark defaultGeometry={[55.7039, 37.6162]} />
                </Map>
              </YMaps>
            </div>

            <a href="https://yandex.ru/maps/org/rain/206263032856/" target="_blank" rel="noreferrer">
              Смотреть на карте
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
