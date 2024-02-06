import { ProductsHome1, ProductsHome2, ProductsHome3 } from "../../assets/Assets";
import ProductsCategories from "./ProductsCategories";

const Products = () => {
    return (
        <div className="py-2 flex flex-col lg:flex-row gap-2 w-full h-full lg:h-4/5">
            <ProductsCategories productName={ProductsHome1} text="WOMEN" to={"/shop"}/>
            <ProductsCategories productName={ProductsHome2} text="MEN" to={"/shop"}/>
            <ProductsCategories productName={ProductsHome3} text="KIDS" to={"/shop"}/>
        </div>
    );
};

export default Products;
