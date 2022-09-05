import React from 'react';
import { FiBell, FiBellOff } from 'react-icons/fi';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectUserState, setState } from '../User/userSlice';
import { selectSound } from './ToggleSoundSlice';
import {initSound, removeSound} from './ToggleSoundSlice';



const ToggleSound: React.FC = () => {
    const sound = useAppSelector(selectSound);
    const dispatch = useAppDispatch();
    
    function soundOnOff() {
        if (sound) {
            dispatch(removeSound())
        } else {
            dispatch(initSound())
        }
    }

    return (
        <div className='soundIcon' onClick={soundOnOff}>
            {sound ? <FiBell/> : <FiBellOff/>}
        </div>
    )
}

export default ToggleSound;