import React from 'react'

import IndexPage from './pages'
import { getMetadata } from './shared-metadata'

export async function generateMetadata() {
  return getMetadata(
    "RAIN — ногтевая студия. Заботливый маникюр и педикюр в Москве.",
    "Заботливый маникюр и педикюр в Москве.",
  )
}

export default function Index () {
  return <IndexPage />
}
