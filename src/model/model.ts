import { Quest, allQuests } from './quests'
import { Task, allTasks } from './tasks'

export interface UserData {
    level: string
    percentage: string
    quests: Quest[]
    tasks: Task[]
}

export const initialUserData: UserData = {
    level: '',
    percentage: '',
    tasks: allTasks,
    quests: allQuests,
}

export const saveData = (userData?: UserData) => {
    if (userData) {
        const jsonData: string = JSON.stringify(userData)

        localStorage.setItem('userData', jsonData)
    }
}
