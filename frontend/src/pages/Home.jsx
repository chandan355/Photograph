import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="h-screen bg-cover bg-center flex items-center relative"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80")`,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-left px-20 z-10"
        >
          <h1 className="text-5xl font-serif mb-6 text-white drop-shadow-lg">
            Capturing Moments,<br />Telling Stories.
          </h1>
          <button className="border border-white text-white px-6 py-3 rounded-lg
            hover:bg-white hover:text-black transition-all duration-300 shadow-md"
          onClick={() => navigate("/about")}>
            View Portfolio
          </button>
        </motion.div>
      </section>

      {/* FEATURED GALLERIES */}
      <section className="py-20 text-center bg-gradient-to-b from-teal-50 to-sky-100 dark:from-darkBg/60 dark:to-darkCard/40">
        <h2 className="text-3xl font-serif mb-2 text-teal-700 dark:text-indigo-200">
          Featured Galleries
        </h2>
        <p className="mb-12 text-gray-700 dark:text-gray-300">
          Exploring the Beauty of Life
        </p>

        <div className="grid grid-cols-3 gap-8 px-20">
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

      {/* MOUNTAIN & NATURE STORIES */}
      <section className="bg-gradient-to-b from-teal-50 to-sky-100 dark:from-darkCard/50 dark:to-darkCard/30 py-24">
        <h2 className="text-3xl font-serif text-center mb-12 text-teal-700 dark:text-indigo-200">
          Mountain & Nature Stories
        </h2>

        <div className="grid grid-cols-4 gap-6 px-20">
          {mountainImages.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={img}
                alt="Mountain photography"
                className="w-full h-[260px] object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="flex px-20 py-20 gap-16 items-center bg-gradient-to-b from-teal-50 to-sky-100 dark:from-darkBg/60 dark:to-darkCard/40">
        <div>
          <h2 className="text-3xl font-serif mb-2 text-teal-700 dark:text-indigo-200">
            About Me
          </h2>
          <p className="italic mt-2 text-gray-700 dark:text-gray-400">
            Creating Timeless Memories
          </p>
          <p className="mt-6 text-gray-600 dark:text-gray-300">
            Hi, I'm <b>Raman</b>, a passionate photographer capturing the
            beauty of life through every frame.
          </p>
          <button className="mt-6 border border-teal-700 text-teal-700 dark:border-indigo-300 dark:text-indigo-200 px-6 py-3 rounded-lg
            hover:bg-teal-700 hover:text-white dark:hover:bg-indigo-300 dark:hover:text-white transition-all duration-300 shadow-md"
          >
            Learn More
          </button>
        </div>

        <img
          className="w-[400px] rounded-lg shadow-lg"
          src="https://img.freepik.com/premium-photo/photographer-hd-images-photography-hd-image_1257223-128600.jpg"
          alt="Photographer Portrait"
        />
      </section>

      {/* FULL-WIDTH NATURE IMAGE */}
      <section
        className="h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://i.redd.it/wdakf9dunnya1.jpg)",
        }}
      >
        <div className="bg-black/30 h-full flex items-center justify-center">
          <h2 className="text-white text-4xl font-serif text-center drop-shadow-lg">
            Inspired by Nature.<br />Driven by Emotion.
          </h2>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-20 text-center bg-gradient-to-b from-teal-50 to-sky-100 dark:from-darkCard/50 dark:to-darkCard/30">
        <h2 className="text-3xl font-serif text-teal-700 dark:text-indigo-200">
          Client Love
        </h2>
        <p className="mt-6 italic max-w-xl mx-auto text-gray-700 dark:text-gray-300">
          “Raman captured our day perfectly. The photos are beyond amazing!”
        </p>
        ⭐⭐⭐⭐⭐
      </section>

      {/* CTA */}
      <section
  className="py-20 text-center bg-cover bg-center relative h-[70vh]"
  style={{
    backgroundImage:
      "url('https://asset.fujifilm.com/www/us/files/styles/1120x400/public/2020-08/5197d9ed172a928c16214c0abf0e0484/FUJIFILM-USA-digital-cameras-banner-X-series.jpg?itok=vADq7VUq')",
  }}
>
 
  

</section>
    </>
  );
}

function Gallery({ img, title }) {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-md">
      <img
        src={img}
        alt={title}
        className="w-full h-[350px] object-cover group-hover:scale-110 transition"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-2xl font-serif">
        {title}
      </div>
    </div>
  );
}

const mountainImages = [
  "https://4kwallpapers.com/images/wallpapers/milky-way-starry-sky-night-mountains-lake-reflection-cold-5k-2560x1440-287.jpg",
  "https://images.pexels.com/photos/7846476/pexels-photo-7846476.jpeg?cs=srgb&dl=pexels-sanket-barik-2808574-7846476.jpg&fm=jpg",
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=80",
  "https://img.freepik.com/premium-photo/close-up-clock-camera_1048944-23873243.jpg?semt=ais_hybrid&w=740&q=80",
];



//  Ready to Book Your Session?
