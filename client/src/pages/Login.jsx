import { styled } from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0.5)
        ),
        url("https://img.freepik.com/free-photo/cyber-monday-retail-sales_23-2148688493.jpg?w=1380&t=st=1693490062~exp=1693490662~hmac=d19905a0b54a946c82e60c90f216b6558fd84ba6c7edc86d9a879e98c27484dc")
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
    background-color: #b1b1b1;
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
