import { Level } from './level'
import { Quest, lvl150quests } from './quests'
import { Task, lvl150Tasks } from './tasks'

export interface UserData {
    referenceLevel: Level
    level: string
    percentage: string
    quests: Quest[]
    tasks: Task[]
}

export const initialUserData: UserData = {
    referenceLevel: Level.LVL0_150,
    level: '',
    percentage: '',
    tasks: lvl150Tasks,
    quests: lvl150quests,
}

export const saveData = (userData?: UserData, level?: Level) => {
    if (userData) {
        const jsonData: string = JSON.stringify(userData)

        localStorage.setItem(
            level === Level.LVL0_150 ? 'userData150' : 'userData300',
            jsonData
        )
    }
}
