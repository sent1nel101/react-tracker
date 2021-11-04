import React from 'react'
import PropTypes from 'prop-types'



const Button = (props) => {
    const onClick = ()=>{
    console.log('clicked')    
}
    return <button onClick={onClick} className='btn'>add</button>
}

Button.propTypes = {
    color: PropTypes.string,
    backgroundColor: PropTypes.string
}


export default Button;