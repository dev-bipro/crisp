import { useState } from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Home />}
      >
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
