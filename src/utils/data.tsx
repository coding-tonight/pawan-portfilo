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

const timelineData = [
	{
		title: '2072-2076', 
		heading: 'Bachelor in Business Studies',
		content: 'Bachelor in Business Studies'
	},
	{
		title: '7 months', 
		heading: 'APA (Asia Population Association)',
		content: (
			<>
			  <p className="text-slate-500">
				 I joined the team as a front-end developer on a contract basis for the Asian Population Conference
				website (One time project), which will be hosted in Nepal.
				My main responsibilities included developing the dashboard, implementing the registration system, and 
				integrating APIs and a payment gateway using React.
			  </p>
			</>
		)
	},
	{
		title: '2022-2024', 
		heading: 'Autonomous Technology',
		content: 'Bachelor in Business Studies'
	},
]

export { logo, navbarContext, timelineData }
