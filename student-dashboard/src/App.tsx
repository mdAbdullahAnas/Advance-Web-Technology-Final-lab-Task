import { useState, useEffect } from "react";
import DashboardHeader from "./components/DashboardHeader";
import StudentCard from "./components/StudentCard";
import SearchBar from "./components/SearchBar";
import SortControls from "./components/SortControls";

type Student = {
  id: string;
  name: string;
  gpa: number;
  major: string;
};

function App() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("default");
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setStudents([
        { id: "101", name: "Anas", gpa: 3.8, major: "CSE" },
        { id: "102", name: "Rahim", gpa: 3.5, major: "EEE" },
        { id: "103", name: "Karim", gpa: 3.9, major: "BBA" },
        { id: "104", name: "Sadia", gpa: 3.7, major: "CSE" },
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.major.toLowerCase().includes(search.toLowerCase())
  );

  const sortedStudents = [...filteredStudents].sort((a, b) => {
    if (sortType === "name") return a.name.localeCompare(b.name);
    if (sortType === "gpa") return b.gpa - a.gpa;
    return 0;
  });

  useEffect(() => {
    document.title = `Dashboard - ${filteredStudents.length} Students`;
  }, [filteredStudents]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((f) => f !== id)
        : [...prev, id]
    );
  };

  if (loading) return <h2>Loading...</h2>;

  return (
    <div className="container">
      <DashboardHeader totalFavorites={favorites.length} />

      <SearchBar search={search} setSearch={setSearch} />
      <SortControls setSortType={setSortType} />

      <div className="grid">
        {sortedStudents.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            isFavorite={favorites.includes(student.id)}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
}

export default App;