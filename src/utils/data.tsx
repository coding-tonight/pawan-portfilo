import { ContactMe , MenuItem } from "@/types/global";
import { IoLogoGithub, IoLogoLinkedin, IoMdMailOpen, IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io";

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
		title: '2024-Present', 
		heading: 'Cloco Nepal',
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
		heading: 'Bachelor in Business Studies',
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
]

const contactMe: ContactMe [] = [
  {
	id: 1,
	key: 'whatsapp',
	icon: ({ styles }: any ) => (
	    <IoLogoWhatsapp className={styles} />
       ),
	link: ''
  },
  {
	id: 2,
	key: 'instagram',
	icon: ({ styles }: any ) => (
	    <IoLogoInstagram className={styles} />
       ),
	link: ''
  },
  {
	id: 3,
	key: 'linkedin',
	icon: ({ styles }: any ) => (
	    <IoLogoLinkedin className={styles} />
       ),
	link: ''
  },
  {
	id: 3,
	key: 'gmail',
	icon: ({ styles }: any ) => (
	    <IoMdMailOpen className={styles} />
       ),
	link: ''
  }
]

const menuItem: MenuItem [] = [
	{
		id: 'about',
		name: 'About',
		path: '/'
	}, 
	{
		id: 'projects',
		name: 'Projects',
		path: '/projects'
	}, 
	{
		id: 'blogs',
		name: 'Blogs',
		path: '/blogs'
	}, 
	{
		id: 'contact',
		name: 'Contact',
		path: '/contact'
	}, 
]

export { logo, navbarContext, timelineData , contactMe, menuItem }
