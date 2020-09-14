import { useEffect, useState } from "react";

export const useLogin = () => {
    const [response, setResponse] = useState({})

    const login = async () => {
        const serverResponse = await fetch('http://localhost:9000/users', {
            method: 'POST',
            body: JSON.stringify({
                name: "Dima",
                surname: "Titov"
            })
        })
        console.log(serverResponse)
    }
    return {
        login
    }
}
