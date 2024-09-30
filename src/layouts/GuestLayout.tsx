import { Navbar, HeroSection, Menu } from "@/components"

const GuestLayout:React.FC = () => {
    return (
        <>  
        <Navbar  />
        <main style={{
           height: 'calc(100dvh - 30px)'
        }}>
          <HeroSection />
          <Menu />
          {/* <Tools /> */}
        </main>
        <footer> this is footer</footer>
        </>
    )
}

export default GuestLayout