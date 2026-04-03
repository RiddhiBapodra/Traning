import TaskCard from "./TaskCard";

const TaskList = ({ tasks  , onEdit , onDelete , onComplete }) => {
  return (
    <div className="mt-4">
      {tasks?.map((task) => (
        <TaskCard key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} onComplete={onComplete} />
      ))}
    </div>
  );
};

export default TaskList;