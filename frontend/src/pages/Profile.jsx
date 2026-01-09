import { motion } from "framer-motion"

export default function Profile() {
  return (
    <>
      {/* HERO SECTION */}
       <section
         className="h-screen bg-cover bg-center flex items-center relative"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1920&q=80")`,
        }}
      >
  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-7xl font-serif mb-4 text-teal-700 dark:text-indigo-10">
             Raman Photography
            </h1>
            <p className="italic text-lg text-gray-700 dark:text-gray-300">
              Turning real moments into timeless visual stories
            </p>
          </motion.div>
        </div>
      </section>
      {/* INTRO / ABOUT */}
      <section className="
        px-20 py-24
        bg-gradient-to-b from-teal-50 to-sky-100
        dark:from-darkBg dark:to-darkCard
        transition-colors duration-500
      ">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-6 text-teal-700 dark:text-indigo-200">
            Who I Am
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-8">
            I’m <strong>Raman</strong>, a professional photographer based in India.
            My work focuses on capturing emotions, natural light, and authentic
            moments that people can feel — not just see.
            <br /><br />
            From weddings and portraits to travel and lifestyle photography,
            my goal is simple: create images that stay meaningful even years later.
          </p>
        </div>
      </section>

      {/* PHOTOGRAPHY PHILOSOPHY */}
      <section className="
        px-20 py-24
        bg-gradient-to-b from-teal-50 to-sky-100
        dark:from-darkBg dark:to-darkCard
        transition-colors duration-500
      ">
        <h2 className="text-3xl font-serif text-center mb-14 text-teal-700 dark:text-indigo-200">
          My Photography Philosophy
        </h2>

        <div className="grid grid-cols-3 gap-10 text-center">
          <Philosophy
            title="Authenticity"
            text="I believe the best photographs come from real, unforced moments."
          />
          <Philosophy
            title="Timeless Style"
            text="Images that feel just as powerful years from now."
          />
          <Philosophy
            title="Storytelling"
            text="Every frame should tell a story worth remembering."
          />
        </div>
      </section>

      {/* SKILLS / SPECIALTIES */}
      <section className="
        px-20 py-24
        bg-gradient-to-b from-teal-50 to-sky-100
        dark:from-darkBg dark:to-darkCard
        transition-colors duration-500
      ">
        <h2 className="text-3xl font-serif text-center mb-14 text-teal-700 dark:text-indigo-200">
          What I Specialize In
        </h2>

        <div className="grid grid-cols-4 gap-8 text-center">
          <Skill title="Wedding Photography" />
          <Skill title="Portraits" />
          <Skill title="Travel Stories" />
          <Skill title="Lifestyle Shoots" />
        </div>
      </section>

      {/* IMAGE GALLERY */}
      <section className="
        px-20 pb-24
        bg-gradient-to-b from-teal-50 to-sky-100
        dark:from-darkBg dark:to-darkCard
        transition-colors duration-500
      ">
        <h2 className="text-3xl font-serif text-center mb-14 text-teal-700 dark:text-indigo-200">
          My Visual Journey
        </h2>

        <div className="grid grid-cols-3 gap-10">
          {profileImages.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              className="
                overflow-hidden rounded-xl
                shadow-lg dark:shadow-black/40
                transition-all duration-500
              "
            >
              <img
                src={img}
                alt="Photography work"
                className="w-full h-[320px] object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE / STATS */}
      <section className="
        px-20 py-24
        bg-[#eee8e2] dark:bg-darkBg
        transition-colors duration-500
      ">
        <div className="grid grid-cols-3 gap-10 text-center">
          <Stat title="8+ Years Experience" />
          <Stat title="500+ Projects Completed" />
          <Stat title="100% Client Satisfaction" />
        </div>
      </section>

      {/* CTA */}
      <section
      
      className="
        py-24 text-center
        bg-gradient-to-b from-teal-700 to-sky-700
        dark:from-indigo-400 dark:to-indigo-600
        text-white dark:text-black
        transition-colors duration-500
      "  >
        <h2 className="text-3xl font-serif mb-4">
          Let’s Create Something Timeless
        </h2>
        <p className="italic mb-6">
          Your story deserves to be beautifully captured
        </p>
      
      </section>
    </>
  )
}

/* SMALL COMPONENTS */
function Philosophy({ title, text }) {
  return (
    <div>
      <h3 className="text-xl font-serif mb-3 text-teal-700 dark:text-indigo-200">
        {title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300">
        {text}
      </p>
    </div>
  )
}

function Skill({ title }) {
  return (
    <div className="bg-white dark:bg-darkCard p-6 rounded-xl shadow-lg transition-colors duration-500">
      <p className="font-serif text-teal-700 dark:text-indigo-200">
        {title}
      </p>
    </div>
  )
}

function Stat({ title }) {
  return (
    <div>
      <h3 className="text-3xl font-serif text-teal-700 dark:text-indigo-200">
        {title}
      </h3>
    </div>
  )
}

/* IMAGES */
const profileImages = [
  "https://static.vecteezy.com/system/resources/thumbnails/024/696/109/small/ai-generated-ai-generative-illustration-of-adventure-explore-mountain-mountaineering-lifestyle-graphic-art-photo.jpg",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
  "https://static.vecteezy.com/system/resources/thumbnails/023/219/722/small/traveler-woman-joy-relaxing-on-wood-bridge-in-beautiful-destination-island-phang-nga-bay-adventure-lifestyle-travel-thailand-tourism-nature-landscape-asia-tourist-on-summer-holiday-generative-ai-photo.jpg",
  "https://static.vecteezy.com/system/resources/thumbnails/047/353/614/small/colourful-hot-air-balloons-floating-in-the-blue-sky-during-a-summer-festival-capturing-the-essence-of-adventure-and-travel-photo.jpg",
  "https://img.freepik.com/free-photo/joyful-celebration-love-marriage-generated-by-ai_188544-47702.jpg",
]


// 


// 
// 