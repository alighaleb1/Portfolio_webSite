import React from 'react'
import styled from 'styled-components'
import PrimeButton from './PrimeButton'

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className='left-content'>
                <img src='https://mail.google.com/mail/u/0?ui=2&ik=8a78d09429&attid=0.1&permmsgid=msg-f:1706821800988464696&th=17afd96286cf5638&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ8J6BWt7YV3IQa3mV8gPciNf9p2qkfh4OTYhAZExbxgkARnCC115qoBvVeW6ZE7fx5zJvtxmLEW9GIQCaLCmZE3uoIo-BgCYWpRVRLb5cdph_tN714S_WJZwso&disp=emb&realattid=c9ae00eb951e4cdc_0.1.1' alt='Ali Ghaleb' width="350" height='600' />
            </div>
            <div className='right-content'>
                
                <h4>I am <span>Ali Ghaleb </span></h4>
                
                <p className='paragraph'>
                    I have work experience in multiple industries including education, transportation, and customer service etc.
                    I have trained and developed new employees in multiple positions for various tasks and ensured professional demeanor 
                    in every position I have held. Currently expanding my knowledge in Java, React JavaScript, 
                    and other programming languages.
                </p>
                <div className='about-info'>
                    <div className='info-title'>
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Locations</p>
                        <p>Services</p>
                    </div>
                    <div className='info-title'>
                        <p>:Ali Ghaleb</p>
                        <p>:26</p>
                        <p>:white</p>
                        <p>:English, Arabic</p>
                        <p>:Dearborn, Mi</p>
                        <p>:Software Developer</p>
                    </div>
                </div>
                
                <PrimeButton title={'Resume'} />
            </div>
            
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1200px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }

    .showimages{
        display: flex;
        flex-direction: row;
    }
    .left-content{
        width: 100%;
        img{
            
            border: 2px solid grey;
            opacity: .75;
            &:hover{
                opacity: 1;
            }
            
        }
    }
    .right-content{
        padding-bottom: 1.5rem;
        margin-left: 1rem;
        h4{
            font-size: 2rem;
            color: whitesmoke;
            margin-bottom: 20px;
            span{
                font-size: 2rem;
                color: #2db9ff;
            }

        }

        .paragraph{
                color: whitesmoke;
                font-size: 20px;
                padding-bottom: 3rem;
        }
        
        .about-info{
            margin-top: 10px;
            display: flex;
            padding-bottom: 1.05rem;
            .info-title{
                padding-right: 3rem;
                margin-top: 0.5px;
                margin-bottom: 5px;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                    margin-top: 10px;
                }
            }
        }
        
    }
`;

export default ImageSection
