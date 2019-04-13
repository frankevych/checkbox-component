import React from 'react';
import './Checkbox.css';

export const Checkbox = (props) => {
    return (
            <div className="checkbox-container">
                {/*uses text props as id to identify which checkbox was clicked*/}
                <input type="checkbox" id={props.text}/>
                <label htmlFor={props.text}></label>
                {/*reicive text as props and render it*/}
                <span>{props.text}</span>
            </div>
    );
}

export default Checkbox;