import { Outlet, Link } from "react-router-dom";

function Products() {
  return (
    <>
      <h1 className="text-center text-8xl font-bold">Products</h1>
      <div className="text-center flex justify-center gap-10">
        <Link to="/products/men">Men</Link>
        <Link to="/products/women">Women</Link>
      </div>
      <Outlet />
    </>
  );
}

export default Products;
