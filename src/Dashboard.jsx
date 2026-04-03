import React ,{useEffect, useState} from 'react'
import Header from './Header'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'
import UpdateTask from  './components/UpdateTask'
import {getApiServices} from './ApiServices/ApiServices'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

    const [tasks , setTasks] = useState([]);
    const [editTask , setEditTask] = useState(null);
    const [showForm , setShowForm] = useState(false);

    const handleAddTask = async (newTask) => {
      try{
      const res = await getApiServices.post("/tasks",newTask)
        setTasks((prev) => [...prev,res]);
        setShowForm(false);
      } catch (error) {
        console.error("Error adding task:", error);
      }
    }

    // const handleUpdateTask = async (updatedTask) => {
    //   try {
    //     const res = await getApiServices.put(`/tasks/${updatedTask.id}`, updatedTask);
    //     // it loops through every task and check the id is the task that we want to update if it is it replace the old data with new and if not it reamins the same data
    //     setTasks((prev) => prev.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
    //     setEditTask(null);
    //     setShowForm(false);
    //   } catch (error) {
    //     console.error("Error updating task:", error);
    //   }
    // };

    const handleUpdateTask = async (updatedTask) => {
  try {
    await getApiServices.put(
      `/tasks/${updatedTask.id}`,
      updatedTask
    );

    // ✅ update UI correctly
    setTasks((prev) =>
      prev.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );

    setEditTask(null);
    setShowForm(false);

  } catch (error) {
    console.error("Error updating task:", error);
  }
};


    const handleEditTask = (task) => {
      setEditTask(task);
      setShowForm(false);
    }


    useEffect(() => {
      fetchTasks();
    },[]);

    const fetchTasks = async () =>  {
      try{
        const fetchData = await getApiServices.get("/tasks");
        setTasks(fetchData);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
       
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
      
     
      <button
        onClick={() => setShowForm(true)}
        className="bg-blue-500 text-white px-4 py-2"
      >
        + Add Task
      </button>

      {showForm && (
        <AddTask onAddTask={handleAddTask}  />
      )}
      </div>

      {editTask && (
  <UpdateTask
    task={editTask}
    onUpdateTask={handleUpdateTask}
    onCancel={() => setEditTask(null)}
  />
)}

      <TaskList tasks={tasks} onEdit = {handleEditTask} />
      
    </div>
  )
}

export default Dashboard
