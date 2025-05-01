import React from 'react'

import TeamPage from '../pages/team/page'
import { getMetadata } from '../shared-metadata'

export async function generateMetadata() {
  return getMetadata(
    "Команда — RAIN Москва",
    "Команда пространства RAIN",
  )
}

export default function Team() {
  return <TeamPage />
}

