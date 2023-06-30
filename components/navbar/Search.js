import React, { useState } from 'react';
import { Dropdown } from './Dropdown';
export var searchText="";
export function Search(){
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className='group grid-cols-2'>
    <input
      type="text"
      value={searchValue}
      onChange={handleInputChange}
      placeholder="Search..."
      className='appearance-none rounded-md mr-20 text-sm font-thin tracking-wide text-zinc-200 p-1.5 ring-2 caret-cyan-400 ring-cyan-400 outline-none bg-zinc-700 peer'
    />
    <div className={'flex absolute group-hover:visible invisible'}>
      <Dropdown searchText={searchValue}/>
    </div>
    </div>
  )
};
