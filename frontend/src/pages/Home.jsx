import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const navigate = useNavigate();
  const [showLearn, setShowLearn] = useState(false);

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="min-h-screen bg-cover bg-center flex items-center relative"
        style={{
          backgroundImage:
            `url("https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80")`,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-6 md:px-12 lg:px-20 z-10"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 text-white drop-shadow-xl">
            Capturing Moments,<br />Telling Stories.
          </h1>

          <button
            className="border border-white text-white px-6 py-3 rounded-lg
            hover:bg-white hover:text-black transition-all duration-300 shadow-md"
            onClick={() => navigate("/profile")}
          >
            View Portfolio
          </button>
        </motion.div>
      </section>

      {/* FEATURED GALLERIES */}
      <section className="py-20 text-center bg-gradient-to-b from-teal-50 to-sky-100 dark:from-darkBg/60 dark:to-darkCard/40">
        <h2 className="text-2xl md:text-3xl font-serif mb-2 text-teal-700 dark:text-indigo-200">
          Featured Galleries
        </h2>
        <p className="mb-12 text-gray-700 dark:text-gray-300">
          Exploring the Beauty of Life
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12 lg:px-20">
          <Gallery
            title="Majestic Peaks"
            img="https://images.unsplash.com/photo-1519682577862-22b62b24e493?auto=format&fit=crop&w=900&q=80"
          />
          <Gallery
            title="Sunrise Over Hills"
            img="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
          />
          <Gallery
            title="Snowy Mountains"
            img="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=80"
          />
        </div>
      </section>

      {/* MOUNTAIN STORIES */}
      <section className="py-24 bg-gradient-to-b from-teal-50 to-sky-100 dark:from-darkCard/50 dark:to-darkCard/30">
        <h2 className="text-2xl md:text-3xl font-serif text-center mb-12 text-teal-700 dark:text-indigo-200">
          Mountain & Nature Stories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 md:px-12 lg:px-20">
          {mountainImages.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08, rotateX: 6, rotateY: -6 }}
              className="overflow-hidden rounded-lg shadow-xl"
            >
              <img
                src={img}
                alt="Mountain photography"
                className="w-full h-[240px] md:h-[260px] object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="flex flex-col lg:flex-row px-6 md:px-12 lg:px-20 py-20 gap-12 items-center bg-gradient-to-b from-teal-50 to-sky-100 dark:from-darkBg/60 dark:to-darkCard/40">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-2xl md:text-3xl font-serif mb-2 text-teal-700 dark:text-indigo-200">
            About Me
          </h2>
          <p className="italic mt-2 text-gray-700 dark:text-gray-400">
            Creating Timeless Memories
          </p>

          <p className="mt-6 text-gray-600 dark:text-gray-300">
            Hi, I'm <b>Raman</b>, a passionate photographer capturing the beauty
            of life through every frame.
          </p>

          <button
            className="mt-6 border border-teal-700 text-teal-700 dark:border-indigo-300 dark:text-indigo-200 px-6 py-3 rounded-lg
            hover:bg-teal-700 hover:text-white dark:hover:bg-indigo-300 transition-all duration-300 shadow-md"
            onClick={() => setShowLearn(!showLearn)}
          >
            Learn More
          </button>

          {showLearn && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-5 md:p-6 bg-white dark:bg-darkCard rounded-lg shadow-xl"
            >
              <h3 className="text-xl md:text-2xl font-serif text-teal-700 dark:text-indigo-200 mb-3">
                Learn More About Raman
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Wedding • Portrait • Travel • Lifestyle Photography with a
                cinematic and emotional touch.
              </p>
            </motion.div>
          )}
        </motion.div>

        <motion.img
          whileHover={{ scale: 1.05, rotateY: 8 }}
          className="w-full max-w-sm lg:max-w-[400px] rounded-lg shadow-xl"
          src="https://img.freepik.com/premium-photo/photographer-hd-images-photography-hd-image_1257223-128600.jpg"
          alt="Photographer"
        />
      </section>

      {/* FULL WIDTH IMAGE */}
      <section
        className="min-h-[50vh] md:min-h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: "url(https://i.redd.it/wdakf9dunnya1.jpg)" }}
      >
        <div className="bg-black/30 h-full flex items-center justify-center px-6">
          <h2 className="text-white text-2xl md:text-4xl font-serif text-center drop-shadow-xl">
            Inspired by Nature.<br />Driven by Emotion.
          </h2>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-20 text-center bg-gradient-to-b from-teal-50 to-sky-100 dark:from-darkCard/50 dark:to-darkCard/30">
        <h2 className="text-2xl md:text-3xl font-serif text-teal-700 dark:text-indigo-200">
          Client Love
        </h2>
        <p className="mt-6 italic max-w-xl mx-auto text-gray-700 dark:text-gray-300">
          “Raman captured our day perfectly. The photos are beyond amazing!”
        </p>
        ⭐⭐⭐⭐⭐
      </section>
    </>
  );
}

function Gallery({ img, title }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotateY: 8 }}
      className="relative group overflow-hidden rounded-lg shadow-xl"
    >
      <img
        src={img}
        alt={title}
        className="w-full h-[280px] md:h-[350px] object-cover transition"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xl md:text-2xl font-serif">
        {title}
      </div>
    </motion.div>
  );
}

const mountainImages = [
  "https://4kwallpapers.com/images/wallpapers/milky-way-starry-sky-night-mountains-lake-reflection-cold-5k-2560x1440-287.jpg",
  "https://images.pexels.com/photos/7846476/pexels-photo-7846476.jpeg",
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
  "https://img.freepik.com/premium-photo/close-up-clock-camera_1048944-23873243.jpg",
];
