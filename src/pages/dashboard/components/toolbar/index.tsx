import { useState } from "react";
import { SortOptions } from "../../../../types/sort-options";

interface ToolbarProps {
  handleSearch: (e: any) => void;
  options: typeof SortOptions;
  handleSort: (e: any) => void;
}

const Toolbar = ({ options, handleSearch, handleSort }: ToolbarProps) => {
  const [selected, setSelected] = useState("");
  return (
    <div>
      <input placeholder="Search..." onChange={(e) => handleSearch(e)} />
      <div>
        Sort by &nbsp;
        <select
          value={selected}
          onChange={(e) => {
            handleSort(e);
            setSelected(e.target.value);
          }}
        >
          {(Object.keys(options) as Array<SortOptions>).map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default Toolbar;
