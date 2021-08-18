import emailjs from 'emailjs-com';
import React from 'react'
import styled from 'styled-components';
import ContactItem from '../components/ContactItem';
import PrimeButton from '../components/PrimeButton';
import Title from '../components/Title';
import {MainLayout, InnerLayout} from '../styles/Layouts';
import { useState } from 'react';
import {db} from '../components/Firebase';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        db.collection('contacts').add({
            name: name,
            email: email,
            subject: subject,
            message: message,
        })
        .then(()=> {
            alert('Message has been submitted 👍')
        })
        .catch((error)=> {
            alert("Message has not been submitted 👎");
        })

        setName("");
        setEmail("");
        setSubject("");
        setMessage("");

    }
    
    
    return (
        <MainLayout>
            <Title title={'Contact'} span={'Contact'} />
            <ContactPageStyled>
            <InnerLayout className={'contact-section'}>
                <div className='left-content'>
                    <div className='contact-title'>
                        <h4>Get In Touch</h4>
                    </div>
                    <form className='form' onSubmit={handleSubmit}>
                        <div className='form-feild'>
                            <label htmlFor='name'>Enter your name</label>
                            <input type='text' 
                                value={name}
                                placeholder="name"
                                onChange={(e) => setName(e.target.value)}
                                placeholdertextcolor="white" />
                        </div>
                        <div className='form-feild'>
                            <label htmlFor='email'>Enter your email</label>
                            <input type='email' 
                                value={email}
                                placeholder="email"
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='form-feild'>
                            <label htmlFor='subject'>Enter your subject</label>
                            <input type='text' 
                                value={subject}
                                placeholder="subject"
                                onChange={(e) => setSubject(e.target.value)}
                            />
                        </div>
                        <div className='form-feild'>
                            <label htmlFor="text-area">Enter your Message</label>
                            <textarea name='textarea'  cols='38' rows='10'
                             value={message}
                             placeholder="message"
                             onChange={(e) => setMessage(e.target.value)}></textarea>
                        </div>
                        <div className='form-feild'>
                          <button type='submit' >Send Email</button> 
                        </div>
                    </form>
                </div>
                <div className='right-content'>
                    <ContactItem 
                        icon={'https://www.pngitem.com/pimgs/m/27-274866_phone-png-blue-phone-icon-png-blue-transparent.png'} 
                        title={'Phone'}
                        contact1={'+1313-320-7233'}  
                     />
                     <ContactItem 
                        icon={'https://www.pngfind.com/pngs/m/332-3328918_iphone-mail-icon-png-wwwimgkidcom-the-image-kid.png'} 
                        title={'Email'}
                        contact1={'agheleb213@gmail.com'}  
                     />
                     <ContactItem 
                        icon={'https://icon-library.com/images/tracking_map_location-512_75409.png'} 
                        title={'Location'}
                        contact1={'Dearborn, Mi'}  
                     />
                </div>
            </InnerLayout>
            </ContactPageStyled>
        </MainLayout>
    )
}

const ContactPageStyled = styled.section`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 1rem;
        @media screen and (max-width: 1200px){
            grid-template-columns: repeat(1,1fr);
            .right-content{
                margin-top: 2rem;
            }
        }
        .right-content{
            display: flex;
            justify-content: space-between;
            flex-direction: column;
        }
        .contact-title{
            h4{
                color: whitesmoke;
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }
    
        .form{
            width: 100%;
            .form-feild{
                margin-top: 2rem;
                position: relative;
                width: 100%;
                button{
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
                    
                }
                label{
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    padding: 0 .5rem;
                    color: inherit;
                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding: .5rem 15px;
                    width: 100%;
                    color: inherit;
                    
                    ::placeholder{
                        color: var(--sidebar-dark-color);
                        font-size: 18px;
                        font-weight: bolder;
                        
                    }
                }
                textarea{
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;
                    ::placeholder{
                            color: var(--sidebar-dark-color);
                            font-size: 18px;
                            font-weight: bolder;
                    }
                }
            }
        }
    }
`;
export default Contact
