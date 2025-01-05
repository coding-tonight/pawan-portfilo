import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import '@/assets/scss/base.scss'

import { routes } from './router/routes';

const router = createBrowserRouter([
  ...routes
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<h1>loading..</h1>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>,
)
