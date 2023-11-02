import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

const Contact = () => {
  const form = useRef();
  const [showAlert, setShowAlert] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const { elements } = form.current;
    const email = elements["user_email"].value;
    const subject = elements["user_name"].value;
    const message = elements["message"].value;

    if (email && subject && message) {
      emailjs
        .sendForm(
          "service_oiva6cr",
          "template_r10zknu",
          form.current,
          "0UaqWXcidwDYPFfIx"
        )
        .then(
          (result) => {
            console.log(result.text);
            e.target.reset();
            setShowAlert(true);
            toast.success("Successfully toasted!", {
              position: toast.POSITION.TOP_CENTER,
            });
            setTimeout(() => {
              setShowAlert(false);
            }, 2500);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      toast.error("Please fill in all fields before sending the email.");
      console.log("Working");
    }
  };

  return (
    <section
      name="contact"
      className="bg-white dark:bg-gray-800 h-screen pt-14 "
    >
      {showAlert && (
        <div
          className="bg-green-500  text-white text-center py-2 fixed top-auto left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
          style={{ animation: "fadeInOut 5s", width: "50%" }}
        >
          Message sent successfully
        </div>
      )}
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <form ref={form} onSubmit={sendEmail} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              name="user_email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="user_name"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required=""
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
              defaultValue={""}
            />
          </div>
          <button
            type="submit"
            value="Send"
            className="cursor-pointer hover:scale-110 duration-200 py-3 px-5 text-xl font-medium text-center text-white rounded-lg bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
