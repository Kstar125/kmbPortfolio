
import { type ReactNode } from 'react';
import './MenuButton.css'

interface MenuButtonProps{
    items: string[];
    children?: ReactNode;
}

function MenuButton({items}: MenuButtonProps) {

    let referenceLink = "/" + items[0]

    if (items[0] == 'Home'){
        referenceLink = "/"
    }
    
    return(
        <a href = {referenceLink} className = 'menuLink'>{items[0]}</a>
    )
    
}

export default MenuButton;