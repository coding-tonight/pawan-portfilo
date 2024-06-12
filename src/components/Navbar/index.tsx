import { Link } from "react-router-dom"
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar"
import { Button } from "../ui/button"

import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { RxMoon, RxSun } from "react-icons/rx";

const Navbar: React.FC = () => {
    return (
        <header className="flex container justify-between p-2 mx-auto shadow-sm w-[95%]">
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>PM</AvatarFallback>
            </Avatar>

            <nav className="flex">
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
               <Button variant='ghost' size="icon">
                 <Link to={'/'}>
                  <RxMoon  className="h-[20px] w-[20px]" />
                 </Link>
               </Button>
            </nav>
        </header>
    )
}

export default Navbar