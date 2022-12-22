import{ useState, useEffect} from "react";

const useLocalStorage =()=>{
    const [loggedInUser, setLoggedInUser]= useState(null)
    
    
    useEffect(() => {
        const loginUser = localStorage.getItem('userData')
        if (loginUser) {
            const foundUser = JSON.parse(loginUser)
            setLoggedInUser(foundUser)
        }
    }, [])

    return {loggedInUser}

}


export default useLocalStorage