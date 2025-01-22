import React, { useState,useRef } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2"; // Import SweetAlert2
import ContactCircle from "@assets/images/ContactFormCircle.png";
import axios from "axios"; // Import Axios for HTTP requests
import ReCAPTCHA from "react-google-recaptcha"; // Import the ReCAPTCHA component
import './css/ContactForm.css'

type FormData = {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  jobTitle?: string;
  phone: number;
  message: string;
};

function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [captchaValue, setCaptchaValue] = useState<string | null>(null); // State for the reCAPTCHA value
  const [captchaError, setCaptchaError] = useState<string | null>(null); // State for reCAPTCHA error message
  const recaptchaRef = useRef<ReCAPTCHA | null>(null); // Create a ref for the reCAPTCHA component

  const onSubmit = async (data: FormData) => {
    
    if (!captchaValue) {
      setCaptchaError("Please complete the reCAPTCHA"); // Set the error message
      return; // Prevent form submission
    }

    
    console.log("Form submitted successfully!", data);
    try {
      // Send form data to the backend
      const response = await axios.post("https://form-backend-backend-latest.onrender.com/submit", data);
     
      // Show success alert if the API response is successful
      if (response.status === 200) {
        await Swal.fire({
          title: "Thank You For Contacting Us",
          text: response.data.message,
          icon: "success",
          confirmButtonText: "Okay",
          customClass: {
            confirmButton: "swal2-confirm", // Apply the custom class
          },
        });
        reset(); // Reset form fields
        setCaptchaValue(null); // Reset captcha value
        setCaptchaError(null); // Clear error after successful submission
        recaptchaRef.current?.reset(); // Reset reCAPTCHA
      }
    } catch (error) {
      // Show error alert if the submission fails
      await Swal.fire({
        title: "Error!",
        text: "There was an error submitting your message. Please try again later.",
        icon: "error",
        confirmButtonText: "Okay",
      });
      console.error("Form submission error:", error);
    }
    
  };

  return (
    <>
      <div className="text-center text-[50px]  leading-[55px]">
        Let’s connect
      </div>
      <div className="text-[26px] font-tahoma text-center leading-normal pt-5">
        Please fill out all required fields. We look forward to hearing from you.
      </div>
      <div
        style={{
          backgroundImage: `url(${ContactCircle})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <form className="flex flex-col pt-10 lg:items-center" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex lg:flex-row xs:flex-col">
            <div className="flex flex-col lg:w-1/2 xs:pb-4 xs:w-full">
              <input
                type="text"
                placeholder="First Name*"
                {...register("firstName", { required: "First Name is required" })}
                className={`lg:mr-[39px] border bg-transparent p-5 lg:w-[440px] xs:w-full xs:mr-0 h-[62px] rounded-[31px] md:text-[36px] xs:text-[22px] italic leading-[39px] font-light placeholder-body-text ${errors.firstName ? "border-yellow-text" : ""}`}
              />
              {errors.firstName && <span className="text-yellow-text p-5 text-[16px]">{errors.firstName.message}</span>}
            </div>
            <div className="flex flex-col lg:w-1/2">
              <input
                type="text"
                placeholder="Last Name*"
                {...register("lastName", { required: "Last Name is required" })}
                className={`border bg-transparent p-5 lg:w-[440px] xs:w-full h-[62px] rounded-[31px] md:text-[36px] xs:text-[22px] italic leading-[39px] font-light placeholder-body-text ${errors.lastName ? "border-yellow-text" : ""}`}
              />
              {errors.lastName && <span className="text-yellow-text p-5 text-[16px]">{errors.lastName.message}</span>}
            </div>
          </div>

          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Company or Organization Name*"
              {...register("company", { required: "Company Name is required" })}
              className={`mt-6 border bg-transparent p-5 lg:w-[905px] xs:w-full h-[62px] rounded-[31px] md:text-[36px] xs:text-[22px] italic leading-[39px] font-light placeholder-body-text ${errors.company ? "border-yellow-text" : ""}`}
            />
            {errors.company && <span className="text-yellow-text p-5 text-[16px]">{errors.company.message}</span>}

            <input
              type="email"
              placeholder="Email Address*"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter a valid email address"
                }
              })}
              className={`mt-6 border bg-transparent p-5 lg:w-[905px] xs:w-full h-[62px] rounded-[31px] md:text-[36px] xs:text-[22px] italic leading-[39px] font-light placeholder-body-text ${errors.email ? "border-yellow-text" : ""}`}
            />
            {errors.email && <span className="text-yellow-text p-5 text-[16px]">{errors.email.message}</span>}
          </div>

          <div className="flex mt-6 lg:flex-row xs:flex-col">
            <div className="lg:w-1/2 xs:pb-4">
              <input
                type="text"
                placeholder="Job Title or Role"
                {...register("jobTitle")}
                className="lg:mr-[39px] border bg-transparent p-5 lg:w-[440px] xs:w-full h-[62px] rounded-[31px] md:text-[36px] xs:text-[22px] italic leading-[39px] font-light placeholder-body-text"
              />
            </div>
            <div className="flex flex-col lg:w-1/2">
              <input
                type="number"
                placeholder="Phone Number*"
                {...register("phone", {
                  required: "Phone Number is required",
                  pattern: {
                    value: /^\d{10}$/, // Only allow exactly 10 digits
                    message: "Phone Number must be exactly 10 digits"
                  }
                })}
                className={`border bg-transparent p-5 lg:w-[440px] xs:w-full h-[62px] rounded-[31px] md:text-[36px] xs:text-[22px] italic leading-[39px] font-light placeholder-body-text ${errors.phone ? "border-yellow-text" : ""}`}
              />
              {errors.phone && <span className="text-yellow-text p-5 text-[16px]">{errors.phone.message}</span>}
            </div>
          </div>

          <div className="flex flex-col">
            <textarea
              rows={10}
              {...register("message", { required: "Message is required" })}
              className={`mt-6 border bg-transparent p-5 lg:w-[919px] xs:w-full rounded-[31px] md:text-[36px] xs:text-[22px] italic leading-[39px] font-light placeholder-body-text ${errors.message ? "border-yellow-text" : ""}`}
              placeholder="How can we help you?*"
            ></textarea>
            {errors.message && <span className="text-yellow-text p-5 text-[16px]">{errors.message.message}</span>}
          </div>
          <div className="flex sm:justify-start xs:justify-center mt-[70px]">
          <ReCAPTCHA
              ref={recaptchaRef} // Add ref to reset the reCAPTCHA after form submission
              sitekey="6Lf6wnYqAAAAADPxZLIEKGb38OoSYKoxDCqMNOOm" // Replace with your site key
              onChange={(value: React.SetStateAction<string | null>) => {
                setCaptchaValue(value);
                setCaptchaError(null); // Clear error if captcha is completed
              }}
            />
            

          </div>
          {captchaError && <div className="text-yellow-text text-center text-[16px] mt-2">{captchaError}</div>}
          <div className="flex sm:justify-start xs:justify-center mt-[70px]">
            <button
              type="submit"
              className="bg-white text-black tracking-[1.5px] text-[30px] leading-9 py-2 px-4 hover:bg-[#DEFF00] transition duration-300 ease-in-out sm:w-[392px] xs:w-[250px] sm:justify-start xs:justify-center h-[62px] rounded-full"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactForm;