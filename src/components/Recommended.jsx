import { useState } from "react";
import styles from "./Recommended.module.css";

export default function Recommended() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("RECOMMENDED");

  const options = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE : HIGH TO LOW",
    "PRICE : LOW TO HIGH",
  ];

  return (
    <div className={styles.dropdownWrapper}>
      <div
        className={styles.dropdownHeader}
        onClick={() => setOpen(!open)}
      >
        {selected}
        <span className={styles.arrow}>▼</span>
      </div>

      {open && (
        <div className={styles.dropdownMenu}>
          {options.map(option => (
            <div
              key={option}
              className={`${styles.option} ${
                selected === option ? styles.active : ""
              }`}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
            >
              {selected === option && <span className={styles.check}>✔</span>}
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
