"use client"
import Image from 'next/image'
import Link from 'next/link'
import { Heart } from 'lucide-react'

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.id}`} className="block w-full">
      <div className="bg-gray-200 rounded-2xl shadow-md p-4 w-full cursor-pointer group hover:shadow-lg transition-shadow duration-300 h-full flex flex-col relative">
        <div className="flex-1 overflow-hidden rounded-xl relative">
          <button
            className="absolute top-0 right-0 z-10 bg-white rounded-full p-1 shadow-md hover:bg-red-500 hover:text-white transition-colors"
            onClick={(e) => {
              e.preventDefault()
              console.log('Add to wishlist:', product.id)
            }}
          >
            <Heart size={20} />
          </button>

          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={300}
            className="rounded-xl object-contain w-full h-full max-h-[35vh] transition-transform duration-300 ease-in-out 
                       group-hover:scale-105"
            priority={false}
          />
        </div>

        <hr className="border-t border-gray-400 my-4" />

        <h2 className="flex-start text-base font-semibold mt-2 group-hover:text-blue-600 transition-colors duration-300">
          {product.title}
        </h2>
        <p className="text-gray-500 text-sm mt-1 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-4">
          <p className="font-bold text-sm group-hover:text-blue-600 transition-colors duration-300">
            ${product.price}
          </p>
          <button className="bg-blue-600 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded border border-black  group-hover:bg-blue-700 transition-colors duration-200">
            Add to cart
          </button>
        </div>
      </div>
    </Link>
  )
}
