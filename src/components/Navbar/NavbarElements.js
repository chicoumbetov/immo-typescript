import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS} from 'react-scroll';

export const Nav = styled.nav`
    background: none;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    box-sizing: border-box;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    height: 70px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    
`

export const NavLogo = styled(LinkR)`
    color: #fff;
    height: 50px;
    width: 320px;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    
    margin-left: 0px;
    margin-top: 10px;
    font-weight: bold;
    text-decoration: none;
`;

export const NavMenu = styled.ul`
    margin-left: auto;
    align-items: center;
    list-style: none;
    text-align: center;
    display: flex;

    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    * {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 20px;
    color: #ffffff;
    }

    @media screen and (max-width: 760px) {
        display: none;
    }

`
export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    margin-right: 0px;
    align-items: center;
    
    
    padding: 0 1rem;
    height: 100%;
    font-style: initial;
    cursor: pointer;

    
    &.active {
        border-bottom: 3px solid #01bf71;
    }
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 760px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    height: 50px;
    margin-right: 20px;
    margin-top: 5px;
    align-items: center;

    @media screen and (max-width: 760px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    outline: none;
    margin-left: 20px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
    }
`

export const Icon = styled.li`
    color: #fff;
    height: 30px;
    display: flex;
    align: right;
    cursor: pointer;
    font-size: 25px;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
    }
`