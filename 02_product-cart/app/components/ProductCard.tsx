import Image from 'next/image'
import React from 'react'

const ProductCard = () => {
  return (
    <>
        <div className='p-2 shadow-slate-200/10 shadow-lg border-spacing-1 border-r-2 bg-slate-200 w-1/4 text-center' >
            {/* <Image src={""} className='m-2' /> */}
            <h2 className='text-lg m-2 ' >this is card title</h2>
            <p className='text-start'>this is description </p>
            <button className='bg-slate-600 border-collapse rounded-md cursor-pointer p-2 text-white hover:bg-slate-500 m-2 ' >Add To Cart</button>
        </div>
    </>
  )
}

export default ProductCard
