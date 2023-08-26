import {styled} from 'styled-components';
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { sliderItems } from "../data";
import { useState } from 'react';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;  
    `; // overflow hidden for getting the slide in the right side not in the bottom

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
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
    `;

    const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
    `;

    const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
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
    font-size: 70px;
    `;

    const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    `;

    const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    border-radius: 5px;
    &:hover {
        background: fff7f7;
        color: black;
        letter-spacing: 1px;
        -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
        -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
        box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
        transition: all 0.4s ease 0s;
    }
    `;

    

const Slider = () => {

    const [sliderIndex, setSliderIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === "left") {
            setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 2);
        } else {
            setSliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0);
        }
    }

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")} >
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={sliderIndex} >
                {sliderItems.map((item) => (
                    <Slide bg={item.bg} key={item.id} >
                        <ImgContainer>
                            <Image src={item.img} style={{mixBlendMode: "multiply"}} /> {/*multiple for let the image get the same color with the background and this working just with white backgr..  */}
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>SHOW NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            
            <Arrow direction="right" onClick={() => handleClick("right")} >
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider

