import { deleteTask } from "@/api/tasks";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { Task } from "@/types/task";
import { Trash2 } from "lucide-react";
import { AlertDialog, AlertDialogFooter, AlertDialogHeader, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger } from "./ui/alert-dialog";
import EditTask from "./editTask";

type TaskListProps = {
    tasks: Task[];
    loadTasks: () => void;
}

export default function TaskList({ tasks, loadTasks }: TaskListProps) {
    const handleDelete = async (id: string) => {
        await deleteTask(id);
        loadTasks();
    }

    return (
        <Table className="mt-5 border-1 border-gray-200 rounded-4xl">
            <TableHeader className="border-b-1 border-gray-200">
                <TableRow>
                    <TableHead className="w-[100px]">Id</TableHead>
                    <TableHead className="w-[100px]">Title</TableHead>
                    <TableHead className="w-[100px]">Description</TableHead>
                    <TableHead className="w-[100px]">Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {tasks.map((task) => (
                    <TableRow key={task._id} className="border-b-1 border-e-gray-200">
                        <TableCell className="pt-6 pb-6">{task._id}</TableCell>
                        <TableCell className="pt-6 pb-6">{task.title}</TableCell>
                        <TableCell className="pt-6 pb-6">{task.description}</TableCell>
                        <TableCell className="pt-6 pb-6">{task.completed ? "Completed" : "Pending"}</TableCell>
                        <TableCell className="text-center w-5 h-5">
                            <EditTask task={task} loadTasks={loadTasks}/>
                        </TableCell>
                        <TableCell className="text-center w-5 h-5">
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <button>
                                        <Trash2 className="w-5 h-5 text-red-500 hover:text-red-700 cursor-pointer" />
                                    </button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            Esta ação não pode ser desfeita. Isso excluirá permanentemente a tarefa.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                        <AlertDialogAction onClick={() => handleDelete(task._id)}>
                                            Deletar
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}