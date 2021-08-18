import { Route, Switch as Switching } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Skills from "./components/Skills";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import  Switch  from "@material-ui/core/Switch";
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { useEffect } from "react";
import { useState } from "react";
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from "@material-ui/core";
import { Check } from "@material-ui/icons";





function App() {

  const [theme, setTheme] = useState('dark-theme');
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  useEffect(()=>{
      document.documentElement.className = theme;
  },[theme]);

  const themeToggler = () =>{
    if(theme === 'light-theme'){
      setTheme('dark-theme');
      setChecked(false);
    }
    else{
      setTheme('light-theme');
      setChecked(true);
    }
  }

  return (
    <div className="App">

    <Sidebar navToggle={navToggle} />
     <div className='theme'>
        <div className='light-dark-mode'>
            <div className='left-content'>
              <Brightness4Icon />
            </div>
            <div className='right-content'>
              <Switch
                value=""
                checked={checked}
                inputProps={{'ria-label': ''}}
                size="medium" 
                onClick={themeToggler}
              />
            </div>
        </div>
      </div>
      <div className='ham-burger-menu'>
        <IconButton className={'icon'} onClick={() => setNavToggle(!navToggle)}>
          <MenuIcon  />
        </IconButton>
      </div>

      <MainContentStyled className={` ${checked ? 'dark-content' : 'light-content'}`} >
        <div className='lines'>
          <div className='line-1'></div>
          <div className='line-2'></div>
          <div className='line-3'></div>
          <div className='line-4'></div>
        </div>
        
       


        <Switching>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route path='/about' exact>
            <About />
          </Route>
          <Route path='/resume' exact>
            <Resume />
          </Route>
          <Route path='/blogs' exact>
            <Blogs />
          </Route>
          <Route path='/contact' exact>
             <Contact />
          </Route>
        </Switching>
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
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

`;
export default App;
