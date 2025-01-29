import React from "react";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import image from "../../../assets/images/social.jpg";
import { toast } from "react-hot-toast";

const validationSchema = Yup.object({
  name: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen from-indigo-100 to-blue-200 p-6">
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="flex bg-white shadow-xl rounded-3xl overflow-hidden max-w-4xl w-full"
      >
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-primary text-center mb-6 font-montserrat">
            Client Registration
          </h2>
          <Formik
            initialValues={{ name: "", email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              toast.success("Registration successful!");
              console.log(values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting, handleChange, values }) => (
              <Form className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-gray-700 font-sans block mb-1">
                    Full Name
                  </label>
                  <Field 
                    id="name" 
                    name="name"
                    type="text" 
                    value={values.name}
                    onChange={handleChange}
                    className="w-full border border-gray-400 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 shadow-sm"
                  />
                  <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div>
                  <label htmlFor="email" className="text-gray-700 font-sans block mb-1">
                    Email
                  </label>
                  <Field 
                    id="email" 
                    name="email"
                    type="email" 
                    value={values.email}
                    onChange={handleChange}
                    className="w-full border border-gray-400 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 shadow-sm"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div>
                  <label htmlFor="password" className="text-gray-700 font-sans block mb-1">
                    Password
                  </label>
                  <Field 
                    id="password" 
                    name="password"
                    type="password" 
                    value={values.password}
                    onChange={handleChange}
                    className="w-full border border-gray-400 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 shadow-sm"
                  />
                  <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-yellow-500 transition"
                
                >
                  Register
                </motion.button>
              </Form>
            )}
          </Formik>
        </div>
        <div className="w-1/2 flex justify-center p-6">
          <motion.img 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            src={image} 
            alt="Social Media Illustration" 
            className="rounded-lg w-85 " 
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
