import { useState } from "react"
import { TaskList } from "./TaskList"

export const TodoApp = () => {
    const [newTask, setNewTask] = useState<string>("")
    const [taskList, setTaskList] = useState<string[]>([])

    const handlerAddTask = () => {
        if (newTask.trim() === "") return
        setTaskList((lastTasks) => [...lastTasks, newTask])
        setNewTask("")
    }

    const handleClearTask = (index: number) => {
        setTaskList((tasks) => tasks.filter((_, i) => i !== index))
    }

    return (
        <>
            <h1>Lista de Tareas</h1>
            <div>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Nueva Tarea"
                />
                <button onClick={handlerAddTask}>Agregar Tarea</button>
            </div>
            <TaskList taskList={taskList} clearTask={handleClearTask} />
        </>
    )
}
