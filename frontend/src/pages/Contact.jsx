import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("✅ Message Sent Successfully!");
    }
  };


  return (
    <>
      {/* HERO SECTION */}
     <section
  className="h-[80vh] bg-cover bg-center bg-no-repeat relative"
  style={{
    backgroundImage:
      "url('https://img.freepik.com/premium-photo/photographer-hd-images-photography-hd-image_1257223-128600.jpg')",
  }}
>
  {/* VERY LIGHT COLOR OVERLAY */}
  <div className="absolute inset-70 bg-black/60"></div>
  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl font-serif mb-4 text-teal-700 dark:text-indigo-200">
              Contact Me
            </h1>
            <p className="italic text-lg text-gray-700 dark:text-gray-300">
              Let’s Capture Your Story Together
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT FORM + INFO */}
     <section className="px-20 py-24 bg-gradient-to-b from-teal-50 to-sky-100 dark:from-darkBg/60 dark:to-darkCard/40">
      <div className="grid grid-cols-2 gap-16">

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white dark:bg-darkCard rounded-xl p-10 shadow-2xl border border-teal-100 dark:border-indigo-400/30"
        >
          <h2 className="text-3xl font-serif mb-6 text-teal-700 dark:text-indigo-200">
            Send Me a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* NAME */}
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`w-full p-4 rounded-lg border 
                ${errors.name ? "border-red-500" : "border-gray-300"}
                focus:outline-none focus:ring-2 focus:ring-teal-400
                dark:focus:ring-indigo-300 transition bg-gradient-to-r from-teal-50 to-white dark:from-darkBg dark:to-darkCard`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className={`w-full p-4 rounded-lg border 
                ${errors.email ? "border-red-500" : "border-gray-300"}
                focus:outline-none focus:ring-2 focus:ring-teal-400
                dark:focus:ring-indigo-300 transition bg-gradient-to-r from-sky-50 to-white dark:from-darkBg dark:to-darkCard`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* MESSAGE */}
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className={`w-full p-4 rounded-lg border 
                ${errors.message ? "border-red-500" : "border-gray-300"}
                focus:outline-none focus:ring-2 focus:ring-teal-400
                dark:focus:ring-indigo-300 transition h-40 resize-none 
                bg-gradient-to-r from-indigo-50 to-white dark:from-darkBg dark:to-darkCard`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-700 to-sky-600 
              dark:from-indigo-400 dark:to-indigo-300 text-white dark:text-black 
              px-6 py-4 rounded-lg font-serif text-lg 
              hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Send Message
            </button>

          </form>
        </motion.div>

        {/* AI IMAGES */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="grid grid-cols-2 gap-6"
        >
          {contactImages.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-xl hover:scale-105 transition"
            >
              <img
                src={img}
                alt="AI Photography"
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
    </>
  );
}

const contactImages = [
  "https://img.freepik.com/premium-photo/asian-man-travel-photography-by-beautiful-nature-landscape_40566-145.jpg?w=360",
  "https://static.vecteezy.com/system/resources/thumbnails/056/828/847/small/an-older-man-taking-a-with-his-camera-free-photo.jpeg",
  "https://images.unsplash.com/photo-1488684430052-f2d92fb178c2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBob3RvZ3JhcGh5fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1617459840892-6d97e6359eae?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBob3RvZ3JhcGh5JTIwY2FtZXJhfGVufDB8fDB8fHww",
];
