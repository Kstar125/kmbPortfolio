import { type ReactNode } from 'react';

import './DynamicTitle.css'

interface DynamicTitleProps{
    toggle: number;
    children?: ReactNode;

}

function DynamicTitle({toggle}: DynamicTitleProps ) {

    
    let titleText: string = '';
    
    if(toggle === 0){
        titleText = "Resumé";
    }
    else{
        titleText = "Curriculum Vitae";
    }
    
    return(
        <p>{titleText}</p>
    )
    }

export default DynamicTitle;