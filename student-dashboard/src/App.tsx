import { useContext } from "react";
import { StudentContext } from "./context/StudentContext";
import { ThemeContext } from "./context/ThemeContext";

import DashboardHeader from "./components/DashboardHeader";
import StudentCard from "./components/StudentCard";
import SearchBar from "./components/SearchBar";
import SortControls from "./components/SortControls";
import AddStudentForm from "./components/AddStudentForm";

function App() {
  const {
    students,
    search,
    setSearch,
    sortType,
    setSortType,
    favorites,
    toggleFavorite,
  } = useContext(StudentContext);

  const { toggleTheme } = useContext(ThemeContext);

  const filtered = students.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.major.toLowerCase().includes(search.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sortType === "name") return a.name.localeCompare(b.name);
    if (sortType === "gpa") return b.gpa - a.gpa;
    return 0;
  });

  return (
    <div className="container">
      <DashboardHeader totalFavorites={favorites.length} />

      <button onClick={toggleTheme}>Toggle Theme</button>

      <AddStudentForm />

      <SearchBar search={search} setSearch={setSearch} />
      <SortControls setSortType={setSortType} />

      <div className="grid">
        {sorted.map((s) => (
          <StudentCard
            key={s.id}
            student={s}
            isFavorite={favorites.includes(s.id)}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
}

export default App;