import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import ProductsMen from "./pages/ProductsMen";
import ProductsWomen from "./pages/ProductsWomen";
import DynamicRouting from "./pages/DynamicRouting";
import FetchFromDynamicRouting from "./pages/FetchFromDynamicRouting";

function RoutesPages() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />}>
          <Route path="men" element={<ProductsMen />} />
          <Route path="women" element={<ProductsWomen />} />
        </Route>
        <Route path="/contact" element={<Contact />} />

        <Route path="/dynamic" element={<DynamicRouting />} />
        <Route path="/dynamic/:haha" element={<FetchFromDynamicRouting />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default RoutesPages;
