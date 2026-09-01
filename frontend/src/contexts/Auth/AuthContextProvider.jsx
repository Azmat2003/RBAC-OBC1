import React, { useEffect, useState } from 'react'

import AuthContext from './AuthContext.js'

function AuthContextProvider({children}) {
    const [user, setUser] = useState(null);

    async function getMe(){
        try{
            // get request
            // domain/api/auth/me
            const base = import.meta.env.BASE_URL;
            const api = base + '/api/auth/me';

            const res = await fetch(api, {
                credentials: "include", // include the cookies
            })
            

            // res.ok => true => for 2XX
            if(!res.ok){
                throw Error("error"); // => it will go to catch block
            }

            // response of fetch => 2XX, 3XX, 4XX, 5XX => never go into catch

            const data = await res.json();
            setUser(data.user);
        }
        catch(err){
            // handle the error in react
        }
    }

    useEffect(()=>{
        getMe();
    }, []);


    // frontend
    // does not have any req or res
    const login = async (email, password)=>{
        try{
            // /api/auth/login
            const base = import.meta.env.BASE_URL;
            const api = base + '/api/auth/login';

            const options = {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json",    // in what format we are going to share the data
                },
                credentials: "include", // include cookies
                body : JSON.stringify({
                    email,
                    password
                })
            }
            const res = await fetch(api, options);
            const data = await res.json();
            if(!res.ok){
                throw Error(data.message);
            }

            setUser(data.user);
        }
        catch(err){
            // handle the error
        }
    }

    // register => not affecting the user
    // logout => affect the user => user = null

    const logout = async ()=>{
        try{
            // /api/auth/login
            const base = import.meta.env.BASE_URL;
            const api = base + '/api/auth/login';

            const options = {
                method : "POST",
                credentials: "include", // include cookies
            }

            const res = await fetch(api, options);
            const data = await res.json();

            if(!res.ok){
                throw Error(data.message);
            }

            setUser(null);
        }
        catch(err){
            // handle the error
        }
    }

  return (
    <AuthContext.Provider value={{
        user, 
        login,
        logout
    }}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider