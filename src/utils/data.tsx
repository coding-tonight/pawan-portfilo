import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

const navbarContext = {
	logo: '',
	socialMedia: [
		{
			icon: <IoLogoGithub className="h-[20px] w-[20px]" />,
			key: 'linkedin'
		},
		{
			icon: <IoLogoLinkedin className="h-[20px] w-[20px]" />,
			key: 'github'
		}
	]
}


const logo: string = `
 ________  ________  ___       __   ________  ________      
|\   __  \|\   __  \|\  \     |\  \|\   __  \|\   ___  \    
\ \  \|\  \ \  \|\  \ \  \    \ \  \ \  \|\  \ \  \\ \  \   
 \ \   ____\ \   __  \ \  \  __\ \  \ \   __  \ \  \\ \  \  
  \ \  \___|\ \  \ \  \ \  \|\__\_\  \ \  \ \  \ \  \\ \  \ 
   \ \__\    \ \__\ \__\ \____________\ \__\ \__\ \__\\ \__\
    \|__|     \|__|\|__|\|____________|\|__|\|__|\|__| \|__
`

export { logo, navbarContext }
