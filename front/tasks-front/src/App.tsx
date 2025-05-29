import { useState, useEffect } from "react";
import AddTask from "./components/addTask";
import TaskList from "./components/taskList";
import type { Task } from "./types/task";
import { getTasks } from "./api/tasks";
import Layout from "./Layout";

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const loadTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <Layout>
      <div className="container max-h-screen mx-auto font-sans pt-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Tasks</h1>
          <AddTask loadTasks={loadTasks} />
        </div>
        <TaskList tasks={tasks} loadTasks={loadTasks} />
      </div>
    </Layout>
  )
}


