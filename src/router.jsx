import { createBrowserRouter } from "react-router";
import Home from "./pages/home/Home";
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
                path: 'Category',
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
                path: 'Login',
                element: <Login />
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
                path: 'Register',
                element: <Register />
            }, {
                path: 'ResetPassword',
                element: <ResetPassword />
            }, {
                path: 'SearchResult',
                element: <SearchResult />
            }, {
                path: 'SendCode',
                element: <SendCode />
            }

        ]
    }

]);

export default router;