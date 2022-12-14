import { AppProps } from 'next/app'
import { Navbar } from '@modules/ui'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default App
