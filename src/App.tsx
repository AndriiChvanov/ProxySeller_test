import React from "react"
import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import { routes } from "./routes"
import Posts from "./pages/Posts"
import Albums from "./pages/Albums"

const router = createBrowserRouter([
  {
    path: routes.home.path,
    element: <Home />,
  },
  {
    path: routes.albums.path,
    element: <Albums />,
  },
  {
    path: routes.posts.path,
    element: <Posts />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
