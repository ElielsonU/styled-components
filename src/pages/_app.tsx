import { ThemeProvider } from 'styled-components'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import GlobalStyles from '@/components/Global'

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333"
  },
  mobile: '768px'
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles/>
        <Component {...pageProps} />
      </>
    </ThemeProvider>
  )
}
