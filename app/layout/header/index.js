"use client"

import React, { useState, useEffect } from 'react'
import classNames from 'classnames'

import button from '../../button.module.css'
import styles from './index.module.css'
import Link from 'next/link'
// import Logo from '!svg-react-loader?!../images/logo.svg'

function Logo() {
  return "LOGO"
}

export default function Header () {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div className={classNames(styles.header, { [styles.toggled]: toggle })}>
      <div className={styles.header_container}>
        <div className={styles.header_burger} onClick={handleToggle}>
          <svg viewBox="0 0 24 24">
            <rect height="1" width="24" x="0" y="8"></rect>
            <rect height="1" width="24" x="0" y="15"></rect>
          </svg>
        </div>

        <div className={styles.header_logo}>
          <Link href="/"><Logo /></Link>
        </div>

        <div className={styles.header_menu}>
          <div className={styles.header_menu_item}>
            <Link href="/about">Пространство</Link>
          </div>
          <div className={classNames(styles.in, styles.header_menu_item)}>
            <a>Услуги</a>
          </div>
          <div className={styles.header_menu_item}>
            <Link href="/works">Работы</Link>
          </div>
          <div className={styles.header_menu_item}>
            <Link href="/team">Команда</Link>
          </div>
          <div className={styles.header_menu_item}>
            <Link href="/career">Вакансии</Link>
          </div>
          <div className={classNames(styles.in, styles.header_menu_item)}>
            <a>Ценности</a>
          </div>
        </div>

        <div className={styles.header_book}>
            <a className={classNames('ms_booking', button.sign_up, styles.button)} href="#" data-url="https://n81206.yclients.com/company:95580">
              <>
                <div className={styles.icon}>
                  <svg viewBox="0 0 38 38">
                    <rect height="2" width="8" x="15" y="18"></rect>
                    <rect height="8" width="2" x="18" y="15"></rect>
                  </svg>
                </div>
                <div className={styles.text}>Записаться</div>
              </>
            </a>
        </div>
      </div>
    </div>
  )
}
