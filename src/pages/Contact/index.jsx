import { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Toaster, toast } from "react-hot-toast";

export default function ContactUs() {
  const initialValues = { name: "", email: "", subject: "", message: "" };

  const validate = (values) => {
    const errors = {};
    if (!values.name) errors.name = "Ce champ est requis";
    if (!values.email) {
      errors.email = "Ce champ est requis";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Adresse email invalide";
    }
    if (!values.subject) errors.subject = "Ce champ est requis";
    if (!values.message) errors.message = "Ce champ est requis";
    return errors;
  };

  const handleSubmit = (values, { resetForm }) => {
    if (Object.keys(values).every((key) => values[key])) {
      toast.success("Message envoyé avec succès!");
      resetForm();
    } else {
      toast.error("❌ Il y a des erreurs dans le formulaire!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 pt-[80px]">
      <motion.div 
        className="bg-transparent shadow- rounded-lg grid md:grid-cols-2 w-full max-w-3xl p-6 gap-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-accent text-white p-6 rounded-lg flex flex-col justify-center text-center space-y-4">
          <h2 className="text-lg font-bold mb-2">Connectez-vous avec nous</h2>
          <p className="text-sm mb-4">Suivez-nous sur nos réseaux sociaux ou contactez-nous directement.</p>
          <div className="flex justify-center gap-4 text-xl">
            <a href="#" className="hover:text-accent-light"><FaFacebook /></a>
            <a href="#" className="hover:text-accent-light"><FaInstagram /></a>
            <a href="#" className="hover:text-accent-light"><FaTwitter /></a>
          </div>
          <button className="mt-4 flex items-center justify-center gap-2 bg-primary text-white px-4 py-2 rounded-md text-sm hover:bg-primary-dark">
            <FaWhatsapp /> WhatsApp
          </button>
        </div>

        <div className="p-6 flex flex-col space-y-4">
          <h2 className="text-lg font-bold mb-4">Envoyez-nous un message</h2>
          <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label className="block text-xs font-medium">Nom complet</label>
                  <Field type="text" name="name" className="w-full p-3 border rounded-md text-sm" />
                  <ErrorMessage name="name" component="p" className="text-error text-xs" />
                </div>
                <div>
                  <label className="block text-xs font-medium">Adresse email</label>
                  <Field type="email" name="email" className="w-full p-3 border rounded-md text-sm" />
                  <ErrorMessage name="email" component="p" className="text-error text-xs" />
                </div>
                <div>
                  <label className="block text-xs font-medium">Sujet</label>
                  <Field type="text" name="subject" className="w-full p-3 border rounded-md text-sm" />
                  <ErrorMessage name="subject" component="p" className="text-error text-xs" />
                </div>
                <div>
                  <label className="block text-xs font-medium">Message</label>
                  <Field as="textarea" name="message" className="w-full p-3 border rounded-md text-sm" rows="4" />
                  <ErrorMessage name="message" component="p" className="text-error text-xs" />
                </div>
                <motion.button 
                  type="submit" 
                  className="w-full bg-primary text-white p-3 rounded-md text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Envoi..." : "Envoyer"}
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
