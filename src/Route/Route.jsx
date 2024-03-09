import { createBrowserRouter } from 'react-router-dom';
import Mainlayout from '../MainLayout/Mainlayout';
import Home from '../pages/Home/Home';
import Product from './../pages/Products/Product';
import DashBoar from '../pages/DashBoard/DashBoar';
const Route = createBrowserRouter([
    {    
    path:"/",
    element: <Mainlayout></Mainlayout>,
    children:[
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/product",
            element: <Product></Product>,
        },
        {
            path:"/dashboard",
            element: <DashBoar></DashBoar>
        }
    ]
    }
])

export default Route;