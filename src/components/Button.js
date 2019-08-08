import React from 'react';

const Button = (props) => {
    return <button 
        className={['button-base',props.className].join(' ')} 
        onClick={props.onClick} 
        children={props.children} 
        />
}
export default Button;