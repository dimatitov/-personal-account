import { useState } from "react";

export const loginAPI = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                status: 200,
            })
        }, 2000)
    })
}

export const useLogin = () => {
    const [isLoadingLogin, setIsLoadingLogin] = useState(false)

    const login = async () => {
        setIsLoadingLogin(true)
        const serverResponse = await loginAPI()
        setIsLoadingLogin(false)
        return serverResponse
    }

    return {
        login,
        isLoadingLogin
    }
}

