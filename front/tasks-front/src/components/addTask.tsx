import {
  Dialog,
  DialogTrigger,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogFooter,
  DialogDescription,
  DialogClose
} from "../components/ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { CirclePlus } from "lucide-react";
import { useState } from "react";
import { createTask } from "@/api/tasks";
import type { NewTask } from "@/types/task";
import { Checkbox } from "./ui/checkbox";

type AddTaskProps = {
  loadTasks: () => void;
};

export default function AddTask({ loadTasks }: AddTaskProps) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [completed, setCompleted] = useState(false);

  const handleSubmit = async () => {
    if(!title || !description) return;

    const newTask: NewTask = {
      title,
      description,
      completed
    }

    try{
      await createTask(newTask);
      loadTasks();
      setTitle("");
      setDescription("");
      setCompleted(false);
    } catch(err) {
      console.error("Erro ao criar tarefa:", err);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">
          <CirclePlus />
          Add Task
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" aria-describedby="add-task">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>
            Fill in the details below to add a new task.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-4">
            <Label htmlFor="title">
              Title
            </Label>
            <Input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Label htmlFor="desc">
              Description
            </Label>
            <Input
              id="desc"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="flex space-x-2 items-center">
              <Checkbox id="completed" onCheckedChange={(checked) => setCompleted(!!checked)}  />
              <Label htmlFor="completed">Task completed</Label>
            </div>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary" onClick={handleSubmit}>
              Salvar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}