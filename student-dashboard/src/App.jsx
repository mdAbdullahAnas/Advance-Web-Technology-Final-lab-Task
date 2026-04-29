import './App.css'
import DashboardHeader from './components/DashboardHeader'
import StudentCard from './components/StudentCard'

function App() {
  const students = [
    {
      name: "Anas",
      id: "101",
      avatar: "https://i.pravatar.cc/100?img=1",
      gpa: 3.8,
      major: "CSE",
    },
    {
      name: "Rahim",
      id: "102",
      avatar: "https://i.pravatar.cc/100?img=2",
      gpa: 3.5,
      major: "EEE",
    },
    {
      name: "Karim",
      id: "103",
      avatar: "https://i.pravatar.cc/100?img=3",
      gpa: 3.9,
      major: "BBA",
    },
    {
      name: "Sadia",
      id: "104",
      avatar: "https://i.pravatar.cc/100?img=7",
      gpa: 3.7,
      major: "CSE",
    },
  ]

  return (
    <div>
      <DashboardHeader />

      {students.map((student) => (
        <StudentCard key={student.id} {...student} />
      ))}
    </div>
  )
}

export default App