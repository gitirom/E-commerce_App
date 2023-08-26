import  styled  from "styled-components";
import  CategoriesItem from "./CategoriesItem";
import {categories} from "../data";

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    

`;

const Categories = () => {
    return (
        <Container>
            {categories.map((item => (
                <CategoriesItem item={item} key={item.id} />
            )))}
        </Container>
    )
}

export default Categories
