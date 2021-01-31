import React from 'react';
//import { RiShoppingCartLine } from 'react-icons/ri';
//import { BsFillPersonLinesFill } from 'react-icons/bs';
import {
    SidebarContainer, Icon,
    CloseIcon, SidebarWrapper,
    SidebarMenu,
    SidebarLink
} from './SidebarElements';

const Sidebar = ({ toggle, isOpen }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>

                    <SidebarLink to="service" onClick={toggle}>
                        Service
                    </SidebarLink>

                    <SidebarLink to="fonctionnalite" onClick={toggle}>
                        Fonctionnalité
                    </SidebarLink>

                    <SidebarLink to="/equipe" onClick={toggle}>
                        Equipe
                    </SidebarLink>

                    <SidebarLink to="/tarifs" onClick={toggle}>
                        Tarifs
                    </SidebarLink>

                </SidebarMenu>

            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar