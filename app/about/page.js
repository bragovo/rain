import React from 'react'

import AboutPage from '../pages/about/page';
import { getMetadata } from '../shared-metadata'

export async function generateMetadata() {
  return getMetadata(
    "Пространство — RAIN Москва",
    "Приходи. Твоя очередь хорошо себя чувствовать",
  )
}

export default function About() {
  return <AboutPage />
}
