import { Navbar, HeroSection, Menu  } from "@/components"
import { Timeline } from "@/components/ui/timeline"

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
            <Timeline data={[
                { title: 'Student', content: 'Business Studies'},
                { title: 'Frontend Developer', content: 'APA (Asia Population Association)'},
                { title: 'Full Stack Developer', content: 'APA (Asia Population Association)'}]} />
            </main>
        </div>
        </>
    )
}

export default GuestLayout