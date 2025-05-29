import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
} from "@/components/ui/sidebar"
import LoginPage from "@/pages/LoginPage"
import { Book, BookOpen, CircleUserRound } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogContent } from "./ui/dialog"
import { DialogTitle } from "@radix-ui/react-dialog"

export default function AppSidebar() {
    const [isLoginOpen, setIsLoginOpen] = useState(false)
    return (
        <>
            <Sidebar className="w-64 min-h-screen bg-gray-100">
                <SidebarHeader className="h-1/6 bg-cyan-500 text-white">
                    <div className="flex items-center justify-center h-[100%] p-4">
                        <BookOpen size={40} />
                        <h1 className="pl-5 font-bold text-2xl">Task List</h1>
                    </div>
                </SidebarHeader>
                <SidebarContent className="bg-cyan-100">
                    <SidebarGroup>
                        <SidebarGroupLabel>Application</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <div className="flex p-3 items-center hover:bg-cyan-200 rounded-lg cursor-pointer text-gray-700">
                                <Book size={20} />
                                <p className="text-lg pl-2">Tasks</p>
                            </div>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
                <SidebarFooter className="h-1/8 bg-gray-800 text-white cursor-pointer" onClick={() => setIsLoginOpen(true)}>
                    <div className="flex items-center justify-center h-[100%] p-4">
                        <CircleUserRound size={30} />
                        <h2 className="pl-3 font-bold text-1xl">Login</h2>
                    </div>
                </SidebarFooter>
            </Sidebar>

            <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
                <DialogContent className="max-w-md" aria-describedby={undefined}>
                    <DialogTitle></DialogTitle>
                    <LoginPage />
                </DialogContent>
            </Dialog>
        </>
    )
}