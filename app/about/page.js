import React from 'react'

import AboutPage from '../pages/about/page';

export async function generateMetadata({ params }) {
  return {
    title: "Пространство — RAIN Москва",
    description: "Приходи. Твоя очередь хорошо себя чувствовать",
  }
}

export default function About() {
  return <AboutPage />
}
