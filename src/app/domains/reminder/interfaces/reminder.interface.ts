export interface Reminder {
    id: string
    title: string
    date: Date
    description?: string
}

export type Reminders = Readonly<Record<string, Reminder>>