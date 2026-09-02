import { type ReactNode } from 'react';

import './BinaryDownloadButton.css'

interface BinaryDownloadButtonProps{
    toggleNum: number;
    children?: ReactNode;
    

}

function BinaryDownloadButton({toggleNum, }: BinaryDownloadButtonProps, ) {
    console.log(toggleNum)
    if(toggleNum === 0){
        
        return(

            <div>
                <p className = 'binaryDownloadBtn'>Download Resumé</p>
            </div>

        )

    }
    else if(toggleNum === 1){

    
        return(

            <div>
                <p className = 'binaryDownloadBtn'>Download CV</p>
            </div>
        )
    }
}

export default BinaryDownloadButton;