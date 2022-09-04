import React from 'react';
import jun from './jun.png';
import mid from './mid.png';
import sen from './sen.png';

const UserIcon:React.FC<{developer: "jun" | "mid" | "sen"}> = ({ developer }) => {
    return (
        <>
            {developer === 'jun' && <img src={jun} className="u-img" alt="jun"/>}
            {developer === 'mid' && <img src={mid} className="u-img" alt="mid"/>}
            {developer === 'sen' && <img src={sen} className="u-img" alt="sen"/>}
        </>
    );
}
export default UserIcon;