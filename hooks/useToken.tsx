import { useEffect, useState } from "react"

const useToken = (user: any) =>{
    const [token, setToken] = useState('');
    useEffect( () =>{
         const email = user?.user?.email;
         const displayName = user?.user?.displayName;
         const photoURL = user?.user?.photoURL;
        const currentUser = {email: email,
                            name:displayName,
                            image:photoURL};
        if(email){
            fetch(`${process.env.NEXT_PUBLIC_URL}/api/user/update/${email}`, {
                method:'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data => {
                console.log('data inside useToken', data);
                const accessToken = data.token;
                console.log("data.users",data.users)
                const user=JSON.stringify(data.users)
                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('user', user);
                setToken(accessToken);
            })
        }

    }, [user]);
    return [token];
}

export default useToken;