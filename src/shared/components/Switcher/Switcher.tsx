import styles from "./Switcher.module.scss";
import { MouseEventHandler } from "react";

interface SwitcherProps {
  onToggle: MouseEventHandler;
}

export const Switcher = ({ onToggle }: SwitcherProps) => {
  return (
    <div className={styles.switcher}>
      <input
        type="checkbox"
        className={styles.checkbox}
        onClick={onToggle}
        id="box"
      />
      <label htmlFor="box"></label>
    </div>
  );
};
