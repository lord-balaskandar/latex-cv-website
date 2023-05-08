import React from 'react';
import HeaderButton from './headerButton/headerButton';

function Header() {
    return <div className='Header'>
        <HeaderButton display="Home"/>
        <HeaderButton display="Experience"/>
        <HeaderButton display="Qualifications"/>
        <HeaderButton display="Education"/>
        <HeaderButton display="Technical Skills"/>
        <HeaderButton display="Key Skills"/>

    </div>
}

export default Header;