import { lazy } from "react"

const Terminal = lazy(() => import('@/pages/terminal'))

const routes = [
    {
        key: 'terminal-mode',
        path: '/',
        element: <Terminal />
    }
]

export { routes }