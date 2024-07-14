import { Navbar, HeroSection } from "@/components"

const GuestLayout:React.FC = () => {
    return (
        <>  
        <Navbar  />
        <main>
          <HeroSection />
        </main>
        <footer> this is footer</footer>
        </>
    )
}

export default GuestLayout