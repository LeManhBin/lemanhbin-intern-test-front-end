import './App.scss';
import Sidebar from './components/Sidebar/Sidebar'
import TextWrapper from './components/TextWrapper/TextWrapper';
import css from './asset/css.png'
import html from './asset/html.jpg'
import url from './asset/url.png'
import logo from './asset/logo.png'
import { useState } from 'react';
function App() {

  const [toggle, setToggle] = useState(false)
  console.log(toggle);
  return (
    <div className="App">
        <div className='open-btn' onClick={() => setToggle(!toggle)}><i className="fa-solid fa-bars"></i></div>
        <div className='left'>
            <Sidebar setToggle={setToggle} toggle={toggle}/>
        </div>
        <div className='right'>
            <div className='logo'> 
                <img src={logo} alt='logo'/>
            </div>
            <div className='introduce'>
              <span className='introduce__title'>Lorem ipsum dolor sit asmet?</span>
              <p className='introduce__desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.</p>
            </div>
            <div className='text__container'>
              <TextWrapper image={css}/>
              <TextWrapper image={html}/>
              <TextWrapper image={url}/>
            </div>
            <div className='footer'>
              <span>Copyright © 2021</span>
            </div>
        </div>
    </div>
  );
}

export default App;
