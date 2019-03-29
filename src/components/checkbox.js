import React from 'react';
import '../css/checkbox.css';

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
