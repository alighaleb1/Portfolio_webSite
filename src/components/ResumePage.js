import React from 'react'
import {MainLayout} from '../styles/Layouts'
import styled from 'styled-components';
import Title from './Title';
import {InnerLayout} from '../styles/Layouts';
import SmallTitle from './SmallTitle';
import ResumeItem from './ResumeItem';


function ResumePage() {
    return (
            <ResumeStyled>
                
                    <Title title={'Resume'} span={'Resume'} />
                
                <InnerLayout>
                    <div className='small-title'>
                        <SmallTitle icon={'https://www.freeiconspng.com/thumbs/experience/blue-circle-handbag-experience-icon-9.png'} title={'EDUCATION'} />
                    </div>
                    <div className='resume-content'>
                        <ResumeItem 
                            year={'2017 - 2022'}   
                            title={'Computer Science'} 
                            subTitle={'Eastern Michigan University'} 
                            text={'Ypsilanti, MI'}
                        />

                        <ResumeItem 
                            year={'2017 - 2022'}   
                            title={'Mathematics'} 
                            subTitle={'Eastern Michgain University'} 
                            text={'Ypsilanti, MI'}
                        />

                        <ResumeItem 
                            year={'2015 - 2017'}   
                            title={'General Studies'} 
                            subTitle={'Henry Ford College'} 
                            text={'Dearborn, MI'}
                        />
                
                        <ResumeItem 
                            year={'2010 - 2014'}   
                            title={'High school diploma'} 
                            subTitle={'Riverside Academy West'} 
                            text={'Dearborn, MI'}
                        />
                  
                    </div>
                    
                    <div className='small-title'>
                        <SmallTitle icon={'https://www.pngitem.com/pimgs/m/76-764920_work-experience-symbol-blue-hd-png-download.png'} title={'WORKING EXPERIENCE'} />
                    </div>
                    
                    <div className='resume-content'>
                        <ResumeItem 
                            year={'7/2021 - Present'}   
                            title={'Software Enginering Intern'} 
                            subTitle={'Gao Tek'} 
                            text={'New York, New York'}
                            task={'○    Software Team Projects'}
                            task2={'○   Create new website pages to keep company website up to date.'}
                            task3={'○   Learned new programming langauges such as php and kotlin.'}
                        />
                                        
                        <ResumeItem 
                            year={'6/2021 - 8/2021'}   
                            title={'Bus Driver'} 
                            subTitle={'Cleveland Cliffs'} 
                            text={'Dearborn, MI'}
                            task={'○    Transport workers to the plants in a safely manner'}
                            task2={'○   Demonstrated strong communication skills with thousands of workers.'}
                            task3={'○   Performed daily inspections.'}
                        />

                        <ResumeItem 
                            year={'5/2019 – 8/2019'}   
                            title={'It Consultant'} 
                            subTitle={'Goodymklan'} 
                            text={'Dearborn, MI'}
                            task={'○    Tested computers for problems, inefficiencies, and weaknesses.  '}
                            task2={'○   Created programs to help organize company data.'}
                            task3={'○   Performed company needs in a timely manner to ensure various tasks are completed.'}
                        />

                   
                        <ResumeItem 
                            year={'9/2016 - 5/2019'}   
                            title={'School Bus Driver'} 
                            subTitle={'Global Education Of Excellence'} 
                            text={'Hamtramack, MI'}
                            task={'○    Transported students in a safely manner'}
                            task2={'○   Demonstrated strong leadership skills through training various individuals.'}
                            task3={'○   Participated with students at robotic programming events.'}
                        />

                        <ResumeItem 
                            year={'4/2013 – 8/2013'}   
                            title={'Cashier'} 
                            subTitle={'Nu wave fish and chieken '} 
                            text={'Garden city, MI'}
                            task={'○    Displayed excellent customer service.'}
                            task2={'○   Prepared orders in a timely manner.'}
                            task3={'○   Cash handling.'}
                        />
                    </div>


                    <div className='small-title'>
                        <SmallTitle icon={'https://cities4people.eu/wp-content/uploads/2017/11/cities4people-logo-plain-2-1024x972.jpg'} title={'Projects'} />
                    </div>

                    <div className='resume-content'>
                        <ResumeItem 
                            year={'7/2021 - 8/2021'}   
                            title={'My Website Portfolio'} 
                            subTitle={'Individual project'} 
                            text={'A portfolio website that I developed to display information about my personal life, business experience, and educational accomplishments.'} 
                            link={'https://github.com/alighaleb1/Portfolio_website'}
                            
                        />
                  
                        <ResumeItem 
                            year={'1/2021 - 4/2021'}   
                            title={'AthletiSize'} 
                            subTitle={'Senior Team Project'} 
                            text={'A group project about a website that provides information about sports equipment. There are mutiple services on this website including equipment measurments, links, and data.'}
                            link={'https://www.youtube.com/watch?v=vxQknVGEQ80'}  
                            github={'https://github.com/COSC481W-2021Winter/capstone-project-athletisize-1'}
                        />

                         <ResumeItem 
                            year={'7/2020 - 8/2020'}   
                            title={'Student Information DataBase'} 
                            subTitle={'Data Structures and Alogrithms Project'} 
                            text={'A four month project that includes sorting and providing Students information in Ordered Array, Doubly Double Ended LinkedList, And Threaded Binary Search Tree.(Id number, First and Last name).'}
                            link={''}
                        />
                   

                
                        <ResumeItem 
                            year={'2/2020 - 4/2020'}   
                            title={'To Do List App'} 
                            subTitle={'An App For Daily Lists'} 
                            text={'A mobile app developed with react native that allows users to create daily to do lists.'} 
                            link={'https://github.com/alighaleb1/To-Do-List-App'}
                        />
                   
                        <ResumeItem 
                            year={'7/2021 - 8/2021'}   
                            title={'Weather Page'} 
                            subTitle={'Search Any City For Weather Information'} 
                            text={'A simple website page that allows users to access weather information by searching any city name.'} 
                            link={'https://github.com/alighaleb1/weatherApp'}
                        />

                       
                    </div>
                </InnerLayout>
            </ResumeStyled>
        
    )
}

const ResumeStyled = styled.section`
    

    .small-title{
        padding-bottom: 3rem;
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 1px solid whitesmoke ;
    }

`;


export default ResumePage
