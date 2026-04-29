function SortControls({ setSortType }) {
  return (
    <div className="sort">
      <button onClick={() => setSortType("default")}>Default</button>
      <button onClick={() => setSortType("name")}>Name A-Z</button>
      <button onClick={() => setSortType("gpa")}>GPA High-Low</button>
    </div>
  );
}

export default SortControls;