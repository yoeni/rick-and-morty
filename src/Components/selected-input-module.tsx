import React from 'react'
import { Char } from '../tools/types'
import { useDispatch } from 'react-redux';

interface SelectedInputProps {
    char: Char;
}
export const InputModuleSelected: React.FC<SelectedInputProps> = ({ char, }) => {
    const dispatch = useDispatch();
    const selectItem = () => {
        dispatch({ type: 'unSelectChar', payload: char.id });
    }
    return (
        <div className='inputModuleSelected' style={{ backgroundImage: `linear-gradient(to right, rgba(154 183 209 / 50%) 0%, rgb(154 183 209 / 100%) 100%), url(${char.image})` }}>
            <div className='inputModuleSelectedName'>{char.name}</div>
            <button className='inputModuleDeselect' onClick={selectItem}>✖</button>
        </div>
    )
}
