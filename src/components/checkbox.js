import React from 'react';

export const Checkbox = () => {
    return (
        <label className="container"> 
            <span>English</span>
            <input type="checkbox"/>
            <span className="checkmark"></span>
        </label>
    );
}

export default Checkbox;
