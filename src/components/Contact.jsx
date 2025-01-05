import React from "react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    const {
      name,
      email,
      messages
    } = data;

    try {
      if(!name || !email || !messages){
        toast.error("required all the field");
        return;
      }


      toast.success("form sent successfully !");
      reset();
    } catch (error) {
      toast.error("internal error");
    }
    
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 2 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact
        <span className="underline underline-offset-4 decoration-1 under font-light">
          With Us
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Ready to Make a Move Let's Build Your Future Together
      </p>
      {/* Contact Form */}

      <form
      onSubmit={handleSubmit(onSubmit)}
       className="max-w-2xl mx-auto text-gray-600 pt-8 ">
        <div className="lg:flex lg:flex-wrap  ">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
              className=" w-full border border-gray-300 rounded py-3 px-4 mt-2 "
              type="text"
              placeholder="Your Name"
              {...register("name",{required:"name is required"})}
            />

            {/* {errors.name && (
              
              toast.error(errors.name.message)
            )} */}
          </div>

          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="email"
              placeholder="Your Email"
              {...register("email",{required:"required email field",
                pattern:{
                  value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message:'enter a valid email'
                }
              })}
            />
            {/* {errors.email && (
              toast.error(errors.email.message)
            )} */}
          </div>
        </div>
        <div className="my-6 text-left">
          Message
          <textarea
          className= {errors.messages ? " outline-none w-full border border-red-700 rounded py-3 px-4 mt-2 h-48 resize-none" : "w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"} 
            // className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
            placeholder="Min 10 Char"
            type="text"
            {...register("messages",{required:"enter messages",
              minLength:{value:10, message:"Min Length at least 20"}
            })}
          ></textarea>
          {/* {errors.name && (
              toast.error(errors.messages.message)
            )} */}
        </div>
        <input
        type="submit" 
        disabled ={isSubmitting}
        value={isSubmitting ? "Submitting..." : "Send Message"}
         className="bg-blue-600 text-white py-2 px-12 mb-10 rounded cursor-pointer" />
          
        {/* </button> */}
      </form>
    </motion.div>
  );
};

export default Contact;
