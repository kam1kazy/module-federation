// Libraries
import { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'

// Components
import App from '@/components/App'
import { LazyReports } from '@/pages/reports/Reports.lazy'

const navList = [{ url: 'reports', component: <LazyReports /> }]

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: navList.map((item) => ({
      path: `/${item.url}`,
      element: (
        <Suspense fallback={<div>Loading...</div>}>{item.component}</Suspense>
      ),
    })),
  },
])
