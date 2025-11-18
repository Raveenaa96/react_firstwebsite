import { BrowserRouter, Routes,Route } from "react-router-dom";
import { HomePage } from "../Pages/home/HomePage"
import { AboutPage } from "../Pages/about/AboutPage"
import { ContactPage } from "../Pages/contact/ContactPage"
import { BlogPage } from "../Pages/blogs/BlogPage"
import { NoPagefound } from "../coreComponents/NoPageFound/NoPagefound";
import {DashboardPage} from "../Pages/dashboard/DashboardPage"
import {ViewProduct} from "../Pages/viewProduct/ViewProduct"
import { ProductListing } from "../Pages/productListing/ProductListing";

export function RouterOutlet() {
    return <div>
        <Routes>
            {/* Default- page- setting- start */}
            <Route index element={<HomePage />}></Route>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/home" element={<HomePage />}></Route>
             {/* Default- page- setting- end */}
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
            <Route path="/dashboard" element={<DashboardPage />}></Route>
            <Route path="/blog" element={<BlogPage />}></Route>
            <Route path="*" element={<NoPagefound />}></Route>
            <Route path="/products" element={<ProductListing />}></Route>
            <Route path="viewProduct" element={<ViewProduct />}></Route>
            <Route path="viewProduct/:id" element={<ViewProduct />}></Route>
            <Route path="viewProduct/:id/:name" element={<ViewProduct />}></Route>
        </Routes>
</div>
}
