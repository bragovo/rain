import React from 'react'

import IndexPage from './pages/page'

export async function generateMetadata({ params }) {
  return {
    title: "RAIN — ногтевая студия. Заботливый маникюр и педикюр в Москве.",
    description: "Заботливый маникюр и педикюр в Москве.",
  }
}

export default function Index () {
  return <IndexPage />
}
