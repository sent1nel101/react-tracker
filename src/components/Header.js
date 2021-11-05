import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';
import logo from '../assets/img/logo_checkmark.png';


const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className='header'> 
        <img src={logo} className="App-logo" alt="logo" />        
        <h1>{ title }</h1>
        <Button 
        onClick={onAdd} 
        text={showAdd ? 'Close' : 'Add'}
        color={showAdd ? 'red' : 'green'}
        />
        </header>
    )
}

Header.defaultProps = { 
    title: "Task Tracker"
}
Header.propTypes = {
    title: PropTypes.string
}
export default Header

