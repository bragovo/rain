import React from 'react'
import classNames from 'classnames'

import page from '../../pages.module.css'
import styles from './page.module.css'

export default function TeamPage () {
  return (
    <div className={page.root}>
      <div className={styles.top}>
        <div className={styles.placeholder} />

        <div className={page.text}>
          <h1>
            Основа нашей магии
          </h1>

          <p>
            Отточенное профессиональное мастерство
          </p>
        </div>
      </div>

      <section className={classNames(styles.description, page.section)}>
        <p>
          Мы создаем не форму, покрытие или дизайн. Мы создаем настроение, с которым девушки будут жить ближайшие несколько недель.
          Мы любим пробовать неизведанное, не просто следовать моде, а обновлять, изменять её,
          создавать работу, которая расходится сотнями копий.
        </p>
      </section>

      <section className={classNames(styles.photo, page.section)}>
        <div className={styles.girls} />
      </section>

      <section className={classNames(styles.description, page.section)}>
        <div className={styles.txt}>
          <h2>
            Искусство можно только чувствовать
          </h2>

          <p>
            Мода, дизайн, архитектура, искусство, музыка и улица является вдохновляющим источником для нового.
            Идеи приходят с каждой из сторон. Они могут возникать из работы с командой.
            Мы видим больше, чем могли бы видеть работая в одиночку. В каждой работе есть такой момент. Это неописуемый восторг.
            Словно мы сотворили магию на секунду.
          </p>
        </div>
      </section>

      <section className={classNames(styles.team, page.section)}>
        <div className={styles.specialists}>
          {specialists.map((specialist, _) =>
            <div className={styles.list} key={_}>
              <div className={styles.specialist}>
                <img src={specialist.photo} />
              </div>

              <div className={styles.service}>
                {specialist.service}
              </div>

              <div className={styles.name}>
                {specialist.name}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}


export const specialists = [
  {
    "name": "Надя",
    "service": "Мастер маникюра и педикюра",
    "yid": "720952",
    "photo": "/images/team/spec/1.jpg"
  },
  {
    "name": "Азалия",
    "service": "Мастер маникюра и педикюра",
    "yid": "686561",
    "photo": "/images/team/spec/2.jpg"
  },
  {
    "name": "Вероника",
    "service": "Топ-мастер маникюра и педикюра",
    "yid": "218780",
    "photo": "/images/team/spec/3.jpg"
  },
  {
    "name": "Ирина",
    "service": "Основатель RAIN, топ-мастер маникюра и педикюра, мастер-бровист",
    "yid": "207096",
    "photo": "/images/team/spec/4.png"
  }
]
