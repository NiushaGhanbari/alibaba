import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { REGIONS } from "../../constants/regions";
import "./filter-control.scss";

type FilterControlProps = {
  onSelectRegion: (region: string) => void;
};

const FilterControl = ({ onSelectRegion }: FilterControlProps) => {
  const myItemHasBeenChanged = (event: any) => {
    onSelectRegion(event.target.value);
  };

  return (
    <div className="drop-down-holder">
      <select onChange={myItemHasBeenChanged}>
        {REGIONS.map((region: string, index: number) => (
          <option key={index}>{region}</option>
        ))}
      </select>
      <FontAwesomeIcon className="icon-arrow-down" icon={faChevronDown} />
    </div>
  );
};

export default FilterControl;
