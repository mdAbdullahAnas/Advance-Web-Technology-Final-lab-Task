import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
export type Student = {
  id: string;
  name: string;
  gpa: number;
  major: string;
};

type ContextType = {
  students: Student[];
  search: string;
  setSearch: (s: string) => void;
  sortType: string;
  setSortType: (s: string) => void;
  favorites: string[];
  toggleFavorite: (id: string) => void;
  addStudent: (s: Student) => void;
  removeStudent: (id: string) => void;
};

export const StudentContext = createContext<ContextType>({} as ContextType);

export function StudentProvider({ children }: { children: ReactNode }) {
  const [students, setStudents] = useState<Student[]>([]);
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("default");
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("students");
    if (saved) setStudents(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = (student: Student) => {
    setStudents((prev) => [...prev, student]);
  };

  const removeStudent = (id: string) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((f) => f !== id)
        : [...prev, id]
    );
  };

  return (
    <StudentContext.Provider
      value={{
        students,
        search,
        setSearch,
        sortType,
        setSortType,
        favorites,
        toggleFavorite,
        addStudent,
        removeStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}