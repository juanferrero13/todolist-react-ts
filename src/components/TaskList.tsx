import { Task } from "./Task"

interface Props {
    taskList: string[]
    clearTask: (index: number) => void
}

export const TaskList = ({ taskList, clearTask }: Props) => {
    return (
        <div className="taskList">
            {taskList.map((task, index) => (
                <Task
                    key={index}
                    task={task}
                    clearTask={() => clearTask(index)}
                />
            ))}
        </div>
    )
}
