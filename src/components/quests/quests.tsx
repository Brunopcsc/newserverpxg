import { Card, Checkbox } from 'antd'
import './style.css'
import { Quest } from '../../model/quests'
import { SetStateAction, useState } from 'react'
import { Content } from '../../pages/content/content'
import { FaLink, FaStar, FaTrophy } from 'react-icons/fa'
import { GiUpgrade } from 'react-icons/gi'
import { convertExperienceLeft } from '../../utils/dataUtils'

interface QuestsProps {
    quests: Quest[]
    setQuests: React.Dispatch<SetStateAction<Quest[]>>
}

export const Quests = ({ quests, setQuests }: QuestsProps) => {
    const [selectAllQuests, setSelectAllQuests] = useState<boolean>(false)

    const LevelIcon = () => <GiUpgrade size={16} />
    const ExperienceIcon = () => <FaStar size={16} color="#FFD700" />
    const LinkIcon = () => <FaLink size={20} color="#00BFFF" />
    const RewardIcon = () => <FaTrophy size={16} color="#DAA520" />

    const onChange = (index: number, value: boolean) => {
        const updatedQuests = [...quests]
        updatedQuests[index].done = value
        setQuests(updatedQuests)
    }

    const onChangeSelectQuests = (value: boolean) => {
        setSelectAllQuests(value)
        const updatedQuests = [...quests]
        updatedQuests.forEach((quest) => (quest.done = value))
        setQuests(updatedQuests)
    }

    return (
        <div className="questsContainer">
            <Checkbox
                onChange={(e) => onChangeSelectQuests(e.target.checked)}
                checked={selectAllQuests}
            >
                {selectAllQuests ? 'Desselecionar' : 'Selecionar'} todas as
                quests
            </Checkbox>
            <div className="questsWrapper">
                {quests.map((quest, index) => (
                    <div className="checkboxContainer">
                        <Checkbox
                            onChange={(e) => onChange(index, e.target.checked)}
                            checked={quest.done}
                        >
                            <Card
                                title={`${quest.name}`}
                                bordered={false}
                                style={{ width: 450 }}
                            >
                                <div className="questContainer">
                                    <div className="questExpLabel">
                                        <Content
                                            title="Level"
                                            value={quest.level.toString()}
                                            icon={<LevelIcon />}
                                        />
                                    </div>
                                    <div className="questExpLabel">
                                        <Content
                                            title="Experiência"
                                            value={convertExperienceLeft(
                                                quest.expReward
                                            )}
                                            icon={<ExperienceIcon />}
                                        />
                                    </div>
                                    <div className="questExpLabel">
                                        <Content
                                            title="Link"
                                            icon={<LinkIcon />}
                                        >
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
                                            icon={<RewardIcon />}
                                        />
                                    </div>
                                </div>
                            </Card>
                        </Checkbox>
                    </div>
                ))}
            </div>
        </div>
    )
}
