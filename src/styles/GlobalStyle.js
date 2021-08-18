import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    --background-color: #000;
    --primary-color: #6c757d;
    --secondary-color: #6c757d;
    --background-dark-color: #10121A;
    --border-color: #2e344e;
    --background-light-color: #f1f1f1;
    --white-color: #2e344e;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191D2B;
}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-size: 1.2rem;
}

body{
    background-color: var(--background-color);
    color: var(--font-light-color);
}

a{
    font-family: inherit;
    color: inherit;
    font-size:inherit;
}

h1{
    font-size: 3rem;
    color: var(--white--color);

    span{
        font-size: 3rem;
        color: #2db9ff;
    }
}
span{
    color: var(--primary-color);
}

h6{
    color: whitesmoke;
    font-size: 1.2rem;
    padding-bottom: 0ch.6rem;
}

//Toggle
.light-dark-mode{
    position: fixed;
    right: 0;
    top: 50%;
    background-color: var(--sidebar-dark-color);
    width: 6.5rem;
    height: 2.5rem;
    z-index: 15;
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg{
      display: flex;
      align-items: center;
      font-size: 1.7rem;
      color: whitesmoke;
    }

  }



  

  .light-theme{
    --background-color: #e3e1df;
    --primary-color: #6c757d;
    --secondary-color: #6c757d;
    --background-dark-color: #f1f1f1;
    --border-color: whitesmoke;
    --background-light-color: #f1f1f1;
    --white-color: #2e344e;
    --font-light-color: black;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color:  #cccac9;

  }

  .dark-theme{
    --background-color: #000;
    --primary-color: #6c757d;
    --secondary-color: #6c757d;
    --background-dark-color: #10121A;
    --border-color: #2e344e;
    --background-light-color: #f1f1f1;
    --white-color: #2e344e;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191D2B;
    --link-background-image: uri('https://thumbs.gfycat.com/FilthyMasculineBangeltiger-size_restricted.gif');

  }

  

  
  //Global Media
  .ham-burger-menu{
      position: fixed;
      right: 0%;
      top: 0%;
      z-index: 15;
      
    
      svg{
          font-size: 3rem;
          
      }
    }
    .nav-toggle{
        transform: translateX(0);
        z-index: 20;
    }
  
    @media screen and (max-width:1200px){
        
    }
    .dark-content{
        position: relative;
        margin-left: 16.3rem;
        min-height: 100vh;
        
        @media screen and (max-width:1200px){
            margin-left: 0;
        }

        .icon{
            position: fixed;
        }

        .lines{
            position: absolute;
            width: 100%;
            display: flex;
            justify-content: space-evenly;


            .line-1, .line-2, .line-3, .line-4{
                width: 1px;
                min-height: 100vh;  
            
            }
        }
    }

    .light-content{
        position: relative;
        margin-left: 16.3rem;
        min-height: 100vh;
        background-image: url('https://64.media.tumblr.com/6fa9ad9f859cf058bfe19a2536b0aa11/tumblr_pkv647vWBM1xp1j77o1_540.gifv');
        background-size: cover;
  
         @media screen and (max-width:1200px){
              margin-left: 0;
        }

        .icon{
              position: fixed;
        }

        .lines{
            position: absolute;
            width: 100%;
            display: flex;
            justify-content: space-evenly;


            .line-1, .line-2, .line-3, .line-4{
                 width: 1px;
                 min-height: 100vh;  
            
                }
            }
    }
`;

export default GlobalStyle;