import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

//Importing Pages
import {
  AddJob,
  Admin,
  AllJobs,
  DashboardLayout,
  DeleteJob,
  EditJob,
  Error,
  HomeLayout,
  Landing,
  Login,
  Profile,
  Register,
  Stats
} from './pages'

const router = createBrowserRouter([
  {
    path : '/',
    element : <HomeLayout />,
    errorElement : <Error />,
    children : [
      {
        index : true,
        element : <Landing />
      },
      {
        path : 'register',
        element : <Register />
      },
      {
        path : 'login',
        element : <Login />
      },
      {
        path : 'dashboard',
        element : <DashboardLayout />
      },
    ]
  }
]);

const App = () => {
  return <RouterProvider router = {router} />
}

export default App