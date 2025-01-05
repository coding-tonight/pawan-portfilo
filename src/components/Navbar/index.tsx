import { Link } from "react-router-dom"

import { Button } from "../ui/button"
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { RxMoon, RxSun, RxCube } from "react-icons/rx";


const Navbar: React.FC = () => {
    return (
        <header className="shadow-sm">
            <section className="flex container justify-between p-2 mx-auto w-[95%]">
                <h5 className="flex items-center gap-2">
                    <Link to='/'>
                        <RxCube className="h-[40px] w-[34px]" />
                    </Link>
                </h5>

                <nav className="flex">  
                <Button variant='ghost' size="icon">
                    <Link to={'/'}>
                    {/* <RxMoon  className="h-[20px] w-[20px]" /> */}
                    <RxSun className="h-[20px] w-[20px]" />
                    </Link>
                </Button>
                <Button variant='ghost' size="icon">
                    <Link to={'/'}>
                    <IoLogoGithub  className="h-[20px] w-[20px]"/>
                    </Link>
                </Button>
                <Button variant='ghost' size="icon">
                    <Link to={'/'}>
                    <IoLogoLinkedin  className="h-[20px] w-[20px]" />
                    </Link>
                </Button>
                </nav>
            </section>
        </header>
    )
}

export default Navbar