import { lazy } from "react"

import TerminalContextProvider from "@/context/TerminalContext"
const Terminal = lazy(() => import('@/pages/Terminal'))
const Home = lazy(() => import('@/pages/Home'))
const Projects = lazy(() => import('@/pages/Projects'))
const About = lazy(() => import('@/pages/About'))
const Blogs = lazy(() => import('@/pages/Blogs'))

const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/projects',
        element: <Projects />
    },
    {
        path: '/blogs',
        element: <Blogs />
    },
    {
        path: '/contact',
        element: <About />
    },
    {
        path: '/terminal',
        element: (
            <TerminalContextProvider>
                <Terminal />
            </TerminalContextProvider>
        )
    }
]

export { routes }