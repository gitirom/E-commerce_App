import { styled } from "styled-components";
import  CategoriesItem from "./CategoriesItem";
import {categories} from "../data";

const Container = styled.div`

`;

const Categories = () => {
    return (
        <Container>
            {categories.map((item => (
                <CategoriesItem item={item} />
            )))}
        </Container>
    )
}

export default Categories
