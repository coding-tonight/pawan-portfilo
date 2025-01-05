import { Navbar, Menu, Footer } from "@/components"
import { ChildrenNode } from "@/types/global"


const GuestLayout = ({ children }: ChildrenNode) => {
    return (
        <>  
            <Menu />
            <div className="relative w-full">      
                <Navbar  />
                <main style={{
                    minHeight: 'calc(100dvh - 60px)'
                }}>
                  { children }
                </main>
                 <Footer />
            </div>
        </>
    )
}

export default GuestLayout