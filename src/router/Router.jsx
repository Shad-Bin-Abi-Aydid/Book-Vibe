import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Dashboard from "../components/Dashboard";
import BookDetails from "../components/BookDetails";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'books/:bookId',
                element:<BookDetails></BookDetails>,
                loader: ()=> fetch('/booksData.json'),

            },
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>

            }
        ]
    }

])
export default routes;