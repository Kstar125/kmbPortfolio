import { type ReactNode } from 'react';

import './BinaryToggleButton.css'

interface BinaryToggleButtonProps{
    onClick: () => void;
    display: string;
    children?: ReactNode;

}

function BinaryToggleButton({display, onClick}: BinaryToggleButtonProps, ) {

    
    return(
        <div>
            <p className = 'binaryToggleBtn' onClick = {onClick}>{display}</p>
        </div>
    )
    }

export default BinaryToggleButton;