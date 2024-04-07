import React, { useEffect, useRef } from 'react';
import { InputModuleSelected } from './selected-input-module';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../tools/reducer';

interface InputProps {
  setFilter: React.Dispatch<React.SetStateAction<string | undefined>>;
}
export const InputModule: React.FC<InputProps> = ({ setFilter }) => {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const selectedItems = useSelector((state: IState) => state.selectedChars);
  
  useEffect(() => {
    const handleKeyPress = (event: any) => {
      if (!event.target.value && event.keyCode === 8 && event.target === inputRef.current) {
        dispatch({ type: 'unSelectLast' });
      }
    };

    const container = inputRef.current!;
    container.addEventListener('keydown', handleKeyPress);

    return () => {
      container.removeEventListener('keydown', handleKeyPress);
    };
  }, [dispatch]);
  
  return (
    <div className='inputModule'>
      {
        selectedItems.map((char, index) => {
          return <InputModuleSelected key={index} char={char} />
        })
      }
      <input ref={inputRef} className='inputModuleInput' type='text' onChange={(event) => { dispatch({ type: 'setFilter', payload: event.target.value }); setFilter(event.target.value) }} />
    </div>
  )
}
