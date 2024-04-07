import React from 'react'
import { ListItem } from './list-item';
import { Char } from '../tools/types';
import { IState } from '../tools/reducer';
import { useSelector } from 'react-redux';

interface ListProps {
  data: Char[] | string;
  isLoading?: boolean;
}
export const List: React.FC<ListProps> = ({ data, isLoading }) => {
  const selectedItems = useSelector((state: IState) => state.selectedChars);

  const renderLoad = () => {
    return (
      <div className='handling'>
        <b>{isLoading ? 'loading...' : 'There was a problem: '} </b>
        { !isLoading && data.toString()}
      </div>
    )
  };
  console.log(typeof(data))
  return (
    <div className='list'>
      {
        (isLoading || typeof(data) == 'string') ? renderLoad() : 
        data.map((char, index) => {
          return <ListItem key={index} char={char} isSelected={selectedItems.map(i => i.id).includes(char.id)}/>
        })
      }
    </div>
  )
}
