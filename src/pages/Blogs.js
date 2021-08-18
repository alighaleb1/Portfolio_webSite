import React from 'react'
import styled from 'styled-components'
import Title from '../components/Title'
import blog from '../data/blog'
import {MainLayout, InnerLayout} from '../styles/Layouts'
function Blogs() {
    const links = ['','','https://www.youtube.com/watch?v=nTeuhbP7wdE'
                        ];
    const images = ['https://i.pinimg.com/originals/7d/f2/6f/7df26fa959d20fa16bf8223205cd949b.gif',
                    'https://i.pinimg.com/originals/7d/f2/6f/7df26fa959d20fa16bf8223205cd949b.gif',
                    'https://j.gifs.com/3lm2xx@large.gif?download=true',
                    'https://revelry.co/wp-content/uploads/2019/05/react-native-UX-design.gif',
                    'https://content.techgig.com/thumb/msid-76151804,width-860,resizemode-4/Become-a-programmer-by-learning-core-Java-skills-with-this-free-course.jpg?142209',
                    'https://raw.githubusercontent.com/spite/ccapture.js/master/assets/sample.gif',
                    'https://cdn.dribbble.com/users/66313/screenshots/2115922/ios-concept-dribbble.gif',
                    'https://media4.giphy.com/media/h3u7w8BR07IHDsnzQw/200.gif'];
    var i = 0;

    return (
       <MainLayout>
            <Blogstyled>
            <Title title={'Blogs'} span={'My Blogs'} />
            <InnerLayout className={'blog'} >
            {
               blog.map((blog)=>{
                return <div key={blog.id} className='blog-item'  >
                            <div className='image'>
                                <img src={images[i++]} alt='image'   />
                            </div>
                            <div className='title'>
                            
                                <a href= {blog.link} ><h4>{blog.title}</h4> </a>
                            </div>
                        </div>
                })
            }
            </InnerLayout>
            </Blogstyled>
       </MainLayout>
    )
}

const Blogstyled = styled.div`
    .blog{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-column-gap: 2rem;
        grid-row-gap: 3rem;
        @media screen and (max-width: 1200px){
            grid-template-columns: repeat(1,1fr);
        }
        
    .blog-item{
        padding: 2rem 1rem;
        background-color: var(--sidebar-dark-color);
        overflow: hidden;
    }

      .image{
            width:100%;
            height: 90%;
            
            &:hover{
                opacity: 0.50;
                
            }
      
            img{
                width: 100%;
                height: 90%;
                object-fit: cover;
                transition: all .4s ease-in-out;
                &:hover{
                    cursor: pointer;
                    transform: rotate(400deg) scale(1.1);
                }
            }
        }

       .title{
           a{
               
               padding: .5rem 0;
               color: whitesmoke;
               cursor: pointer;
               transition: all .4s ease-in-out;
               
               &:hover{
                   color: #2db9ff;
               }          
           }
       }
    }
`;
export default Blogs
