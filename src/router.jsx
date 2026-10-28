import { createBrowserRouter } from "react-router";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Category from "./pages/Category/Category";
import Checkout from "./pages/Checkout/Checkout";
import ErrorPage from "./pages/ErroPage/ErrorPage";
import Favorites from "./pages/Favorites/Favorites";
import Login from "./pages/Login/Login";
import OrderConfermation from "./pages/OrderConfermation/OrderConfermation";
import ProductDetails from "./pages/Product/ProductDetails";
import ProfileInfo from "./pages/ProfileInfo/ProfileInfo";
import ProfileMyOrder from "./pages/ProfileMyOrder/ProfileMyOrder";
import Register from "./pages/Register/Register";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import SearchResult from "./pages/SearchResult/SearchResult";
import SendCode from "./pages/SendCode/SendCode";
import Mainlayout from "./component/MainLayOut";
import AuthLayout from "./component/AuthLayout";



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
                path: 'Cart',
                element: <Cart />
            },
             {
                path: 'Category/:id',
                element: <Category />
            }, {
                path: 'Checkout',
                element: <Checkout />
            }, {
                path: 'ErrorPage',
                element: <ErrorPage />
            }, {
                path: 'Favorites',
                element: <Favorites />
            }, {
                path: 'OrderConfermation',
                element: <OrderConfermation />
            }, {
                path: 'ProductDetails',
                element: <ProductDetails />
            }, {
                path: 'ProfileInfo',
                element: <ProfileInfo />
            }, {
                path: 'ProfileMyOrder',
                element: <ProfileMyOrder />
            }, {
                path: 'SearchResult',
                element: <SearchResult />
            }
        ]
    },
    {
        element: <AuthLayout />,
        children:[
            {
                path:'/Login',
                element: <Login />
            },{
                path:'/Register',
                element: <Register />
            },{
                path:'/SendCode',
                element: <SendCode />
            },{
                path:'/ResetPassword',
                element: <ResetPassword />
            }
        ]
    }

]);

export default router;