import { useState } from "react";

const AddTask = ({ onAddTask }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = () => {
    if (!title) return;

    const newTask = {
      id: Date.now(),
      title: title,
      completed: false
    };

    onAddTask(newTask); // 🔥 send data to Dashboard
    setTitle("");
  };

  return (
    <div className="mt-4 border p-4">
      <input
        type="text"
        placeholder="Enter task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
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