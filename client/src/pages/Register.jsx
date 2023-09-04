import { styled } from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0.5)
    ),
    url("https://img.freepik.com/free-photo/excited-girl-scream-joy-making-fist-pump-holding-shopping-bag-rejoicing-standing-dress-ove_1258-121722.jpg?w=1380&t=st=1693324572~exp=1693325172~hmac=2ec5d08960288e7f897e219ea06d8f89a62c116d86135ed1ac8eaca384228402")
        center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 40%;
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
    flex-wrap: wrap;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    font-size: 17px;
    background-color: #fea6b0;
    color: white;
    cursor: pointer;
    transition: all 0.4s ease 0s;
    
    &:hover{
        letter-spacing: 1px;
        -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
        -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
        box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
        transition: all 0.4s ease 0s;
    }
`;

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder=" name" />
                    <Input placeholder="last name" />
                    <Input placeholder="username" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
