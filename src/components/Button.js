import React from 'react'
import PropTypes from 'prop-types'



const Button = ({ text, onClick, color }) => {
    return <button 
    onClick={ onClick } 
    className='btn'
    style={{backgroundColor: color }}>
    {text}</button>
}

Button.propTypes = {
    color: PropTypes.string,
    backgroundColor: PropTypes.string
}


export default Button;