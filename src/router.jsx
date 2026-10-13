import { createBrowserRouter } from "react-router";
import Home from "./pages/home/Home";
import Products from "./pages/Products";
import Mainlayout from "./components/Mainlayout";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'Products',
                element: <Products />
            }

        ]
    }

]);

export default router;