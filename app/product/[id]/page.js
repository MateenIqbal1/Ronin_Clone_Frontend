
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Navbar from '@/Components/Navbar'

import airbudsProducts from '@/data/buds.json'
import handfreeProducts from '@/data/handfree.json'
import neckProducts from '@/data/neck.json'

const allProducts = [
  ...airbudsProducts,
  ...handfreeProducts,
  ...neckProducts
]

export default function ProductDetail({ params }) {
  const { id } = params
  
  const product = allProducts.find(p => p.id.toString() === id)
  
  if (!product) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                    {product.title}
                  </h1>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                      {'★'.repeat(5)}
                    </div>
                    <span className="text-gray-600 text-sm">206 reviews</span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-bold text-gray-900">
                      ${product.price}
                    </span>
                    <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Sold Out
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="pt-4">
                    <button 
                      className="w-full bg-[#4a4a4a] hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-200 text-md"
                      disabled
                    >
                      Currently Sold Out
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="relative bg-gradient-to-br from-blue-100 via-purple-50 to-green-100 flex items-center justify-center p-8">
                <div className="relative w-full max-w-md">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={500}
                    height={400}
                    className="w-full h-auto object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </main>
    </>
  )
}