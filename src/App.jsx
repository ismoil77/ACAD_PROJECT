
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home';
import Layout from './Layout/Layout';
import NotFoundPages from './Pages/NotFoundPages';
import Products from './Pages/Products';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    
      {
        path: "/Products",
        element: <Products />,
      },
      {
        path: "*",
        element: <NotFoundPages />,
      },
    ],
  },
]);

function App() {


  return (
    <RouterProvider router={router} />
  )
}

export default App
