import React, { useContext, useState } from "react";
import AuthContext from "../contexts/Auth/AuthContext.js";
import { useNavigate } from "react-router";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {base} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();

    // 
    try{
        // 
        const api = base + '/api/auth/register';
        const options = {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json",    // in what format we are going to share the data
                },
                credentials: "include", // include cookies
                body : JSON.stringify({
                    name,
                    email,
                    password
                })
            }
        const res = await fetch(api, options);
        if(!res.ok){
            throw new Error("Not registered");
        }

        const data = await res.json();
        console.log("data for register", data);

        if(data){
            navigate('/login');
        }

    }
    catch(err){
        // handle error
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Create Account</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="John Doe"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors cursor-pointer"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;