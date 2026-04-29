type Props = {
  setSortType: (s: string) => void;
};

function SortControls({ setSortType }: Props) {
  return (
    <div className="sort">
      <button onClick={() => setSortType("default")}>Default</button>
      <button onClick={() => setSortType("name")}>Name</button>
      <button onClick={() => setSortType("gpa")}>GPA</button>
    </div>
  );
}

export default SortControls;