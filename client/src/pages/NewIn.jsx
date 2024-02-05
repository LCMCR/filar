import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Products from '../components/products/Products';

const NewIn = () => {

    const [newInProducts, setNewInProducts] = useState([]);
    const data = useLoaderData();
    console.log(data);

    useEffect(() => {
        const newInProductsData = data.data.filter(product => product.isNew);
        setNewInProducts(newInProductsData);
    }, [data]);
    
    return (
        <div>
            <Products 
                title="Welcome to Our Latest Arrivals" 
                text="Stay ahead of the curve and be the first to shop our latest releases. Whether you're looking for seasonal essentials, statement pieces, or everyday favorites, you'll find a curated selection of top-quality items that embody the latest trends and styles." 
                products={newInProducts}
            />
        </div>
    );
};

export default NewIn;