import React from 'react';
import jun from './jun.png';
import mid from './mid.png';
import sen from './sen.png';

const ProfileImg:React.FC<{developer: "jun" | "mid" | "sen"}> = ({ developer }) => {
    return (
        <>
            {developer === 'jun' && <img src={jun} className="profile-img" alt="jun"/>}
            {developer === 'mid' && <img src={mid} className="profile-img" alt="mid"/>}
            {developer === 'sen' && <img src={sen} className="profile-img" alt="sen"/>}
        </>
    );
}
export default ProfileImg;