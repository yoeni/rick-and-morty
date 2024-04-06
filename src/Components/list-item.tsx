import React from 'react'

interface ListItemProps {
    image: string;
    name: string;
    episode: number;
}
export const ListItem: React.FC<ListItemProps> = ({ image, name, episode}) => {

  return (
    <div className='listItem'>
        <input className="listItemCheckbox"  type="checkbox"/>
        <div className='listItemIconContainer'><img className="listItemIcon" src={image} alt={name}/></div>
        <div className='listItemInfo'>
            <p className='listItemName'>{name}</p>
            <p className='listItemEpisode'>{episode} Episodes</p>
        </div>
    </div>
  )
}
