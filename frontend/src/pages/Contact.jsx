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

  const handleMail = () => {
  const subject = "New Contact Message";

  const body = `
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}
  `;

  window.location.href = `mailto:chandansharma13432@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
};



  return (
    <>
      {/* HERO SECTION */}
      <section
        className="h-[70vh] sm:h-screen bg-cover bg-center flex items-center relative"
        style={{
          backgroundImage: `url("https://t4.ftcdn.net/jpg/08/54/93/19/360_F_854931975_H9MWN2CW06i6Kwpjl12yqILILhUGOGQC.jpg")`,
        }}
      >
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif mb-4 text-teal-700 dark:text-indigo-200">
              Service
            </h1>
            <p className="italic text-base sm:text-lg text-gray-700 dark:text-gray-300">
              The Story Behind the Lens
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT FORM + INFO */}
      <section className="px-6 sm:px-10 lg:px-20 py-20 bg-gradient-to-b from-teal-50 to-sky-100 dark:from-darkBg/60 dark:to-darkCard/40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-darkCard rounded-xl p-6 sm:p-10 shadow-2xl border border-teal-100 dark:border-indigo-400/30"
          >
          <div className="flex justify-center">
  <h2 className="text-2xl sm:text-3xl font-serif mb-6 text-teal-700 dark:text-indigo-200">
    Send Me a Message
  </h2>
</div>
            <form  className="space-y-5">
          


              {/* BUTTON */}
              <button onClick={handleMail}
                className="w-full bg-gradient-to-r from-teal-700 to-sky-600 
                dark:from-indigo-400 dark:to-indigo-300 text-white dark:text-black 
                px-6 py-4 rounded-lg font-serif text-lg 
                hover:scale-105 transition-all duration-300 shadow-lg mt-20"
              >
               Contect Us
              </button>
            </form>
          </motion.div>

          {/* IMAGES */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="grid grid-cols-2 gap-4 sm:gap-6"
          >
            {contactImages.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl shadow-xl hover:scale-105 transition"
              >
                <img
                  src={img}
                  alt="Photography"
                  className="w-full h-36 sm:h-48 object-cover"
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
  "https://images.unsplash.com/photo-1488684430052-f2d92fb178c2",
  "https://images.unsplash.com/photo-1617459840892-6d97e6359eae",
];
