import './index.css'
import Home from './pages/Home'
import AnnouncementBar from './components/static/AnnouncementBar';
import Header from './components/static/Header';
import Footer from './components/static/Footer';
import Cart from './pages/Cart';
import Shop from './pages/Shop';
import Product from './components/products/Product';
import NewIn from './pages/NewIn';
import Checkout from './pages/Checkout';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { productsData } from './api/Api';
import Login from './pages/Login';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const initialOptions = {
  "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID,
  currency: "USD",
  intent: "capture",
};

const Layout = () => {
  return (
    <div>
      <AnnouncementBar title="Sail into our store!"/>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
        loader: productsData,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/new-in",
        element: <NewIn />,
        loader: productsData,
      },
    ]
  },
]);

function App() {
  return (
    <PayPalScriptProvider options={initialOptions}>
      <div className='font-bodyFont flex flex-col min-h-screen'>
        <RouterProvider router={router}/>
      </div>
    </PayPalScriptProvider>
  );
}

export default App;

