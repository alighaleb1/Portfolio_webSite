import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function PrimeButton({title, contactbutton}) {
    return (
        <PrimaryButtonStyled>
                        <NavLink to='/resume' activeClassName='active-class' exact>{title}</NavLink>
                        {contactbutton}
        </PrimaryButtonStyled>
    )
}

const PrimaryButtonStyled = styled.a`
    background-color: #2db9ff;
    padding: 0.8rem 2.5rem;
    color: white;
    cursor: pointer;
    display: in-line block;
    font-size: inherit;
    text-transform: uppercase;
    position: relative;
    transition: all .4s ease-in-out;
    

    &:hover:after{
        content: "";
        position: absolute;
        width: 100%;
        height: 6%;
        background-color: whitesmoke;
        left: 0;
        bottom: 0;
        transition: all .4s ease-in-out;
    }

`;


export default PrimeButton
