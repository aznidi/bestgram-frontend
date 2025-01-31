// src/components/Login.js
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { User, EyeClosed, EyeIcon} from 'lucide-react'
import { Button } from '@headlessui/react';
import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('This field is required'),
  password: Yup.string().min(6, 'Must be at least 6 characters long').required('This field is required'),
});

function Login() {
  

  const [isShowed, setIsShowed] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
      toast.success("Login succeded", {className: 'bg-primary mt-10'});

      
    }
  });

  const toogleIsShowed = () => {
    setIsShowed(!isShowed);
  }

  const handleGoogleSignIn = () => {
    //
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.div 
        className="p-5 lg:p-8 max-w-sm lg:max-w-md w-full bg-transparent shadow-custom rounded-md"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-primary mb-6 text-center">Login</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-extralight mb-2">Email</label>
            <div className="relative">
              <User className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formik.values.email} 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`} 
                placeholder="Enter your email"
              />
            </div>
            {formik.touched.email && formik.errors.email ? (
              <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
            ) : null}
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-extralight mb-2">Password</label>
            <div className="relative">
              {
                isShowed ? <EyeIcon onClick={toogleIsShowed} className="w-5 h-5 cursor-pointer absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" /> 
                : <EyeClosed onClick={toogleIsShowed} className="w-5 h-5 cursor-pointer absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              }
              
              <input 
                type={isShowed ? "text" : "password"}
                id="password" 
                name="password" 
                value={formik.values.password} 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${formik.touched.password && formik.errors.password ? 'border-red-500' : ''}`} 
                placeholder="Enter your password"
              />
            </div>
            {formik.touched.password && formik.errors.password ? (
              <p className="text-red-500 text-xs mt-1">{formik.errors.password}</p>
            ) : null}
          </div>
          <Button type='submit' className="inline-flex w-full justify-center items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
            Login
          </Button>
        </form>
        <div className="flex items-center mt-6 text-center">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="px-4 text-gray-500">Or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        <motion.div 
          className="mt-4 flex space-x-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Button className="inline-flex w-full justify-center items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-extralight text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
            <img src="/icons/google.png" alt="Google Logo" className="h-5 w-5" />
            <span>Continue with Google</span>
          </Button>
        </motion.div>
      </motion.div>
      <Toaster toastOptions={{className: 'mt-10'}} />
    </div>
  );

}

export default Login;