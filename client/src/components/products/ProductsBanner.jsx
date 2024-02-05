import { ProductsHome1, ProductsHome2, ProductsHome3 } from "../../assets/Assets";
import ProductsCategories from "./ProductsCategories";

const Products = () => {
    return (
        <div className="py-2 h-full flex flex-col lg:flex-row gap-2 m-4 md:m-0">
                <ProductsCategories productName={ProductsHome1} text="WOMEN" to={"/shop"}/>
                <ProductsCategories productName={ProductsHome2} text="MEN" to={"/shop"}/>
                <ProductsCategories productName={ProductsHome3} text="KIDS" to={"/shop"}/>
        </div>
    );
};

export default Products;
