import React from "react";

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

  const toolbar = props => (
    <header className='toolbar'>
      <nav className='toolbar_navigation'>
        <div className='toolbar_toggle_button'>
          <DrawerToggleButton click={props.drawerClickHandler}/>
        </div>
        <div className='toolbar_logo'><a href="#about">DERMOT O'BRIEN</a></div>
        <div className='spacer'></div>
        <div className='toolbar_navigation_items'>
          <ul>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#specialistfactual">SPECIALIST FACTUAL</a></li>
            <li><a href="#observational">OBSERVATIONAL</a></li>
            <li><a href="#factualentertainment">FACTUAL ENTERTAINMENT</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )

export default toolbar;
