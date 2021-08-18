import React from 'react'
import styled from 'styled-components';

function SmallTitle({icon, title}) {
    return (
        <SmallTitleStyled>
            <p> <img src={icon} alt='logo' width='50' height='50' /> </p>
            <h3> {title} </h3>
        </SmallTitleStyled>
    )
}

const SmallTitleStyled = styled.div`
    display: flex;
    align-items: center;
    
    p{
        padding-right: 1rem;
        font-size: 2rem;
        img{
            border-radius: 100%;
            
        }
    }
    h3{
        color: whitesmoke;
        font-size: 2rem;
    }
`;

export default SmallTitle
