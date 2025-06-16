'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import ProductCard from '@/components/ProductCard'

const BASE_URL = 'http://localhost:1337'
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzUwMDA0OTI0LCJleHAiOjE3NTI1OTY5MjR9.zsK1y8Y9M4w3qKr8QiU9Lx9TaF9lqsctQ3IhTUpBQrE' // replace with actual token

function SectionHeader({ title, href }) {
  return (
    <div className="flex items-center justify-between mb-8">
      <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
      <Link
        href={href}
        className="text-blue-600 hover:text-blue-800 font-medium text-lg hover:underline transition-colors duration-200"
      >
        View All →
      </Link>
    </div>
  )
}

export default function HomeSection() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/products`, {
          headers: {
            'Authorization': `Bearer ${TOKEN}`,
            'Content-Type': 'application/json'
          }
        })

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }

        const data = await res.json()
        console.log("Fetched Products:", data)
        setProducts(data.data)
      } catch (err) {
        console.error("Error fetching products:", err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const airbuds = products.filter(p => p.category === 'buds')
  const handsfree = products.filter(p => p.category === 'handfree')
  const neck = products.filter(p => p.category === 'neck')

  if (loading) return <div className="text-center py-12">Loading products...</div>
  if (error) return <div className="text-center py-12 text-red-500">Error: {error}</div>

  const getImageUrl = (product) => {
    const url = product.image?.url
    return url ? `${BASE_URL}${url}` : 'https://via.placeholder.com/300x300?text=No+Image'
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
      <section>
        <SectionHeader title="AirBuds" href="/buds" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {airbuds.slice(0, 4).map(product => (
            <ProductCard
              key={product.id}
              product={{
                id: product.id,
                title: product.title,
                description: product.description,
                price: product.price,
                image: getImageUrl(product)
              }}
            />
          ))}
        </div>
      </section>

      <section>
        <SectionHeader title="Handsfree" href="/handfree" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {handsfree.slice(0, 4).map(product => (
            <ProductCard
              key={product.id}
              product={{
                id: product.id,
                title: product.title,
                description: product.description,
                price: product.price,
                image: getImageUrl(product)
              }}
            />
          ))}
        </div>
      </section>

      <section>
        <SectionHeader title="Neck" href="/neck" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {neck.slice(0, 4).map(product => (
            <ProductCard
              key={product.id}
              product={{
                id: product.id,
                title: product.title,
                description: product.description,
                price: product.price,
                image: getImageUrl(product)
              }}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
