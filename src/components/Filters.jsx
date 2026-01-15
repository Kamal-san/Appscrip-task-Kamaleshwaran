export default function Filters({ categories = [] }) {
  return (
    <aside className="filters">
      <h2 className="filter-title">Filters</h2>

      <div className="filter-group">
        <h3>Category</h3>

        {categories.length === 0 ? (
          <p>Loading categories...</p>
        ) : (
          categories.map((cat, index) => (
            <label key={index}>
              <input type="checkbox" value={cat} />
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </label>
          ))
        )}
      </div>

      <div className="filter-group">
        <h3>Price Range</h3>
        <label>
          <input type="checkbox" /> Under ₹500
        </label>
        <label>
          <input type="checkbox" /> ₹500 - ₹1000
        </label>
        <label>
          <input type="checkbox" /> Above ₹1000
        </label>
      </div>
    </aside>
  );
}
