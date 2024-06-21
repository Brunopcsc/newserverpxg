import { Collapse, CollapseProps, Input } from 'antd'

import './style.css'
import { allTasks } from '../../model/tasks'
import { useEffect, useState } from 'react'
import { Tasks } from '../tasks/tasks'
import { Quests } from '../quests/quests'
import { allQuests } from '../../model/quests'
import { expPerLevel } from '../../model/exp_per_level'
import { UserData, saveData } from '../../model/model'

export const Home = () => {
    const [experiencia, setExperiencia] = useState(0)
    const [tasks, setTasks] = useState(allTasks)
    const [quests, setQuests] = useState(allQuests)
    const [userData, setUserData] = useState<UserData>()

    const [questExperienceLeft, setQuestExperienceLeft] = useState<number>(0)

    const [taskExperienceLeft, setTaskExperienceLeft] = useState<number>(0)

    expPerLevel.sort((a, b) => a.level - b.level)

    const [formValues, setFormValues] = useState({
        level: '',
        percentage: '',
    })

    useEffect(() => {
        const storedData: string | null = localStorage.getItem('userData')

        if (storedData) {
            const parsedData: UserData = JSON.parse(storedData)

            setTasks(parsedData.tasks)
            setQuests(parsedData.quests)
            setFormValues({
                level: parsedData.level,
                percentage: parsedData.percentage,
            })
            setUserData({
                level: parsedData.level,
                percentage: parsedData.percentage,
                tasks: parsedData.tasks,
                quests: parsedData.quests,
            })
        }
    }, [])

    useEffect(() => {
        saveData(userData)
    }, [userData])

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
            label: `Tasks - Experiência restante: ${taskExperienceLeft.toFixed(1)}k`,
            children: <Tasks tasks={tasks} setTasks={setTasks} />,
        },
        {
            key: '2',
            label: `Quests - Experiência restante: ${questExperienceLeft.toFixed(1)}k `,
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
                Level após quests e tasks:
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
                    backgroundColor: '#282c34',
                    width: '95vw',
                }}
            />
        </div>
    )
}
