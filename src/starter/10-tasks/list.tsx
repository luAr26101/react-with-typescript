import { Task } from "./types";

type ListProps = {
  toggleTask: ({ id }: { id: string }) => void;
  tasks: Task[];
};

function List({ toggleTask, tasks }: ListProps) {
  return (
    <ul className='list'>
      {tasks.map((task) => {
        return (
          <li key={task.id} className='list'>
            <label className='task-text' htmlFor={`task-${task.id}`}>
              {task.description}
            </label>
            <input
              type='checkbox'
              checked={task.isCompleted}
              onChange={() => toggleTask({ id: task.id })}
              id={`task-${task.id}`}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default List;
