import React from 'react';
import first from './1th.png';
import second from './2th.png';
import last from './3th.png'

const Medal: React.FC<{place: number}> = ({place}) =>{
    return(
        <>
        {place === 1 && <img src={first} style={{ width: "30%" }} alt='plcae-1'/>}
        {place === 2 && <img src={second} style={{ width: "30%" }} alt='plcae-2'/>}
        {place === 3 && <img src={last} style={{ width: "30%" }} alt='plcae-3'/>}
        </>
    );
}
export default Medal;