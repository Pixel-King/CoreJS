import React, { useState } from 'react';
import './hamburger.css';


const Hamburger: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const close = () => setOpen(false);
    const root = document.querySelector(':root') as HTMLElement;

    function burgerHandler() {
        if (!open) {
            setOpen(true);
            root.style.setProperty('--burgermenu-default',  `var(--burgermenu-open)`);
        } else {
            setOpen(false);
            root.style.setProperty('--burgermenu-default',  `var(--burgermenu-close)`);
        }
    }

    return (
        <div className='burger' onClick={burgerHandler}>
          <span className='span-burger' />
          <span className='span-burger' />
          <span className='span-burger' />
        </div>
    )
}

export default Hamburger;