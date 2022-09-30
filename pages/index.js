import Head from 'next/head'
import AppLayout from '../components/AppLayout'
import Button from '../components/Button'
import { GitHub } from '../components/Icons/GitHub'
import { colors } from '../styles/theme'
import {loginWithGithub, onAuthStateChanged} from '../firebase/client';
import { useEffect, useState } from 'react'




export default function Home() {
  const [ userGithub, setUserGithub] = useState(null)
  /* useEffect(()=>{
    onAuthStateChanged(setUserGithub)
  },[]) */
  const handleClick = () =>{
    loginWithGithub().then(user=>{
      setUserGithub(user);
    })
  }
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
            {
              userGithub === null ?
              <Button onClick={handleClick}>
               <GitHub width={24} height={24} />
               Login with GitHub
              </Button>
              : <div>
                <img src={userGithub.avatar} />
                <strong>{userGithub.name}</strong>
              </div>
            }

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
            color: ${colors.secondary};
            font-weight: 800;
            margin-bottom: 16px;
          }
          h2 {
            color: ${colors.primary};
            font-size: 21px;
            margin: 0;
          }
        `}</style>
    </>
  )
}
