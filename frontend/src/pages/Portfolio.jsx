import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <>
      {/* HERO SECTION */}
    <section
        className="h-screen bg-cover bg-center flex items-center relative"
        style={{
          backgroundImage: `url("https://iso.500px.com/wp-content/uploads/2019/09/by-yang-.jpeg")`,
        }}
      >
  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center px-6"
    >
      <h1 className="text-5xl font-serif mb-4 text-white drop-shadow-lg">
        Portfolio
      </h1>
      <p className="italic text-lg text-white">
        A Collection of Stories Told Through Images
      </p>
    </motion.div>
  </div>
</section>


      {/* PORTFOLIO INTRO */}
      <section className="px-20 py-20 text-center bg-gradient-to-b from-teal-50 to-sky-100 dark:from-darkBg/60 dark:to-darkCard/40">
        <h2 className="text-3xl font-serif mb-4 text-teal-700 dark:text-indigo-200">
          Selected Works
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
          Every photograph is a moment frozen in time.  
          Here is a curated selection of my favorite works,
          capturing emotions, beauty, and real stories.
        </p>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="px-20 pb-24 bg-gradient-to-b from-teal-50 to-sky-100 dark:from-darkBg/60 dark:to-darkCard/40">
        <div className="grid grid-cols-3 gap-10">
          {images.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[380px] object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-teal-700/40 dark:bg-indigo-900/50 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center text-white">
                <h3 className="text-2xl font-serif mb-2">
                  {item.title}
                </h3>
                <p className="text-sm italic">
                  {item.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
    <section
  className="py-20 text-center bg-cover bg-center relative h-[70vh]"
  style={{
    backgroundImage:
      "url('https://www.smartphotoeditors.com/blog/wp-content/uploads/2020/05/a-complete-guide-to-professional-event-photography.png')",
  }}
>
    
</section>

    </>
  );
}

/* ONLINE AI / HIGH-QUALITY IMAGES */
const images = [
  {
    title: "Wedding Moments",
    category: "Wedding Photography",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Golden Hour",
    category: "Couple Shoot",
    img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Travel Stories",
    category: "Travel Photography",
    img: "https://img.freepik.com/free-photo/tokyo-skyline-with-rainbow-bridge-tokyo-tower-tokyo-japan_335224-23.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    title: "Lifestyle Portrait",
    category: "Lifestyle",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Nature & Light",
    category: "Art Photography",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Emotional Frames",
    category: "Storytelling",
    img: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80",
  },
];
