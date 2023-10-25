"use client";
import { FC, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "./select.module.scss";
import { OptionType } from "@/types";

type SelectProps = {
  options: OptionType[];
  placeholder: string;
  onFilter: (value: string | null) => void;
};

const Select: FC<SelectProps> = ({ options, placeholder, onFilter }) => {
  const [selected, setSelected] = useState<string>(placeholder);

  const handleChange = (value: string) => {
    if (value === placeholder) {
      setSelected(placeholder);
      onFilter(null);
      return;
    }
    setSelected(value);
    onFilter(value);
  };

  return (
    <div tabIndex={0} className={styles.select}>
      <div className={styles.selectPlaceholder}>{selected}</div>
      <ul className={styles.selectBox} id="region">
        {options.map((option) => (
          <li
            key={option.value}
            className={styles.selectOption}
            value={option.value}
            onClick={() => handleChange(option.value)}
          >
            {option.label}
          </li>
        ))}
        {selected !== placeholder && (
          <li
            className={styles.selectOption}
            value={placeholder}
            onClick={() => handleChange(placeholder)}
          >
            {placeholder}
          </li>
        )}
      </ul>
      <div className={styles.selectArrow}>
        <KeyboardArrowDownIcon />
      </div>
    </div>
  );
};

export default Select;
