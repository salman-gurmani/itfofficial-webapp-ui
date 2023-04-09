import Home from './home'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Main() {
  return <Home />
}

export async function getStaticProps(props) {
  const { locale } = props
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
