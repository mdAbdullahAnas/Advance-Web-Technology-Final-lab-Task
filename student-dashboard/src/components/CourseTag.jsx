function CourseTag({ courseName, color }) {
  return (
    <span style={{ backgroundColor: color, padding: "5px", margin: "5px" }}>
      {courseName}
    </span>
  );
}

export default CourseTag;