import React from 'react';
import './css/PinkButton.css';

export function PinkButton({text, clickEvent}){
    return <a className='PinkButton' onClick={clickEvent} >{text}</a>;
}