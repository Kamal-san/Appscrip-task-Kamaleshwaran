import styles from "./ProductNavBar.module.css";
import Recommended from "./Recommended";

export default function ProductsNavBar({ totalItems, showFilters, setShowFilters }) {
  return (
    <div className={styles.nav}>
        <div className={styles.navbar}>

        
        <div className={styles.left}>
            
            <span className={styles.itemsCount}>{totalItems} ITEMS</span>

            <div
            className={styles.hideFilter}
            onClick={() => setShowFilters(!showFilters)}
            >
            <span>{showFilters ? "‹" : "›"}</span>
            {showFilters ? "HIDE FILTER" : "SHOW FILTER"}
            </div>
        </div>

        
        <div className={styles.right}>
            <Recommended />
        </div>

        </div>
    </div>
  );
}
