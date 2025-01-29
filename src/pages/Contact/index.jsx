import { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";  // Import de Yup
import { Toaster, toast } from "react-hot-toast";

export default function ContactUs() {
  const initialValues = { name: "", email: "", subject: "", message: "" };

  // Validation avec Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("This field is required"),
    email: Yup.string().email("Invalid email address").required("This field is required"),
    subject: Yup.string().required("This field is required"),
    message: Yup.string().required("This field is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    toast.success("Message sent successfully!");
    resetForm();
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 pt-[80px]">
      <motion.div 
        className="bg-transparent shadow- rounded-lg grid md:grid-cols-2 w-full max-w-7xl p-6 gap-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-accent text-white p-6 rounded-lg flex flex-col justify-center text-center space-y-4">
          <h2 className="text-lg font-bold mb-2">Connect with Us</h2>
          <p className="text-sm mb-4">Follow us on our social networks or contact us directly.</p>
          <div className="flex justify-center gap-4 text-xl">
            <a href="#" className="hover:text-accent-light"><FaFacebook /></a>
            <a href="#" className="hover:text-accent-light"><FaInstagram /></a>
            <a href="#" className="hover:text-accent-light"><FaTwitter /></a>
          </div>
          <motion.button className="mt-4 flex items-center justify-center gap-2 bg-primary text-white px-4 py-2 rounded-md text-sm hover:bg-primary-dark"
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp /> WhatsApp
          </motion.button>
        </div>

        <div className="p-6 flex flex-col space-y-4">
          <h2 className="text-lg font-bold mb-4 text-primary">Send Us a Message</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema} // Utilisation de la validation Yup
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label className="block text-xs font-medium">Full Name</label>
                  <Field 
                    type="text" 
                    name="name" 
                    className="w-full p-3 border rounded-md text-sm focus:ring-2 focus:ring-primary focus:outline-none" 
                  />
                  <ErrorMessage name="name" component="p" className="text-error text-xs" />
                </div>
                <div>
                  <label className="block text-xs font-medium">Email Address</label>
                  <Field 
                    type="email" 
                    name="email" 
                    className="w-full p-3 border rounded-md text-sm focus:ring-2 focus:ring-primary focus:outline-none" 
                  />
                  <ErrorMessage name="email" component="p" className="text-error text-xs" />
                </div>
                <div>
                  <label className="block text-xs font-medium">Subject</label>
                  <Field 
                    type="text" 
                    name="subject" 
                    className="w-full p-3 border rounded-md text-sm focus:ring-2 focus:ring-primary focus:outline-none" 
                  />
                  <ErrorMessage name="subject" component="p" className="text-error text-xs" />
                </div>
                <div>
                  <label className="block text-xs font-medium">Message</label>
                  <Field 
                    as="textarea" 
                    name="message" 
                    className="w-full p-3 border rounded-md text-sm focus:ring-2 focus:ring-primary focus:outline-none" 
                    rows="4" 
                  />
                  <ErrorMessage name="message" component="p" className="text-error text-xs" />
                </div>
                <motion.button 
                  type="submit" 
                  className="w-full bg-primary text-white p-3 rounded-md text-sm"
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </motion.button>
              </Form>
            )}
          </Formik>
        </div>
      </motion.div>

      <Toaster />
    </div>
  );
}
