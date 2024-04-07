import React, { useEffect, useState } from 'react'
import { Char } from '../tools/types'
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../tools/reducer';

interface ListItemProps {
  char: Char;
  isSelected?: boolean;
}
export const ListItem: React.FC<ListItemProps> = ({ char, isSelected }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(isSelected || false);
  const filter = useSelector((state: IState) => state.filter);
  const selectItem = () => {
    dispatch({ type: isSelected ? 'unSelectChar' : 'selectChar', payload: isSelected ? char.id : char });
  }
  useEffect(() => {
    setChecked(isSelected || false);
  }, [isSelected]);

  const getHighlightedName = (name: string) => {
    if (!filter)
      return name;

    const lowerCaseSearchTerms = filter.toLowerCase().split(' ');
    let highlightedName: (JSX.Element | string)[] = [name];

    lowerCaseSearchTerms.forEach(term => {
      const regex = new RegExp(`(${term})`, 'gi');
      highlightedName = highlightedName.flatMap(part => {
        if (typeof part === 'string') {
          return part.split(regex).map((fragment, index) => {
            if (index % 2 === 1) {
              return <b key={index}>{fragment}</b>;
            } else {
              return fragment;
            }
          });
        } else {
          return part;
        }
      });
    });

    return <span>{highlightedName}</span>;
  };
  
  return (
    <div className='listItem'>
      <input className="listItemCheckbox" type="checkbox" checked={checked} onChange={selectItem} />
      <div className='listItemIconContainer'><img className="listItemIcon" src={char.image} alt={char.name} /></div>
      <div className='listItemInfo'>
        <p className='listItemName' >{getHighlightedName(char.name)}</p>
        <p className='listItemEpisode'>{char.episode.length} Episodes</p>
      </div>
    </div>
  )
}
