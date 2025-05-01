"use client"

import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'

import button from '../button.module.css'
import styles from './index.module.css'

export default function Footer() {
  const yc = useRef()
  const [init, setInit] = useState(false)

    useEffect(() => {
      if (!init) {
        yWidget.addClickEventToButton(yc.current);
        setInit(true)
      }
    }, [])

  return(
    <div className={styles.root}>
      <div className={styles.socials}>
        <div className={styles.socials_item}>
          <a href="//instagram.com/irina_rain" target="_blank">Instagram</a>
        </div>
        <div className={styles.socials_item}>
          <a href="//fb.com/rainnailbar" target="_blank">Facebook</a>
        </div>
        <div className={styles.socials_item}>
          <a href="//vk.com/irina.rain" target="_blank">Vkontakte</a>
        </div>
        <div className={styles.socials_item}>
          <a href="//pinterest.com/irina_rain" target="_blank">Pinterest</a>
        </div>
        <div className={styles.socials_item}>
          <a href="//youtube.com/channel/UCAqvSQ0oo9v-6jPQKu_vSGQ" target="_blank">YouTube</a>
        </div>
      </div>
      <div className={styles.book}>
        <a ref={yc} className={classNames(button.sign_up, styles.button)} href="#" data-url="https://n81206.yclients.com/company:95580">Записаться</a>
      </div>
      <div className={styles.l_ike}>
        {/* <a href="//luckypike.com">L..IKE</a> */}
      </div>
    </div>
  )
}
