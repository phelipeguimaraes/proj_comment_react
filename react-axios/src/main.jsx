import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// páginas
import AddComment from './routes/AddComment.jsx'
import Comment from './routes/Comment.jsx'

import {createBrowserRouter, RouterProvider, Route} from "react-router-dom"
import UserComment from './routes/UserComment.jsx'


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Comment />
      },
      {
        path: "/add",
        element: <AddComment />
      },
      {
        path:"/comment/:id",
        element: <UserComment />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
