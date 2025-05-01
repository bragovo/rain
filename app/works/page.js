import React from 'react'

import WorksPage from '../pages/works/page'
import { getMetadata } from '../shared-metadata'

export async function generateMetadata() {
  return getMetadata(
    "Работы — RAIN Москва",
    "Работы пространства RAIN",
  )
}

export default function Works() {
  return <WorksPage />
}
