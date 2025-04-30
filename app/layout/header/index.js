"use client"

import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import button from '../../button.module.css'
import styles from './index.module.css'
import Link from 'next/link'

function Logo() {
  return (
    <svg viewBox="0 0 126 32" fill="currentColor">
      <path d="M17.7646 32H15.3475L3.26228 15.4217C3.26228 15.4217 6.3911 15.4365 6.82113 15.4217C12.1594 15.1548 15.0658 14.6061 15.0806 8.85264C15.0806 6.89527 14.3837 5.48656 13.3605 4.31511C11.5663 2.25394 7.96293 2.53568 7.96293 2.53568H1.43837L0 0.563484L7.38461 0.578313C8.8823 0.563484 11.9815 0.355884 14.6951 2.86191C16.2521 4.30028 17.0528 6.31696 17.0528 8.83781C17.0528 16.4745 11.7442 17.0083 6.95459 17.1121L17.7646 32Z"/>
      <path d="M65.3346 32H63.1399L49.3494 4.44856L36.0778 32H33.898L49.3197 0L65.3346 32Z"/>
      <path d="M85.0121 0H83.0547V32H85.0121V0Z"/>
      <path d="M125.153 32H122.929L105.816 0H108.041L125.153 32Z"/>
    </svg>
  )
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
