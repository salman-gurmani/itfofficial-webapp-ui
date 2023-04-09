import { createOvermindSSR } from 'overmind'

import { config, useAppState } from '../../overmind'
import { Text } from '@chakra-ui/react'
import { PrimaryLayout } from '../../components/Layout/Layout'
import { Loading } from '../../components/Loading'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
export async function getStaticProps(props) {
  const { locale } = props
  // If we want to produce some mutations we do so by instantiating
  // an Overmind SSR instance, do whatever datafetching is needed and
  // change the state directly. We return the mutations performed with
  // "hydrate"
  const overmind = createOvermindSSR(config)

  overmind.state.page = 'singlemembership'

  return {
    props: {
      mutations: overmind.hydrate(),
      locale,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default function SingleMembership() {
  const state = useAppState()

  return (
    <PrimaryLayout>
      <Loading />
      <Text>{state?.user?.displayName}</Text>
    </PrimaryLayout>
  )
}
