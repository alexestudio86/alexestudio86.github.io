import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { NotFound } from "../components/NotFound";
import App from '../App';
import { Pages } from "../layout/Pages";
import { MyWork } from "../pages/MyWork";


export const rutas = createBrowserRouter([
    {
        element:    <Layout />,
        path:       '/',
        errorElement:   <NotFound />,
        children: [
            {
                index:      true,
                element:    <App />
            },{
                element:    <Pages />,
                path:       '',
                children:   [
                    {
                        element:    <MyWork />,
                        path:       'MyWork'
                    }
                ]
            }
        ]
    }
])