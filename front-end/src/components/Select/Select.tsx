import { ChangeEventHandler } from "react";
import OptionType from "../../types/OptionType";
import "./Select.scss";

type SelectProps = {
  options: OptionType[];
  onChange: ChangeEventHandler<HTMLSelectElement>;
  labelText: string;
  label: string;
  defaultOption: string;
  defaultValue?: string;
};

const Select = ({
  options,
  onChange,
  labelText,
  label,
  defaultOption,
  defaultValue = "",
}: SelectProps) => {
  return (
    <div className="select">
      <label htmlFor={label} className="select__label">
        {labelText}{" "}
      </label>
      <select
        className="select__box"
        name={label}
        id={label}
        onChange={onChange}
        value={defaultValue}
      >
        {<option value={defaultOption}>{defaultOption}</option>}
        {options.map(({ name, id }) => (
          <option key={label + id} value={id}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
