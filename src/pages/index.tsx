import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Container, Card } from '@/components/models'
import { Header, Footer } from '@/components/sets'
import content from "@/content"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
        <Head>
          <title>styled-components</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>   
        <Header/>
        <Container>
            {content.map((item, index) => (
              <Card item={item} key={index}/>
            ))}
        </Container>   
        <Footer/>
    </>
  )
}
