import React from "react"
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"
import Home from "./pages/Home"
import { routes } from "./routes"
import Posts from "./pages/Posts"
import Albums from "./pages/Albums"
import { ErrorBoundary } from "react-error-boundary";

const ErrorBoundaryLayout = () => (
    <ErrorBoundary FallbackComponent={() => <div>ERROR</div>}>
      <Outlet />
    </ErrorBoundary>
);

export const router = createBrowserRouter([
  {
    element: <ErrorBoundaryLayout />,
    children: [
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
      {
        path: "*",
        element: <Home />,
      },
    ],
  },
]);
// const router = createBrowserRouter([
//   {
//     path: routes.home.path,
//     element: <Home />,
//   },
//   {
//     path: routes.albums.path,
//     element: <Albums />,
//   },
//   {
//     path: routes.posts.path,
//     element: <Posts />,
//   },
// ],{basename: "/"})

function App() {
  return <RouterProvider router={router} />
}

export default App
