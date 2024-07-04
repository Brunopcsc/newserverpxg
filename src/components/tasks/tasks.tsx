import { Card, Checkbox } from 'antd'
import { Task } from '../../model/tasks'
import './style.css'
import { SetStateAction, useState } from 'react'
import { Content } from '../../pages/content/content'

interface TasksProps {
    tasks: Task[]
    setTasks: React.Dispatch<SetStateAction<Task[]>>
}

export const Tasks = ({ tasks, setTasks }: TasksProps) => {
    const [selectAllTasks, setSelectAllTasks] = useState<boolean>(false)

    const onChange = (index: number, value: boolean) => {
        const updatedTasks = [...tasks]
        updatedTasks[index].done = value
        setTasks(updatedTasks)
    }

    const onChangeSelectTasks = (value: boolean) => {
        setSelectAllTasks(value)
        const updatedTasks = [...tasks]
        updatedTasks.forEach((task) => (task.done = value))
        setTasks(updatedTasks)
    }

    return (
        <div className="tasksContainer">
            <Checkbox
                onChange={(e) => onChangeSelectTasks(e.target.checked)}
                checked={selectAllTasks}
            >
                {selectAllTasks ? 'Desselecionar' : 'Selecionar'} todas as tasks
            </Checkbox>
            <div className="tasksWrapper">
                {tasks.map((task, index) => (
                    <div className="checkboxContainer">
                        <Checkbox
                            onChange={(e) => onChange(index, e.target.checked)}
                            checked={task.done}
                        >
                            <Card
                                title={`${task.npc} - ${task.location.toString()}`}
                                bordered={false}
                                style={{ width: 300 }}
                            >
                                <div className="taskContainer">
                                    <Content
                                        title="Experiência"
                                        value={`${task.exp}k`}
                                    />
                                    <Content title="Task" value={task.task} />
                                </div>
                            </Card>
                        </Checkbox>
                    </div>
                ))}
            </div>
        </div>
    )
}
