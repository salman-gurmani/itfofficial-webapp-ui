import '../styles/global.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Kanit } from '@next/font/google'
import { extendTheme } from '@chakra-ui/react'
import { createOvermind, createOvermindSSR, rehydrate } from 'overmind'
import { Provider } from 'overmind-react'
import { config } from '../overmind'
import App from 'next/app'
import React from 'react'

import { appWithTranslation } from 'next-i18next'

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const theme = extendTheme({
  fonts: {
    kanit: kanit.style.fontFamily,
  },
})

class MyApp extends App {
  // CLIENT: On initial route
  // SERVER: On initial route
  constructor(props) {
    super(props)

    const mutations = props.pageProps.mutations || []

    if (typeof window !== 'undefined') {
      // On the client we just instantiate the Overmind instance and run
      // the "changePage" action
      this.overmind = createOvermind(config)
      this.overmind.actions.changePage(mutations)
    } else {
      // On the server we rehydrate the mutations to an SSR instance of Overmind,
      // as we do not want to run any additional logic here
      this.overmind = createOvermindSSR(config)
      rehydrate(this.overmind.state, mutations)
    }
  }
  // CLIENT: After initial route, on page change
  // SERVER: never
  componentDidUpdate() {
    // This runs whenever the client routes to a new page
    this.overmind.actions.changePage(this.props.pageProps.mutations || [])
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <Provider value={this.overmind}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </Provider>
    )
  }
}

export default appWithTranslation(MyApp)
