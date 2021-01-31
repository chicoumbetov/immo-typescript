import { Nav, NavLinks,
    NavbarContainer, 
    NavLogo, NavMenu, 
    NavItem, MobileIcon
   } from './NavbarElements';
import logo from "./images/logo-prospec-immo.png";
import { FaBars} from 'react-icons/fa';

const Navbar = ({toggle}: any) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/product">{<img src={logo} className="logo-image" alt="logo"/>}</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>

                        <NavItem>
                            <NavLinks to="service">Service</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="fonctionnalite">Fonctionnalité</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/equipe">Equipe</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/tarifs">Tarifs</NavLinks>
                        </NavItem>
                    </NavMenu>
                    
                </NavbarContainer>
                
            </Nav>
        </>
    )
}

export default Navbar