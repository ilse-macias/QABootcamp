import dotenv from 'dotenv'
dotenv.config()

export const URL = {
    BASE_URL: process.env.BASE_URL
}

export const CREDENTIALS = {
    STANDARDS_USER: {
        EMAIL: process.env.EMAIL,
        PASSWORD: process.env.PASSWORD
    }
}

export const TASKS = {
    TODAY:{
        ADD_TASK_TODAY: "HELLO"
    },
    

    TOMORROW:{
        ADD_TASK_TOMORROW: "HELLO TOM"
    }
}