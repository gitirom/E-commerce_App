import {styled} from 'styled-components';
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;

`;

const Arrow = styled.div` 
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px" }; 
    right: ${props => props.direction === "right" && "10px" }; 
    margin: auto;
    cursor: pointer;
    opacity: 0.5;

`; // if direction left, left will be 10px 

const Wrapper = styled.div`
    height: 100%;
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const Image = styled.img`
    height: 80%;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    
`;
const Desc = styled.p`

`;
const Button = styled.button`

`;

const Slider = () => {
    return (
        <Container>
            <Arrow direction="left" >
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper>
                <Slide>
                    <ImgContainer>
                        <Image src="https://img.freepik.com/free-photo/summer-portrait-cheerful-red-haired-lady-fashionable-outfit-having-fun-pink_273443-4440.jpg?w=360" />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>SUMMER SAL</Title>
                        <Desc>Fashion Nova is the top online fashion store for women</Desc>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction="right" >
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider

