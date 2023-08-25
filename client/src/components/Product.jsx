import {styled} from "styled-components";
import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
} from "@material-ui/icons";

const Container = styled.div`
    flex: 1;
    margin:5px;
    min-width: 250px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Circle = styled.div`

`;
const Image = styled.img`
    height: 57%;

`;
const Info = styled.div`

`;
const Icon = styled.div`

`;

const Product = ({item}) => {
    return (
    <Container>
        <Circle />
        <Image src={item.img} />
        <Info>
            <Icon>
                <ShoppingCartOutlined />
            </Icon>
            <Icon>
                <SearchOutlined />
            </Icon>
            <Icon>
                <FavoriteBorderOutlined />
            </Icon>
        </Info>
    </Container>
    )
}

export default Product
