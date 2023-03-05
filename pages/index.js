import { Home } from './Home'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Main() {
  return <Home />
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
