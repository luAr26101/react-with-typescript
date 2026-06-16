import { useEffect, useState } from "react";
import Form from "./form";
import List from "./list";
import { type Task } from "./types";

function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
}

function updateStorage(tasks: Task[]) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function Component() {
  const [tasks, setTasks] = useState<Task[]>(() => loadTasks());
  const addTask = (task: Task) => {
    setTasks((prev) => [...prev, task]);
  };

  const toggleTask = ({ id }: { id: string }) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        } else {
          return task;
        }
      });
    });
  };

  useEffect(() => {
    updateStorage(tasks);
  }, [tasks]);

  return (
    <section>
      <Form addTask={addTask} />
      <List toggleTask={toggleTask} tasks={tasks} />
    </section>
  );
}
export default Component;
