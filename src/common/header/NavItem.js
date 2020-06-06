import React, { useState } from 'react';
import NavItemDropDown from './NavItemDropDown';
import { NavItemWrapper } from './style';

function NavItem(props) {
  const [show, setShow] = useState(false);

  const showDropDown = (show) => {
    if (show) {
      return <NavItemDropDown dropdown={props.dropdown} href={props.href} />;
    }
  };

  const handleMouseEvent = () => {
    setShow(!show);
  };

  return (
    <NavItemWrapper
      onMouseEnter={handleMouseEvent}
      onMouseLeave={handleMouseEvent}
      className='navitemwrapper'
    >
      <div
        onClick={() => {
          window.location.href = `${props.href}/?value=` + 0;
        }}
      >
        {props.item}
      </div>
      {showDropDown(show)}
    </NavItemWrapper>
  );
}

export default NavItem;
