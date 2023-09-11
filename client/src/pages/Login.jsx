import { styled } from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0.5)
        ),
        url("https://img.freepik.com/free-photo/bunch-black-friday-gifts-golden-shopping-cart-with-copy-space_23-2148667040.jpg?w=1380&t=st=1694438000~exp=1694438600~hmac=843ace27b8334cb4af5e87b8ee1cdd851f759380d72ce2576751806d9a23d932")
        center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    
    `;

    const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    border-radius: 7px;
    ${mobile({ width: "75%" })}
    `;

    const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    `;

    const Form = styled.form`
    display: flex;
    flex-direction: column;
    `;

    const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
    `;

    const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    font-size: 17px;
    background-color: #777777;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    transition: all 0.4s ease 0s;
    
    &:hover{
        letter-spacing: 1px;
        -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
        -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
        box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
        transition: all 0.4s ease 0s;
    }
    `;

    const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
    `;

const Login = () => {
    return (
        <Container>
        <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Button>LOGIN</Button>
                    <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
