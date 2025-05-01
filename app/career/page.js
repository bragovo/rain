import React from 'react'

import CareerPage from '../pages/career/page'
import { getMetadata } from '../shared-metadata'

export async function generateMetadata() {
  return getMetadata(
    "Вакансии в Москве — RAIN Москва",
    "Все вакансии пространства RAIN",
  )
}

export default function Career () {
  return <CareerPage />
}
