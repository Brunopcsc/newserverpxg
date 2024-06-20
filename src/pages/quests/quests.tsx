import { Card, Checkbox } from 'antd'
import './style.css'
import { Quest } from '../../model/quests'
import { Content } from '../content/content'
import { SetStateAction } from 'react'

interface QuestsProps {
    quests: Quest[]
    setQuests: React.Dispatch<SetStateAction<Quest[]>>
}

export const Quests = ({ quests, setQuests }: QuestsProps) => {
    const onChange = (index: number, value: boolean) => {
        const updatedQuests = [...quests]
        updatedQuests[index].done = value
        setQuests(updatedQuests)
    }

    return (
        <div className="questsContainer">
            {quests.map((quest, index) => (
                <div className="checkboxContainer">
                    <Checkbox
                        onChange={(e) => onChange(index, e.target.checked)}
                        checked={quest.done}
                    >
                        <Card
                            title={`${quest.name}`}
                            bordered={false}
                            style={{ width: 500 }}
                        >
                            <div className="questContainer">
                                <div className="questExpLabel">
                                    <Content
                                        title="Level"
                                        value={quest.level.toString()}
                                    />
                                </div>
                                <div className="questExpLabel">
                                    <Content
                                        title="Experiência"
                                        value={`${quest.expReward}k`}
                                    />
                                </div>
                                <div className="questExpLabel">
                                    <Content title="Link">
                                        <a
                                            href={quest.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {quest.link}
                                        </a>
                                    </Content>
                                </div>
                                <div className="questExpLabel">
                                    <Content
                                        title="Rewards"
                                        value={quest.otherRewards?.toString()}
                                    />
                                </div>
                            </div>
                        </Card>
                    </Checkbox>
                </div>
            ))}
        </div>
    )
}
