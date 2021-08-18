import React from 'react'
import styled from 'styled-components'

function ContactItem({icon,title,contact1}) {
    return (
        <ContactItemStyled>
            <div className='left-content'>
                <p>
                    <img src={icon} alt='Contact item' width='65' height='65' />
                </p>
            </div>
            <div className='right-content'>
                <h6>{title}</h6>
                <p>{contact1}</p>
            </div>
            
        </ContactItemStyled>
    )
}

const ContactItemStyled = styled.div`
    padding: 1.5rem 2rem;
    background-color: var(--background-dark-color);
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    .left-content{
        
        img{
            border: 1px solid #2db9ff;
            opacity: 0.75;
            padding: 0.5rem;
        }
    }

    .right-content{
        margin-left: 15px;
        h6{
            color: whitesmoke;
            font-size: 1.2rem;
            padding-bottom: .6rem;
        }
        p{
            padding: .4rem 0;


        }
    }
`;

export default ContactItem
