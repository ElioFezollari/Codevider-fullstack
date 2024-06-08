
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import DefaultLayout from './DefaultLayout/DefaultLayout'
import Home from './Pages/Home'
import Dogs from './Pages/Dogs'
import Cats from './Pages/Cats'
import Birds from './Pages/Birds'
import NotFound from './Pages/NotFound'
import DogPage from './Pages/Components/AnimalComponents/AnimalPages/DogPage'
const router = createBrowserRouter([
  {
    path:'/',
    element:<DefaultLayout/>,
    errorElement: <NotFound />,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'dogs',
        element:<Dogs/>,
      },
      {
        path:'dogs/:id',
        element:<DogPage/>
      },
      {
        path:'cats',
        element:<Cats/>
      },
      {
        path:'birds',
        element:<Birds/>
      }
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
