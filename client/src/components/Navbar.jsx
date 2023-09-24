import React, { useState } from 'react';
import  { Search, ShoppingCartOutlined} from '@material-ui/icons';
import styled from 'styled-components';
import { Badge } from '@material-ui/core';
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import { clearPersistedState } from '../Redux/Store';
import { logout } from '../Redux/userRedux';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    border-radius: 38px !important ;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 8px;
    width: 230px;
`;

const Input = styled.input`
    border: none;
    font-size: 16px;
    ${mobile({ width: "50px" })}
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const settings = ['Profile', 'Dashboard', 'Logout'];

const Navbar = () => {
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);
    const [menuOpen, setMenuOpen] = useState(false);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const quantity = useSelector(state => state.cart.quantity); //access reducer elem

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const logoutIndex = settings.findIndex((settings) => settings === 'Logout' );

    const handleLogout = () => {  
        dispatch(logout());
        clearPersistedState();
        
            window.location.replace('http://localhost:3000/login');
            toast.success("Logout Successful 👌");
    }

    return (
        <Container>
            <Wrapper>
                <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder="Search..." />
                    <Search style={{ color: "gray", fontSize: 18, right: "-20px"}} />
                </SearchContainer>
                </Left>
                <Center>
                <Logo>ROM.</Logo>
                </Center>
                <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                        >
                        {settings.map((setting, index) => (
                            <MenuItem style={{ width: "140px" }} key={setting} onClick={index === logoutIndex ? handleLogout : handleCloseUserMenu}>
                            <Typography style={{
                                fontSize: "1.2rem",
                                padding: "8px 0px",
                                }} >{setting}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                    </Box>
                </MenuItem>
                
                <MenuItem>
                    <Link to="/cart" >
                        <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </Link>
                </MenuItem>
                </Right>
            </Wrapper>
    </Container>
        
    )
}

export default Navbar
