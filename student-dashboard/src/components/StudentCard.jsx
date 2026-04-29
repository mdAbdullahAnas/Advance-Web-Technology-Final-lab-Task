function StudentCard({ student, isFavorite, toggleFavorite }) {
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
    </div>
  );
}

export default StudentCard;