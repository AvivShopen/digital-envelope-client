import React,{useState} from 'react'
import { SortOptions } from '../types/sort-options';
import styles from './toolbar.module.css'

interface ToolbarProps {
    handleSearch: (e:any)=> void
    options : typeof SortOptions
    handleSort: (e:any)=> void
}

const Toolbar = ({options, handleSearch, handleSort}:ToolbarProps) => {
    const [selected, setSelected] = useState(''); 
    return (
    <div className={styles['toolbar']}>
        <input placeholder="Search..." onChange={(e) => handleSearch(e)} />
        <div>
          Sort by &nbsp;
          <select value={selected} onChange={(e)=> {
            handleSort(e);
            setSelected(e.target.value);
          }}>
            {(Object.keys(options) as Array<keyof typeof options>).map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
  )
}
export default Toolbar