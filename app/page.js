
import HomeSection from '@/Components/HomeSections'
import Navbar from '@/Components/Navbar'
import Slider from '@/components/Slider'



export default function Home() {
  return (
    <div>
  
         <Navbar />
    
      <div className="mt-2">
        <Slider />
      </div>
      <div className="text-center mt-6 text-3xl font-semibold text-[#4a4a4a]">
        Welcome to Ronin - Best Sounds to comfort Ears!
        <HomeSection />
      </div>
    </div>
  )
}
