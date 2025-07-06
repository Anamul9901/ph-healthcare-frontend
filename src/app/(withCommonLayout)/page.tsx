import HeroSection from "@/components/Shared/UI/HomePage/HeroSection/HeroSection"
import Specialist from "@/components/Shared/UI/HomePage/Specialist/Specialist"
import TopRatedDoctors from "@/components/Shared/UI/HomePage/TopRatedDoctors/TopRatedDoctors"

const page = () => {
  return (
    <div>
      <HeroSection />
      <Specialist />
      <TopRatedDoctors />
    </div>
  )
}

export default page
