import { styled } from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0.5)
    ),
    url("https://img.freepik.com/free-photo/excited-girl-scream-joy-making-fist-pump-holding-shopping-bag-rejoicing-standing-dress-ove_1258-120529.jpg?w=1380&t=st=1694437792~exp=1694438392~hmac=9a63502ec6162705722906289a72e8c7c5a382a722a31d693fcd542b83be3304")
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
    border-radius: 7px;
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
    font-size: 15px;
    margin: 20px 0px;
    
`;
const Button = styled.button`
    width: 40%;
    border: 1px solid transparent;
    border-radius: 5px;
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

const Links = styled.b`
color: black;
font-size: 1rem;    
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
                        By creating an account, you can check and find all your best products <Link to="/login" ><Links><b>Have an account!</b></Links></Link> 
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
