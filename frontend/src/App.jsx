import { createBrowserRouter, RouterProvider} from "react-router-dom"
import { useNavigation } from "react-router-dom";
import {Home} from "./Pages/Home"
import { About } from "./Pages/about";
import { ProductDetails } from "./Pages/Product";
import { Contact } from "./Pages/contact";
import { Category } from "./Pages/Category";
import { SearchPage } from "./Pages/SearchResults";
import { NotFound } from "./Pages/NotFound";
import { Cart } from "./Pages/Cart";
import { CheckoutForm } from "./Pages/Checkout";
import { Review } from "./Pages/review";
import { Payment } from "./Pages/payment";
import { OrderSuccess } from "./Pages/success";
import { LandingPage } from "./Pages/landing";



 const router = createBrowserRouter([
   
        {
            path : "/",
            element : <Home/>
        },
          {
            path : "/about",
            element : <About/>
        },
        {
            path : "/contact",
            element : <Contact/>
        },
        {
            path : "/category/:cn",
            element : <Category/>
        },
        {
            path : "/products/:name",
            element : <ProductDetails/>
        },
         {
            path : "/search",
            element : <SearchPage/>
        },
         {
            path : "/cart",
            element : <Cart/>
        },
         {
            path : "/checkout",
            element : <CheckoutForm/>
        },
        {
            path : "/review",
            element : <Review/>
        },
         {
            path : "/payment",
            element : <Payment/>
        },
        {
            path : "/success",
            element : <OrderSuccess/>
        },
         {
            path : "/landing",
            element : <LandingPage/>
        },
        {
            path : "*",
            element : <NotFound/>
        },
       
       
    ])

    
    

    export default function App() {
        return   <RouterProvider router={router}/>
    }