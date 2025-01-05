import { lazy } from "react"

import TerminalContextProvider from "@/context/TerminalContext"
const Terminal = lazy(() => import('@/pages/Terminal'))
const About = lazy(() => import('@/pages/About'))
const Projects = lazy(() => import('@/pages/Projects'))
const Contact = lazy(() => import('@/pages/Contact'))
const Blogs = lazy(() => import('@/pages/Blogs'))

const routes = [
    {
        path: '/',
        element: <About />
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
        element: <Contact />
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