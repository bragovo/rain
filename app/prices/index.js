import React, { Component } from 'react'
import classNames from 'classnames'

import button from '../button.module.css'
import styles from './index.module.css'


export default class Prices extends Component {
  render() {
    const prices = pricesData.map(p => p.attributes)

    return(
      <div className={styles.root}>
        <div className={styles.text}>
          <h2>Цены</h2>
          <p>Изо дня в день и от сезона к сезону мы создаем nail art, подчеркиваем вашу внутреннюю и внешнюю красоту.</p>
        </div>
        <div className={styles.left}>
          {prices.filter(p => p.position == 'left').map((price,_) =>
            <div key={_}>
              <div className={styles.price_row} key={_}>
                <div className={styles.prices_row}>
                  <div className={styles.title}>{price.title}</div>
                  <div className={styles.price}>{price.price_msk} <i>₽</i></div>
                </div>
              </div>
              <div className={styles.desc}>{price.description}</div>
            </div>
          )}
        </div>

        <div className={styles.right}>
          {prices.filter(p => p.position == 'right').map((price,_) =>
            <div key={_}>
              <div className={styles.price_row} key={_}>
                <div className={styles.prices_row}>
                  <div className={styles.title}>{price.title}</div>
                  <div className={styles.price}>{price.price_msk} <i>₽</i></div>
                </div>
              </div>
              <div className={styles.desc}>{price.description}</div>
            </div>
          )}
        </div>
        <div className={styles.under}>
          <a className={classNames("ms_booking", button.sign_up)} href="#" data-url="https://n81206.yclients.com/company:95580">Записаться</a>
        </div>
      </div>
    )
  }
}

const pricesData = [
  {
    "id": "16",
    "type": "price",
    "attributes": {
      "title": "Покрытие Luxio",
      "price_msk": "1800",
      "price_nn": "1300",
      "description": "",
      "position": "right",
      "order": 0
    }
  },
  {
    "id": "17",
    "type": "price",
    "attributes": {
      "title": "Покрытие Luxio + укрепление Luxio Build",
      "price_msk": "2000",
      "price_nn": "1500",
      "description": "",
      "position": "right",
      "order": 0
    }
  },
  {
    "id": "25",
    "type": "price",
    "attributes": {
      "title": "+ френч",
      "price_msk": "500",
      "price_nn": "500",
      "description": "",
      "position": "right",
      "order": 0
    }
  },
  {
    "id": "26",
    "type": "price",
    "attributes": {
      "title": "+ лунки",
      "price_msk": "500",
      "price_nn": "500",
      "description": "",
      "position": "right",
      "order": 0
    }
  },
  {
    "id": "27",
    "type": "price",
    "attributes": {
      "title": "+ френч и лунки",
      "price_msk": "1000",
      "price_nn": "1000",
      "description": "",
      "position": "right",
      "order": 0
    }
  },
  {
    "id": "28",
    "type": "price",
    "attributes": {
      "title": "+ дизайн 1 ноготь",
      "price_msk": "100",
      "price_nn": "100",
      "description": "",
      "position": "right",
      "order": 0
    }
  },
  {
    "id": "29",
    "type": "price",
    "attributes": {
      "title": "+ сложный дизайн 1 ноготь",
      "price_msk": "200",
      "price_nn": "200",
      "description": "",
      "position": "right",
      "order": 0
    }
  },
  {
    "id": "30",
    "type": "price",
    "attributes": {
      "title": "+ лечение IBX",
      "price_msk": "600",
      "price_nn": "500",
      "description": "",
      "position": "right",
      "order": 0
    }
  },
  {
    "id": "31",
    "type": "price",
    "attributes": {
      "title": "+ снятие покрытия",
      "price_msk": "200",
      "price_nn": "200",
      "description": "",
      "position": "right",
      "order": 0
    }
  },
  {
    "id": "33",
    "type": "price",
    "attributes": {
      "title": "Архитектура бровей",
      "price_msk": "1500",
      "price_nn": "1500",
      "description": "моделирование формы, окрашивание стойким красителем и коррекция",
      "position": "right",
      "order": 0
    }
  },
  {
    "id": "6",
    "type": "price",
    "attributes": {
      "title": "Маникюр + покрытие Luxio",
      "price_msk": "2200",
      "price_nn": "1600",
      "description": "",
      "position": "left",
      "order": 1
    }
  },
  {
    "id": "8",
    "type": "price",
    "attributes": {
      "title": "Маникюр + покрытие Luxio + укрепление Luxio Build",
      "price_msk": "2400",
      "price_nn": "1800",
      "description": "",
      "position": "left",
      "order": 2
    }
  },
  {
    "id": "18",
    "type": "price",
    "attributes": {
      "title": "Маникюр без покрытия",
      "price_msk": "1200",
      "price_nn": "1000",
      "description": "…маникюр обрезной, аппаратный или комбинированный по желанию гостьи",
      "position": "left",
      "order": 3
    }
  },
  {
    "id": "9",
    "type": "price",
    "attributes": {
      "title": "Педикюр + покрытие Luxio без шлифовки стоп",
      "price_msk": "2400",
      "price_nn": "1700",
      "description": "",
      "position": "left",
      "order": 4
    }
  },
  {
    "id": "10",
    "type": "price",
    "attributes": {
      "title": "Педикюр средствами Clearance + покрытие Luxio",
      "price_msk": "3400",
      "price_nn": "2800",
      "description": "",
      "position": "left",
      "order": 5
    }
  },
  {
    "id": "19",
    "type": "price",
    "attributes": {
      "title": "Педикюр средствами Clearance без покрытия",
      "price_msk": "2900",
      "price_nn": "2300",
      "description": "",
      "position": "left",
      "order": 6
    }
  },
  {
    "id": "20",
    "type": "price",
    "attributes": {
      "title": "Педикюр без покрытия и шлифовки стоп",
      "price_msk": "1900",
      "price_nn": "1300",
      "description": "",
      "position": "left",
      "order": 7
    }
  }
]
