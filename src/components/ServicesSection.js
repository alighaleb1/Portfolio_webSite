import React from 'react'
import {InnerLayout} from '../styles/Layouts'
import styled from 'styled-components';
import Title from './Title';
import ServiceCard from './ServiceCard';
import download from './download.png';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'services'} />
                <div className='services'>
                    <ServiceCard 
                        image={'https://cdn.pixabay.com/photo/2016/09/14/08/26/web-1668928_960_720.png'} 
                        title={'Website Development'} 
                        paragraph={'Build, develop, and maintain software programs, websites, mobile apps.'} />
                    <div className='midcard'>
                        <ServiceCard 
                            image={'https://insidesources.com/wp-content/uploads/2020/03/bigstock-Ai-Artificial-Intelligence-Lo-343525045-e1583413134953.jpg'} 
                            title={'Software Developement'} 
                            paragraph='Build, develop, and maintain software programs, websites, mobile apps.'/>
                    </div>
                    <ServiceCard 
                        image={'https://cdn.dribbble.com/users/4904306/screenshots/14354266/media/77fdac3111c124969412defbab2aeaa6.jpg?compress=1&resize=400x300'} 
                        title={'Mobile Development'} 
                        paragraph='Build, develop, and maintain software programs, websites, mobile apps.'/>

                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: flex;
        justify-content: space-between;
        @media screen and(max-width:1000px){
            flex-direction: column;
            .mid-card{
                margin: 2rem 0;
            }
        }

        .mid-card{
            margin: 0 1.2rem;
        }
    }
`;
export default ServicesSection
