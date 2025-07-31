import { defineStore } from "pinia";
import { ref } from "vue";
import {
    permissStateType
} from '../types/login.ts'

export const usePermissStore = defineStore('permiss',() => {
    const permissState = ref<permissStateType[]>([
        {
            username:'admin1',
            password:'123456'
        },
        {
            username:'admin2',
            password:'123456'
        },
        {
            username:'admin3',
            password:'123456'
        },
    ])
    return {
        permissState
    }
})