import TaskCard from "./TaskCard";

const TaskList = ({ tasks  , onEdit}) => {
  return (
    <div className="mt-4">
      {tasks?.map((task) => (
        <TaskCard key={task.id} task={task} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default TaskList;