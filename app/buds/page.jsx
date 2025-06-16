import products from '@/data/buds.json'
import ProductCard from '@/components/ProductCard'
import Navbar from '@/Components/Navbar'

export default function MenPage() {
  return (
    <>
      <Navbar />  
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {products.map(product => (
            <div key={product.id} className="w-full flex justify-center sm:block">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}