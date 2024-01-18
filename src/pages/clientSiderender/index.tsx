import React, { useEffect, useState } from 'react'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export interface Product {
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


const ClientSideRender = () => {
    const [products, setProducts] = useState<Product[] | null>(null);

    useEffect(() => {
    
     let controller = new AbortController();
     const signal = controller.signal

     const fetchData =async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products", { signal });
            if (response.ok) {
                const result = await response.json();
                setProducts(result)
            }
            

        } catch (error) {
            console.log(error)
        }
     }

     fetchData();
     return (() => {
        controller.abort();
     })
    }, [])

    

    
  return (
    <div className={`flex min-h-screen flex-col mt-24 items-center justify-start mx-10 p-24 ${inter.className}`}>
      <h1 className='font-bold text-violet-600 text-2xl'>Client Side Render</h1>
      <div className='grid-container mt-10'>
        {products && products.map((product) =>
        (
          <Link key={product.id} href={`/clientSiderender/product/[id]`} as={`/clientSiderender/product/${product.id}`}>
          <div className='h-[300px] items-center justify-center w-[300px] p-10 bg-fuchsia-50 rounded-md'>
            <img src={product.image} alt="product image" className='w-[150px] h-[150px] rounded-md' />
            <p className='text-center  mt-5 text-fuchsia-700'>{product.title}</p>
          </div>
          </Link>
          
        ))}
      </div>
    </div>
  )
}

export default ClientSideRender