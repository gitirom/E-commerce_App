import {styled} from "styled-components";
import {popularProducts} from "../data";
import Product from "./Product";
import axios from "axios";
import { useEffect, useState } from "react";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({cat, filters, sort}) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);


    useEffect(() => {
        const getProducts = async () => {
        try {
            const res = await axios.get(
            cat
                ? `http://localhost:5000/api/products?category=${cat}`   //if there is category return it
                : "http://localhost:5000/api/products"
            );
            setProducts(res.data);
        } catch (err) {}
        };
        getProducts();
    }, [cat]);

    useEffect(() => {
        cat &&
            setFilteredProducts(
            products.filter((item) =>
                Object.entries(filters).every(([key, value]) =>
                item[key].includes(value)
            )
            )
        );
    }, [products, cat, filters]);

    useEffect(() => {
        if ((sort === "newest")) {
            setFilteredProducts((prev) => 
            [...prev].sort((a, b) => a.createdAt - b.createdAt)   //this gone render the newest products
            );
        } else if ((sort === "asc")) {
            setFilteredProducts((prev) => 
            [...prev].sort((a, b) => a.price - b.price)   
            );
        } else {
            setFilteredProducts((prev) => 
            [...prev].sort((a, b) => b.createdAt - a.createdAt)   //this gone render the lower price
            );
        }
    }, [sort]);


    return (

    <Container>
        { cat ? filteredProducts.map((item) => (
            <Product item={item} key={item.id} />
        )) : products.slice(0,10).map((item) => (
            <Product item={item} key={item.id} />
        ))}
    </Container>
    )
}

export default Products
