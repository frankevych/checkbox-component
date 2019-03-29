import React from 'react';
import '../css/checkbox.css';

export const Checkbox = () => {
    return (
            <div className="container">
                <input type="checkbox" id="checkboxInput"/>
                <label htmlFor="checkboxInput"></label>
                <span>Checkbox</span>
            </div>
    );
}

export default Checkbox;
