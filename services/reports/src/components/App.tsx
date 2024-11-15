import React, { useState } from 'react'
import * as classes from './App.module.scss'
import { Outlet, Link } from 'react-router-dom'

export default function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <div>
      <h1>REPORTS MODULE</h1>

      <br />

      <Link className={classes.link} to={'./calendar'}>
        calendar
      </Link>

      <br />

      <Link className={classes.link} to={'./reports'}>
        reports
      </Link>

      <br />
      <br />

      <Outlet />
    </div>
  )
}
