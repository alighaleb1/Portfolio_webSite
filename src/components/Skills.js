import React from 'react'
import styled from 'styled-components';
import {MainLayout, InnerLayout} from '../styles/Layouts'
import Title from './Title'
import ProgressBar from './ProgressBar';
import SmallTitle from './SmallTitle';

function Skills() {
    return (
        <SkillsStyled>
                <Title title={'Skills'} span={'Skills'} />
            <InnerLayout>
                <div className='skills'>
                    <ProgressBar 
                        title={'REACT JAVASCRIPT'}
                        width={'85%'}
                        text={'85%'}
                    />
                    <ProgressBar 
                        title={'JAVA'}
                        width={'95%'}
                        text={'95%'}
                    />
                    <ProgressBar 
                        title={'HTML'}
                        width={'97%'}
                        text={'97%'}
                    />
                    <ProgressBar 
                        title={'CSS'}
                        width={'85%'}
                        text={'85%'}
                    />
                    <ProgressBar 
                        title={'JAVASCRIPT'}
                        width={'90%'}
                        text={'90%'}
                    />
                    <ProgressBar 
                        title={'JAVA'}
                        width={'90%'}
                        text={'90%'}
                    />
                    <ProgressBar 
                        title={'C#'}
                        width={'80%'}
                        text={'80%'}
                    />
                     <ProgressBar 
                        title={'C'}
                        width={'70%'}
                        text={'70%'}
                    />
                     <ProgressBar 
                        title={'COMPUTER TROUBLESHOOTING'}
                        width={'85%'}
                        text={'85%'}
                    />
                     <ProgressBar 
                        title={'REACT NATIVE'}
                        width={'65%'}
                        text={'65%'}
                    />
                   
                </div>
            </InnerLayout>
            
        </SkillsStyled>
        
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 5rem;
        @media screen and (max-width: 1200px){
            grid-template-columns: repeat(1,1fr);
        }
    }
`;
export default Skills
