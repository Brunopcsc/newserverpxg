import { Collapse, CollapseProps, Input } from 'antd'

import './style.css'
import { lvl150Tasks, lvl300Tasks } from '../../model/tasks'
import { useEffect, useState } from 'react'
import { Tasks } from '../../components/tasks/tasks'
import { Quests } from '../../components/quests/quests'
import { lvl150quests, lvl300quests } from '../../model/quests'
import { expPerLevel } from '../../model/exp_per_level'
import { UserData, saveData } from '../../model/model'
import { Level } from '../../model/level'
import { convertExperienceLeft } from '../../utils/dataUtils'

interface QuestsAndTasksProps {
    level: Level
}

export const QuestsAndTasks = ({ level }: QuestsAndTasksProps) => {
    const [experiencia, setExperiencia] = useState(0)
    const [tasks, setTasks] = useState(
        level === Level.LVL0_150 ? lvl150Tasks : lvl300Tasks
    )
    const [quests, setQuests] = useState(
        level === Level.LVL0_150 ? lvl150quests : lvl300quests
    )
    const [userData, setUserData] = useState<UserData>()

    const [questExperienceLeft, setQuestExperienceLeft] = useState<number>(0)

    const [taskExperienceLeft, setTaskExperienceLeft] = useState<number>(0)

    expPerLevel.sort((a, b) => a.level - b.level)

    const [formValues, setFormValues] = useState({
        level: '',
        percentage: '',
    })

    useEffect(() => {
        const storedData: string | null = localStorage.getItem(
            level === Level.LVL0_150 ? 'userData150' : 'userData300'
        )

        if (storedData) {
            const parsedData: UserData = JSON.parse(storedData)

            setTasks(parsedData.tasks)
            setQuests(parsedData.quests)
            setFormValues({
                level: parsedData.level,
                percentage: parsedData.percentage,
            })
            setUserData({
                referenceLevel: level,
                level: parsedData.level,
                percentage: parsedData.percentage,
                tasks: parsedData.tasks,
                quests: parsedData.quests,
            })
        }
    }, [])

    useEffect(() => {
        saveData(userData, level)
    }, [userData, level])

    useEffect(() => {
        const experiencebase =
            expPerLevel.find(
                (level) => level.level === Number(formValues.level)
            )?.exp ?? 0

        const experienceNextLevel =
            expPerLevel.find(
                (level) => level.level === Number(formValues.level) + 1
            )?.exp ?? 0

        const experience =
            (experienceNextLevel - experiencebase) *
            (Number(formValues.percentage) / 100)

        setExperiencia(experience + experiencebase)

        setTaskExperienceLeft(
            tasks
                .filter((task) => !task.done)
                .reduce(
                    (acc, obj) =>
                        acc +
                        obj.exp +
                        (obj.catchExp ?? 0) +
                        (obj.mobsExp ?? 0),
                    0
                )
        )

        setQuestExperienceLeft(
            quests
                .filter((quest) => !quest.done)
                .reduce((acc, obj) => acc + obj.expReward, 0)
        )

        setUserData({
            referenceLevel: level,
            level: formValues.level,
            percentage: formValues.percentage,
            tasks: tasks,
            quests: quests,
        })
    }, [formValues, tasks, quests])

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setFormValues({
            ...formValues,
            [name]: value,
        })
    }

    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: `Tasks - Experiência restante: ${convertExperienceLeft(taskExperienceLeft)}`,
            children: <Tasks tasks={tasks} setTasks={setTasks} />,
        },
        {
            key: '2',
            label: `Quests - Experiência restante: ${convertExperienceLeft(questExperienceLeft)}`,
            children: <Quests quests={quests} setQuests={setQuests} />,
        },
    ]

    const onChange = (key: string | string[]) => {}

    return (
        <div className="homeContainer">
            <div className="levelContainer">
                Level:
                <Input
                    placeholder="Level"
                    name="level"
                    value={formValues.level}
                    onChange={handleChange}
                    style={{ width: '100px' }}
                />
                Porcentagem:
                <Input
                    placeholder="%"
                    name="percentage"
                    value={formValues.percentage}
                    onChange={handleChange}
                    style={{ width: '80px' }}
                />
                <br />
                Level após quests e tasks:{' '}
                {(expPerLevel.find(
                    (level) =>
                        level.exp >
                        experiencia +
                            questExperienceLeft * 1000 +
                            taskExperienceLeft * 1000
                )?.level ?? 1) - 1}
            </div>
            <Collapse
                items={items}
                onChange={onChange}
                style={{
                    backgroundColor: 'var(--secondary-color)',
                    width: '95%',
                }}
            />
        </div>
    )
}
