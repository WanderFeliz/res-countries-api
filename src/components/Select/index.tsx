"use client";
import { FC } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "./select.module.scss";
import { OptionType } from "@/types";


type SelectProps = {
  options: OptionType[];
  placeholder: string;
  // onChange: (value: string) => void;
};

const Select: FC<SelectProps> = () => {
  return (
    <div tabIndex={0} className={styles.select}>
      <ul className={styles.selectBox} id="region">
        <li className={styles.selectOption} value="Africa">
          Africa
        </li>
        <li className={styles.selectOption} value="America">
          America
        </li>
        <li className={styles.selectOption} value="Asia">
          Asia
        </li>
        <li className={styles.selectOption} value="Europe">
          Europe
        </li>
        <li className={styles.selectOption} value="Oceania">
          Oceania
        </li>
      </ul>
      <div className={styles.selectArrow}>
        <KeyboardArrowDownIcon />
      </div>
    </div>
  );
};

export default Select;
