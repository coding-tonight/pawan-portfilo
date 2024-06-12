import { lazy } from "react"

const Terminal = lazy(() => import('@/pages/terminal'))
const GuestLayout = lazy(() => import('@/layouts/GuestLayout'))

const routes = [
    {
        path: '/',
        element: <GuestLayout />
    },
    {
        path: '/terminal',
        element: <Terminal />
    }
]

export { routes }