import TaskCard from "./TaskCard";

const TaskList = ({ tasks }) => {
  return (
    <div className="mt-4">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;