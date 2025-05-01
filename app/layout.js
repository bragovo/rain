import localFont from 'next/font/local'
import classNames from "classnames";

import 'normalize.css/normalize.css'
import '@glidejs/glide/dist/css/glide.core.css'
import "./globals.css";

import Header from './layout/header';
import Footer from './footer';

const FN = localFont({
  src: [
    {
      path: './layout/fonts/fn/subset-FuturaNewBook-Reg.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './layout/fonts/fn/subset-FuturaNewExtraBold-Reg.woff',
      weight: '800',
      style: 'normal',
    }
  ]
})

export const metadata = {
  title: "RAIN — ногтевая студия. Заботливый маникюр и педикюр в Москве.",
  description: "Заботливый маникюр и педикюр в Москве.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={classNames(FN.className)}>
        <Header />

        {children}

        <Footer />

        <script src="//w81206.yclients.com/widgetJS" />
      </body>
    </html>
  );
}
