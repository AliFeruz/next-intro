import React from 'react'
import { Inter } from 'next/font/google'
import { GetStaticProps } from 'next'

const inter = Inter({ subsets: ['latin'] })

export interface Product {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
  }


type Props = {
    product: Product;
}

export const getStaticProps: GetStaticProps<Props> =async () => {
    try {
        const randomID = Math.floor(Math.random() * 19) +1;
        const response = await fetch(`https://fakestoreapi.com/products/${randomID}`);
        const result: Product = await response.json();

      return {
          props: {
              product: result,
          },
          revalidate: 1*60,
      };

    } catch (error) {
        return {
            notFound: true,
        };
    }
    
}

const staticSiteGeneration = ({product}: Props) => {
  return (
    <div className={`flex min-h-screen mt-24 flex-col items-center justify-start mx-10 p-24 ${inter.className}`}>
      <h1 className='font-bold text-violet-600 text-2xl'>Static Site Generation</h1>
          <div className='h-[300px] mt-10 items-center justify-center w-[300px] p-10 bg-fuchsia-200 rounded-md'>
            <img src={product?.image} alt="product image" className='w-[150px] h-[150px] rounded-md' />
            <p className='text-center  mt-5 text-fuchsia-700'>{product?.title}</p>
          </div>
    </div>
  )
}

export default staticSiteGeneration