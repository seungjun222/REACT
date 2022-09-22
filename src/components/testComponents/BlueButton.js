import React from 'react';
import './css/BlueButton.css';

export function BlueButton({text, clickEvent}){
    return <a className='BlueButton' onClick={clickEvent} >{text}</a>;
}