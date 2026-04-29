import { useState, useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function AddStudentForm() {
  const { addStudent } = useContext(StudentContext);

  const [form, setForm] = useState({
    name: "",
    id: "",
    major: "",
    gpa: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.major) {
      return setError("All fields required");
    }

    const gpa = parseFloat(form.gpa);
    if (gpa < 0 || gpa > 4) {
      return setError("GPA must be 0–4");
    }

    addStudent({
      id: form.id,
      name: form.name,
      major: form.major,
      gpa,
    });

    setForm({ name: "", id: "", major: "", gpa: "" });
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder="ID" value={form.id}
        onChange={(e) => setForm({ ...form, id: e.target.value })} />
      <input placeholder="Major" value={form.major}
        onChange={(e) => setForm({ ...form, major: e.target.value })} />
      <input placeholder="GPA" value={form.gpa}
        onChange={(e) => setForm({ ...form, gpa: e.target.value })} />

      <button>Add Student</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default AddStudentForm;