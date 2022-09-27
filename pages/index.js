import Head from 'next/head'
import AppLayout from '../components/AppLayout'
import Button from '../components/Button'
import { colors } from '../styles/theme'

export default function Home() {
  return (
    <>
      <Head>
        <title>devter 🐧</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <section>
          <img src="/logo.png" alt="loco" />
          <h1>Twitter Clone</h1>
          <h2>Talk about development<br /> with developers 👩‍💻👨‍💻</h2>
          <div>
            <Button>Login with GitHub</Button>
          </div>
        </section>
      </AppLayout>

      <style jsx>{`
          img{
            width: 120px;
          }
          section {
            display: grid;
            height: 100%;
            place-items: center;
            place-content: center;
          }
          h1 {
            color: ${colors.primary};
            font-weight: 800;
            margin-bottom: 16px;
          }
          h2 {
            color: ${colors.secondary};
            font-size: 21px;
            margin: 0;
          }
        `}</style>
    </>
  )
}
