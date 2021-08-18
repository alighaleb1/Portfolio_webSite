import React from 'react'
import styled from 'styled-components';

function ResumeItem({year, title, subTitle, text, link, github, task, task2, task3}) {
    return (
        <ResumeItemStyled>
            <div className='left-content'>
                <p>{year}</p>
            </div>
            <div className='right-content'>
                <h5>{title}</h5>
                <h6>{subTitle}</h6>
                <p>{text}</p>
                <a href={link}><p>{link}</p></a>
                <a href={github}><p>{github}</p></a>
                <ul>
                    <li><p>{task}</p></li>
                    <li><p>{task2}</p></li>
                    <li><p>{task3}</p></li>
                </ul>
            </div>
        </ResumeItemStyled>
    )
}

const ResumeItemStyled = styled.div`
    display: flex;
    padding-bottom: 2rem;
    border-left: 3px solid whitesmoke;
    
    .left-content{
        width: 100%;
       
        
        p{
            display: inline-block;
            margin-left: 0;
            border-radius: 50%;
            border-left: 4px solid #2db9ff;
        }
    }

    .right-content{
        padding-left: 5rem;
        position: relative;
        width: 100%;

        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 15px;
            height: 2px;
            width: 3rem;
            background-color: var(--border-color);
            
        }
        h5{
            color: #2db9ff;
            font-size: 1.3rem;
            padding-bottom: .2rem;
        
            
        }
        h6{
            font-size: .9rem;
            padding-bottom: .2rem;
        }
           
        p{
            font-size: .8rem;
            padding-bottom: .1rem;
        }
        a{
            color: whitesmoke;

            &:hover{
                color: #2db9ff;
            }
            p{
                font-size: .7rem;
                ;
            }
        }
        li{
            color: #2db9ff;
            
            p{
                font-size: .7rem;
              
            }
        }
        
    }
`;

export default ResumeItem
