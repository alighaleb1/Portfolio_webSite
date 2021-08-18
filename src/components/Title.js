import React from 'react'
import styled from 'styled-components';

function Title({title,span}) {
    return (
        <TitleStyled>
            <h2>{title} <span>{span}</span></h2>

        </TitleStyled>
    )
}

const TitleStyled = styled.div`
    position: relative;
    h2{
        color: whitesmoke;
        font-size: 3.1rem;
        font-weight: 600;
        text-transform: uppercase;
        position: relative;
        padding-bottom: .8rem;
        &::before{
            content: "";
            bottom: 0;
            width: 7.4rem;
            height: .33rem;
            background-color: #2db9ff;
            position: absolute;
            border-radius: 15px;
            left: 0;
        }
        &::after{
            content: "";
            bottom: 0;
            width: 3.5rem;
            height: .33rem;
            background-color: #2db9ff;
            position: absolute;
            border-radius: 15px;
            left: 0;
        }
        span{
            font-weight: 900;
            color: rgba(25,29,43,.44);
            font-size: 5rem;
            position: absolute;
            left: 0;
            top: 30%;
            z-index: -1;
        }
    }
`;

export default Title
