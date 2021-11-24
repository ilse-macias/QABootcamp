import dotenv from 'dotenv'
dotenv.config()

export const URL = {
    BASE_URL: "https://todoist.com/users/showlogin"
}

export const CREDENTIALS = {
    STANDARDS_USER: {
        EMAIL: process.env.EMAIL,
        PASSWORD: process.env.PASSWORD
    }
}

export const TASKS = {
    ADD_TASK: process.env.ADD_TASK
}