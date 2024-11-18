type Task = {
    task: string
    clearTask: () => void
}

export const Task = ({ task, clearTask }: Task) => {
    return (
        <div className="task">
            <span>{task}</span>
            <button onClick={clearTask}>Borrar Tarea</button>
        </div>
    )
}
