import { GetServerSideProps } from 'next'
import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export interface ProductType {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: Rating
  }
  
  export interface Rating {
    rate: number
    count: number
  }

  
type Props = {
    product: ProductType;
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
      const response = await fetch("https://fakestoreapi.com/products/1");
      const result: ProductType = await response.json();

      return {
          props: {
              product: result,
          },
      };
  } catch (error) {
      return {
          notFound: true,
      };
  }
};

const serverSideRender = ({ product }: Props) => {
    console.log("Server secret", process.env.SERVER);
    console.log("Client secret", process.env.NEXT_PUBLIC_CLIENT);


  return (
    <div className={`flex min-h-screen mt-24 flex-col items-center justify-start mx-10 p-24 ${inter.className}`}>
      <h1 className='font-bold text-violet-600 text-2xl'>Server Side Render</h1>
          <div className='h-[300px] mt-10 items-center justify-center w-[300px] p-10 bg-fuchsia-200 rounded-md'>
            <img src={product.image} alt="product image" className='w-[150px] h-[150px] rounded-md' />
            <p className='text-center  mt-5 text-fuchsia-700'>{product.title}</p>
          </div>
    </div>
  )
}

export default serverSideRender