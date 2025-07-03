"use client";

import { useEffect, useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  
  const [captchaCode, setCaptchaCode] = useState("");

  const generateCaptcha = (length = 6) =>
  Math.random().toString(36).slice(2, 2 + length).toUpperCase();




  useEffect(() => {
    setCaptchaCode(generateCaptcha());
  }, []);

  const refreshCaptcha = () => {
    setCaptchaCode(generateCaptcha());
    setFormData({ ...formData, captchaInput: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Form Data:", formData);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 md:p-10">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Sign Up</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Create your account to start shopping
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
   
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 text-sm dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

       
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 text-sm dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

         <div>
  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
    Mobile Number
  </label>

  <div className="flex sm:items-center sm:space-x-2 space-y-2 sm:space-y-0">
    <select
      name="countryCode"
      value={formData.countryCode}
      onChange={handleChange}
      className="sm:w-28 px-3 py-2 rounded border mr-1 border-gray-300 dark:border-gray-600 text-sm dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
    >
      <option value="+91">🇮🇳 +91</option>
      <option value="+1">🇺🇸 +1</option>
      <option value="+44">🇬🇧 +44</option>
      <option value="+61">🇦🇺 +61</option>
    </select>

    <input
      type="tel"
      name="phone"
      placeholder="9876543210"
      value={formData.phone}
      onChange={handleChange}
      required
      className="lg:flex-1 px-4 py-2 max-w-[100%] w-[100%] h-[37px] rounded border border-gray-300 dark:border-gray-600 text-sm dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
    />
  </div>
</div>


      
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 text-sm dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 text-sm dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>


          <div>
           
<div className="space-y-2">
  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
    Enter Captcha
  </label>

  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 space-y-2 sm:space-y-0">

    <div className="text-lg font-bold tracking-widest bg-gray-200 px-4 py-2 rounded select-none text-center sm:w-40">
      {captchaCode}
    </div>

    
    <input
      type="text"
      name="captchaInput"
      value={formData.captchaInput}
      onChange={handleChange}
      required
      placeholder="Enter captcha"
      className="flex-1 px-4 py-2 rounded border border-gray-300 dark:border-gray-600 text-sm dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
    />

 
    <button
      type="button"
      onClick={refreshCaptcha}
      className="text-blue-600 text-sm hover:underline mt-1 sm:mt-0"
    >
      Refresh
    </button>
  </div>
</div>


           
          </div>


          
          <button
            type="submit"
            className="w-full bg-blue-500 hover:box-border text-white font-semibold py-2 rounded transition duration-200"
          >
            Create Account
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline font-medium">
            Login here
          </a>
        </p>
      </div>
    </section>
  );
};

export default Signup;
