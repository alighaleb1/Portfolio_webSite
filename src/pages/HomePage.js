import React from 'react'
import styled from 'styled-components';
import { GitHub } from '@material-ui/icons';
import { LinkedIn } from '@material-ui/icons';

function HomePage() {
    return (
        <HomePageStyled>
            <div className='p'>
                
            </div>
            <div className='typography'>
                <h1>Hi I'm  <span>Ali Ghaleb</span></h1>
                <p>
                   As a upcoming graduate with a bachelors degree in computer science student at Eastern Michigan University I have decided to create this portfolio website
                   to showcase my life accomplishments and skills.  
                </p>
                <div className='icons'>
                    <a href='https://www.linkedin.com/in/ali-ghaleb-1137a9211/' className='links'><LinkedIn  className='linkined' width='70' height='70' /></a>
                    <a href='https://github.com/alighaleb1' className='links'><GitHub  className='github' width='70' height='70' /></a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
    

    .p{
        position: absolute;
        top: 25%;
        left: 25%;
    }
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
        h1{
            
        }
        p{
            margin-top: 20px;
            font-size: 20px;
            
        }
    }

    .icons{
        width: 100%:
        display: flex:
        flex-direction: row;
        justify-content: center;
        margin-top: 20px;
     
        .linkined{
            margin-right: 20px;
            border-radius: 30%;
            border: 1px solid grey;
            padding: 2px;
        }
        .github{
            margin-left: 10px;
            border-radius: 30%;
            border: 1px solid grey;
        }
    }




`;
export default HomePage
