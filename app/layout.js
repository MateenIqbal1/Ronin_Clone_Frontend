import Navbar from '@/Components/Navbar'
import './globals.css'

export const metadata = {
  title: 'My Store',
  description: 'Next.js E-commerce App'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       
        {children}
      </body>
    </html>
  )
}
