import React from 'react'

interface InputProps {
}
export const InputModule: React.FC<InputProps> = ({ }) => {

  return (
    <div className='inputModule'>
        <input className='inputModuleInput' type='text'/>
    </div>
  )
}
