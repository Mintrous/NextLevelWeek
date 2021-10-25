import React from 'react';

interface HeaderProps {
    title: String;
}


const Header: React.FC <HeaderProps> = () => {
    return(
        <header>
            <h1>Ecoleta</h1>
        </header>
    );
}

export default Header;