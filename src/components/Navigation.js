import React from 'react'
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

function Navigation() {
    return (
        <NavigationStyled>
            <div className='avatar'>
                <img src='https://mail.google.com/mail/u/0?ui=2&ik=8a78d09429&attid=0.1&permmsgid=msg-a:r-4402306878877034299&th=17ac7fb0540b25b3&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ98tX45b9z-ec0yiwqqZnrCu5Zn3jg6Zmp3U8DbvwfU71E45XrKSzqomUn5ZN9a6Z1KLSDGanr2uOUOjGGWS9_wL-bUHX3JJ6iy3Wh3bCPHyePyBdSgF6ETDdU&disp=emb&realattid=ii_krd64dqb0' alt='' width='200' hieght='200' />
        
            </div>
            <ul className='nav-items'>
                    <li className='nav-item'>
                        <NavLink to='/' activeClassName='active-class' exact>Home</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/about' activeClassName='active-class' exact>About</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/resume' activeClassName='active-class' exact>Resume</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/blogs' activeClassName='active-class' exact>Blogs</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/contact' activeClassName='active-class' exact>Contact</NavLink>
                    </li>
                </ul>
                <footer className='footer'>
                    <p>@2021 My Portfolio Website</p>
                </footer>
            
        </NavigationStyled>
    )
}

const NavigationStyled = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 1px solid var(--border-color);

    .avatar{
        width : 80%;
        border-bottom: 1px solid var(--border-color);
        text-align: center; 
        padding: 0.1rem 0;
        img{
            width: 70%;
            border-radius: 50%;
            border: 8px solid var(--border-color);
            opacity: 0.90;
        }
    }

    .nav-items{
        width: 100%;
        text-align: center;
        .active-class{
                background-color: #2db9ff;
        }

        li{
            display: block;
            
            a{
                display: block;
                padding: .2rem 0;
                position: relative;
                
                &:hover{
                    cursor: pointer;
                    background-color: #2db9ff;
                    transition: All 2s ease-in-out;
                    opacity: 0.21;
                }

                &::before{
                    content: "";
                    position: absoulte;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 50%;
                    background-color: burlywood;
                    transition: All 0.4s cubic-cubic-bezier(1, -0.2, 0, 1);
                    z-index: 3;
                    opacity: 0.10;
                    transform-origin: right;
                }
            }
            a:hover::before{
                width: 100%;
                height: 100%
            }

        }
    }

    footer{
        border-top: 1px solid var(--border-color);
        p{
            padding: 1rem 0;
            font-size: 1.1.rem;
            display: block;
            text-align: center;
        }
    }
`;

export default Navigation
