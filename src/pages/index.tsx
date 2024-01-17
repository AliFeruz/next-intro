import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className={`flex min-h-screen flex-col items-center justify-center mx-10 p-24 ${inter.className}`}
    >
     <h1 className="text-3xl text-center text-blue-600 font-bold underline">
      Hello world!
    </h1>
    </div>
    </>
    
  )
}
