import { styled } from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { login } from "../Redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0.5)
        ),
        url("https://images.pexels.com/photos/5622874/pexels-photo-5622874.jpeg")
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
    padding: 18px;
    font-size: initial;
    `;

    const Button = styled.button`
    width: 40%;
    border: 1px solid transparent;
    border-radius: 5px;
    padding: 15px 20px;
    font-size: 17px;
    background-color: #777777;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    transition: all 0.4s ease 0s;
    
    &:disabled {
        cursor: not-allowed;
    }

    &:hover{
        letter-spacing: 1px;
        -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
        -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
        box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
        transition: all 0.4s ease 0s;
    }
    
    `;

    const Links = styled.a`
        margin: 5px 0px;
        font-size: 12px;
        text-decoration: underline;
        cursor: pointer;
        color: black;
        font-size: 0.95rem;
    `;

    const Error = styled.div`
        color: red;
    `;

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { email, password });
        
        if (login) {
            toast.success("Login Successful 👌");
        }
        
    };

    

    return (
        <Container>
        <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="email" onChange={(e) => setEmail(e.target.value) } />
                    <Input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value) } />
                    <Button onClick={handleClick} disabled={isFetching} >LOGIN</Button>
                    {error && <Error>Something went wrong...</Error>}
                    <Links>DO NOT YOU REMEMBER THE PASSWORD?</Links>
                    <Link to="/register" >
                        <Links>CREATE A NEW ACCOUNT</Links>
                    </Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
