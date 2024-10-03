import { Navbar, HeroSection, Menu  } from "@/components"
import { Timeline } from "@/components/ui/timeline"

import { timelineData } from "@/utils/data"

const GuestLayout:React.FC = () => {
    return (
        <>  
        <div className="relative  w-full">      
            <Navbar  />
            <Menu />
            <main style={{
                height: 'calc(100dvh - 30px)'
            }}>
            <HeroSection />
            {/* <Tools /> */}
            <Timeline data={timelineData} />
            </main>
        </div>
        </>
    )
}

export default GuestLayout