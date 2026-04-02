import React ,{useState} from 'react'
import Header from './Header'
import AddTask from './components/AddTask'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

    const [tasks , setTasks] = useState([]);
    const [showForm , setShowForm] = useState(false);

    const handleAddTask = (newTask) => {
        setTasks([...tasks , newTask]);
        setShowForm(false);
    }
    const navigate = useNavigate();

    const LogOut = () => {
       localStorage.removeItem("isLoggedIn"); 
         navigate("/");
    }
  return (
    <div>

      <Header  logout = {LogOut}/>
    <div className="p-6">
      
      {/* ➕ Add Button */}
      <button
        onClick={() => setShowForm(true)}
        className="bg-blue-500 text-white px-4 py-2"
      >
        + Add Task
      </button>

      {/* ✅ Show Form */}
      {showForm && (
        <AddTask onAddTask={handleAddTask} />
      )}
      </div>


      
    </div>
  )
}

export default Dashboard
