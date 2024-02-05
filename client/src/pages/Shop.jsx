import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Products from '../components/products/Products';
import { useLocation } from 'react-router-dom';

const Shop = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category');

    const [products, setProducts] = useState([]);
    const data = useLoaderData();

    useEffect(() => {
        if (category) {
            const filteredProducts = data.data.filter(product => product.category.toLowerCase() === category);
            setProducts(filteredProducts);
        } else {
            setProducts(data.data);
        }
    }, [data, category]);
    
    return (
        <div>
            <Products 
                title= {category ? `Shop ${category.toUpperCase()}` : "Shop Now"}
                text="Dive into the latest trends." 
                products={products}/>
        </div>
    );
};

export default Shop;