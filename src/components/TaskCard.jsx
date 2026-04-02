const TaskCard = ({ task }) => {
  return (
    <div className="border p-4 rounded-lg shadow mb-3 bg-white">
      <h3 className="text-lg font-semibold">{task.title}</h3>

      <p className="text-sm text-gray-500">
        Status: {task.completed ? "Completed" : "Pending"}
      </p>

      <div className="mt-2 flex gap-2">
        <button className="bg-yellow-400 px-2 py-1 rounded">
          Edit
        </button>

        <button className="bg-red-500 text-white px-2 py-1 rounded">
          Delete
        </button>

        <button className="bg-green-500 text-white px-2 py-1 rounded">
          Complete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;