import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import type { Student } from "../context/StudentContext";
type Props = {
  student: Student;
  isFavorite: boolean;
  toggleFavorite: (id: string) => void;
};

function StudentCard({ student, isFavorite, toggleFavorite }: Props) {
  const { removeStudent } = useContext(StudentContext);

  return (
    <div className="card">
      <h3>{student.name}</h3>
      <p>ID: {student.id}</p>
      <p>Major: {student.major}</p>
      <p>GPA: {student.gpa}</p>
<button
  className={isFavorite ? "active" : ""}
  onClick={() => toggleFavorite(student.id)}
>
  {isFavorite ? "★ Favorite" : "☆ Add Favorite"}
</button>

      <button onClick={() => removeStudent(student.id)}>Remove</button>
    </div>
  );
}

export default StudentCard;