import React from 'react';
import BackFoto from '../images/immo-back.JPG';
import {
    HeroContainer,
    HeroBg, FotoBg,
    HeroContent, HeroH1,
    HeroP
} from './HeaderElements';

//1:15:00
const Header = () => {

    return (
        <HeroContainer id="home">
            <HeroBg>
                <FotoBg src={BackFoto} alt='background'/>
            </HeroBg>

            <HeroContent>
                <HeroH1>Ne passez plus à côté d’une opportunité</HeroH1>
                <HeroP>
                Prospec’Immo est la solution permettant d’optimiser sa prospection en ligne
pour les professionnels de l’immobilier : Prospecteurs Fonciers et Agences Immobilières
                </HeroP>
                
            </HeroContent>
        </HeroContainer>
    )
}

export default Header;