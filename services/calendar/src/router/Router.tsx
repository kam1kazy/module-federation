// Libraries
import { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'

// Components
import App from '@/components/App'
import { LazyCalendar } from '@/pages/calendar/Calendar.lazy'

const navList = [{ url: 'calendar', component: <LazyCalendar /> }]

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
