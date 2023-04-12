import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import AppliedJobs from './components/AppliedJobs'
import Blog from './components/Blog'
import Statistics from './components/Statistics'
import ErrorPage from './components/ErrorPage'
import JobDetails from './components/JobDetails'
import jobLoader from './loader/jobsLoader'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('datas.json/')
      },
      {
        path: '/:id',
        element: <JobDetails></JobDetails>,
        loader:({params})=> 
        fetch("/datas.json")
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/appliedJobs',
        element: <AppliedJobs></AppliedJobs>,
        loader: jobLoader
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
