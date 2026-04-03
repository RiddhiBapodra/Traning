import { useState } from "react";

const AddTask = ({ onAddTask }) => {
  const [data, setData] = useState({ title: "", description: "" });

  const handleSubmit = () => {
    if (!data.title || !data.description) return;

    const newTask = {
      id: Date.now(),
      title: data.title,
      description: data.description,
      completed: false
    };

    // send newTask to the dashboard component
    onAddTask(newTask); 
    setData({ title: "", description: "" });
  };

  return (
    <div className="mt-4 border p-4">
      <input
        type="text"
        placeholder="Enter task..."
        value={data.title}
        onChange={(e) => setData({...data, title: e.target.value})}
        className="border p-2 mr-2"
      />

      <input
        type="text"
        placeholder="Enter task description..."
        value={data.description}
        onChange={(e) => setData({...data, description: e.target.value})}
        className="border p-2 mr-2"
      />

      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white px-3 py-1"
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;