"use client";
import { FC, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "./select.module.scss";
import { OptionType } from "@/types";

type SelectProps = {
  options: OptionType[];
  placeholder: string;
  // onChange: (value: string) => void;
};

const Select: FC<SelectProps> = ({ options, placeholder }) => {
  const [selected, setSelected] = useState<string>(placeholder);

  return (
    <div tabIndex={0} className={styles.select}>
      <div className={styles.selectPlaceholder}>{selected}</div>
      <ul className={styles.selectBox} id="region">
        {options.map((option) => (
          <li
            key={option.value}
            className={styles.selectOption}
            value={option.value}
            onClick={() => setSelected(option.value)}
          >
            {option.label}
          </li>
        ))}
      </ul>
      <div className={styles.selectArrow}>
        <KeyboardArrowDownIcon />
      </div>
    </div>
  );
};

export default Select;
