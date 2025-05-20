import React from 'react'
import LandingPage from './LandingPage'
import { Helmet } from 'react-helmet'

function App() {
  return (
    <>
      <Helmet>
        <title>Unknown Chat Bot | Anonymous Random Chats on Telegram</title>
        <meta name="description" content="Connect with random people worldwide for anonymous chats." />
      </Helmet>
      <LandingPage />
    </>
  )
}

export default App
