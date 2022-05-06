import React, { useState } from 'react';
import Navigator from './components/Navigator';
import LeftSideBar from './components/LeftSidebar';
import Content from './components/Content';
import RightSideBar from './components/RightSidebar';

function App() {
  const state = useState();
  const [mobileMenu, setmobileMenu] = useState(false);
  const toggle = () => {
    setmobileMenu(!mobileMenu);
  };
  return (
    <>
      <Navigator openMenu={toggle} />


      <div className="main-container">
        <LeftSideBar burgerMenu={mobileMenu} closeMenu={toggle} />
        <Content />
        <RightSideBar />
      </div>
    </>
  );
}

export default App;
