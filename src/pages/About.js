import React from 'react'
import styled from 'styled-components'
import ImageSection from '../components/ImageSection'
import ServicesSection from '../components/ServicesSection'
import Title from '../components/Title'
import { MainLayout } from '../styles/Layouts'



function About() {
    return (
        <AboutStyled>
            <MainLayout>
                <Title title={'About me'} span={'About Me'} />
                <ImageSection />
                <div className='showimages'>
                    <img src='https://mail.google.com/mail/u/1?ui=2&ik=d7ae966e4c&attid=0.1&permmsgid=msg-f:1708142479949679337&th=17b48a890f27cae9&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ_HE5Fn1S5JKa70GrKGA0c1Zz66jD9dhH0144Fm56UPy4i7rW1AdfhfvzVx6i7wjz1R6XAVsXDOKYZYF9DE3_2ISDhvnNcEDiEsNMcakm8r67JWzI8m3MEArHU&disp=emb&realattid=f8b39b4cb1454558_0.1.1' alt='' width='300' height='300' />
                    <img src='https://mail.google.com/mail/u/1?ui=2&ik=d7ae966e4c&attid=0.1&permmsgid=msg-f:1708141465193566848&th=17b4899ccafa5280&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ87pHSYQfskLcpxEAs32yfGa4q1SjxgVDQYCGXGTqXgdsAwKgc1Wkjg22XFgxf70xGwDUES8iXAqpWX7ZL0qT-3aNTSCq62Dztt70AJZzgDUdf1eGs7NbxWjIU&disp=emb&realattid=45dc959abe4951ba_0.1.1' alt='' width='300' height='300' />
                    <img src='https://mail.google.com/mail/u/1?ui=2&ik=d7ae966e4c&attid=0.1&permmsgid=msg-f:1708140174005537590&th=17b488702a2c8b36&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ-j_-Lwv836VIp8jRdZIEZHZJtBc_MUKr4moGkoniJgzsQ7kk_pnEU28_ZM4lhyunFt0gloixuda_1tFbEoSxwuR7m-VgicIii4f8vJS3rFWjHSXONRcIF0_qM&disp=emb&realattid=5a56850055cc38b6_0.1.1' alt='' width='300' height='300' />
                </div>
                <ServicesSection />
            </MainLayout>
        </AboutStyled>
    )
}

const AboutStyled = styled.section`
    .showimages{
        display: flex;
        flex-direction: row;
        width: 100%;
        margin-top: 40px;
        justify-content: space-evenly;
        
        img{
            object-fit: cover;
            border-radius: 10%;
            opacity: 0.60;
            &:hover{
                opacity: 1;
                cursor: pointer;
            }
        }
        
    }
    @media screen and (max-width: 700px){
        
    }
`;

export default About