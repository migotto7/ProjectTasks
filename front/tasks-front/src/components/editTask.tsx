import type { Task } from "@/types/task"
import { useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { SquarePen } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { updateTask } from "@/api/tasks";
import { Checkbox } from "./ui/checkbox";

type EditTaskProps = {
    task: Task;
    loadTasks: () => void;
}

export default function EditTask({task, loadTasks}: EditTaskProps) {
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [completed, setCompleted] = useState(task.completed)

    const handleUpdate = async () => {
        const updatedTask = {
            title,
            description,
            completed
        }

        try{
            await updateTask(task._id, updatedTask);
            loadTasks()
        } catch(err) {
            console.error(err);
        }
    }

    return(
        <Dialog>
            <DialogTrigger>
                <SquarePen className="w-5 h-5 text-gray-500 hover:text-gray-700 cursor-pointer" />
            </DialogTrigger>
            <DialogContent aria-describedby={undefined}>
                <DialogHeader>
                    <DialogTitle>Edit task</DialogTitle>
                    <DialogDescription id="edit-task">Fill in the details below to edit a task.</DialogDescription>
                </DialogHeader>
                <Label htmlFor="title">Title</Label>
                <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <Label htmlFor="description">Description</Label>
                <Input id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <div className="flex items-center space-x-2">
                    <Checkbox id="completed" checked={completed} onCheckedChange={(checked) => setCompleted(!!checked)} />
                    <Label htmlFor="completed">Task completed</Label>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="button" variant="secondary" onClick={handleUpdate}>Salvar</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}