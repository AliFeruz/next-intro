import Head from 'next/head'
import React from 'react'

const Profile = () => {
  return (
    <>
    <Head>
        <title>Profile</title>
    </Head>
    <div className='flex min-h-screen mt-24 flex-col items-center justify-start mx-10 p-24'>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
    </>
  )
}

export default Profile
