export function getMetadata(title, description) {
  return {
    title,
    description,
    metadataBase: new URL('https://irinarain.com'),
    alternates: {
      canonical: '/',
    },
    openGraph: {
      title,
      description,
      images: ['/images/og.jpg'],
    },
  }
}
