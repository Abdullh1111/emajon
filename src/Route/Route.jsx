import { createBrowserRouter } from 'react-router-dom';
import Mainlayout from '../MainLayout/Mainlayout';
import Home from '../pages/Home/Home';
import Product from './../pages/Products/Product';
import DashBoar from '../pages/DashBoard/DashBoar';
import Productroute from '../pages/Productroute/Productroute';
import Dashboards from '../pages/Dashboards/Dashboards';
import Profile from '../pages/Dashboards/Profile';
import EditProfile from '../pages/Dashboards/EditProfile';
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
            loader: ()=>fetch("https://dummyjson.com/products"),
        },
        {
            path: "/product/:id",
            element: <Productroute></Productroute>,
            loader: ({params})=> fetch(`https://dummyjson.com/products/${params.id}`)
        },
        {
            path:"/dashboard",
            element: <DashBoar></DashBoar>,
            children:[
                {
                    path: "/dashboard",
                    element: <Dashboards></Dashboards>,
                },
                {
                    path: "/dashboard/profile",
                    element: <Profile></Profile>
                },
                {
                    path:"/dashboard/editprofile",
                    element: <EditProfile></EditProfile>
                }
            ]
        }
    ]
    }
])

export default Route;