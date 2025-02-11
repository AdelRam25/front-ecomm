'use client'

import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import axios from "axios";
import { useDispatch } from 'react-redux'; 
import { login } from "@/features/user/userSlice";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState('');
  const router = useRouter();
  const dispatch = useDispatch();  // dispatch

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form 
  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/login", {
        email: formData.email,
        password: formData.password
      });

      // Store token in localStorage
      localStorage.setItem("token", response.data.token);

      // Dispatch the login action 
      dispatch(login({ token: response.data.token, email: formData.email }));

      router.push("/");  // Redirect after login

    } catch (error) {
      setError("Email ou mot de passe incorrect.");
    }
  };

  

  return (
    <div className="flex justify-center items-center m-10 ">
      <div className=" border border-white rounded-lg shadow-sm p-6 max-w-[400px] w-full">
        <h2 className="text-2xl font-bold text-center text-[#CCAC86]  mb-6">Se connecter</h2>
        <form onSubmit={submit}>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-white  mb-2">
              Adresse email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border bg-[#1E1E1E] border-gray-500 rounded-md "
              placeholder="Entrez votre email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-500 bg-[#1E1E1E] rounded-md"
              placeholder="Entrez votre mot de passe"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mb-10 bg-[#CCAC86]  border-white border text-black p-2 rounded-md font-medium hover:bg-[#B89A7C] transition-colors"
          >
            Se connecter
          </button>
        </form>

        {/* Error Message */}
        {error && (
          <div className="mt-4 text-center text-red-500">
            <p>{error}</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Login;
