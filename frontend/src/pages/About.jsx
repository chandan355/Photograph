import { motion } from "framer-motion"

export default function About() {
  return (
    <>
      {/* HERO SECTION */}
    <section
         className="h-screen bg-cover bg-center flex items-center relative"
        style={{
          backgroundImage: `url("https://media.licdn.com/dms/image/v2/D5612AQFbIyYHodCo0A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1693928931564?e=2147483647&v=beta&t=LH39omi5MaeDBWRlUWPGfES7QzeglnB4cYNPTGFDCfQ")`,
        }}
      >
  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-7xl font-serif mb-4 text-teal-700 dark:text-indigo-200">
              About Raman
            </h1>
            <p className="italic text-lg text-gray-700 dark:text-gray-300">
              The Story Behind the Lens
            </p>
          </motion.div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="px-20 py-20 grid grid-cols-2 gap-16 items-center bg-gradient-to-b from-teal-50 to-sky-100 dark:from-darkBg/60 dark:to-darkCard/40">
        <div>
          <h2 className="text-3xl font-serif mb-4 text-teal-700 dark:text-indigo-200">
            Capturing Life, One Frame at a Time
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Raman is a professional photographer with a passion for storytelling.
            Every image is crafted to preserve emotion, atmosphere, and authenticity.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            With years of experience in wedding, lifestyle, and travel photography,
            Raman believes that the best photographs are the ones that feel real,
            timeless, and deeply personal.
          </p>
        </div>

        <img
          src="https://www.hdwallpapers.in/download/vehicles_on_road_between_river_buildings_during_sunset_4k_5k_hd_sunset-HD.jpg"
          alt="Photographer Raman"
          className="rounded-lg shadow-lg"
        />
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="bg-gradient-to-b from-teal-50 to-sky-100 dark:from-darkCard/50 dark:to-darkCard/30 py-20 px-20">
        <h2 className="text-3xl font-serif text-center mb-12 text-teal-700 dark:text-indigo-200">
          Photography Philosophy
        </h2>

        <div className="grid grid-cols-3 gap-10 text-center">
          <Philosophy
            title="Authentic Moments"
            text="Capturing genuine emotions and real moments without posing or pressure."
          />
          <Philosophy
            title="Timeless Style"
            text="Images that remain beautiful and meaningful even after years."
          />
          <Philosophy
            title="Storytelling"
            text="Every photo tells a story — your story."
          />
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="px-20 py-20 grid grid-cols-2 gap-16 items-center bg-gradient-to-b from-teal-50 to-sky-100 dark:from-darkBg/60 dark:to-darkCard/40">
        <img
          src="https://riotur.rio/wp-content/uploads/2024/05/ai-generated-beautiful-sunset-at-copacabana-beach-rio-de-janeiro-brazil-ipanema-beach-in-rio-de-janeiro-on-a-gorgeous-sunset-ai-generated-free-photo.jpg"
          alt="Photography experience"
          className="rounded-lg shadow-lg"
        />

        <div>
          <h2 className="text-3xl font-serif mb-4 text-teal-700 dark:text-indigo-200">
            Experience & Expertise
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            From intimate weddings to breathtaking travel destinations,
            Raman has worked with diverse clients across different locations.
          </p>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li>📸 7+ years professional experience</li>
            <li>💍 150+ weddings captured</li>
            <li>🌍 Travel shoots across multiple countries</li>
            <li>✨ Featured in photography magazines</li>
          </ul>
        </div>
      </section>

      {/* CTA SECTION */}
      <section
  className="py-30 text-center bg-black bg-center relative h-[70vh]"
  style={{
    backgroundImage:
      "url('https://img.freepik.com/premium-photo/single-camera-surrounded-by-numerous-other-cameras-crowd-photographers_681147-26695.jpg')",
  }}
>
        
      </section>
    </>
  )
}

function Philosophy({ title, text }) {
  return (
    <div>
      <h3 className="text-xl font-serif mb-2 text-teal-700 dark:text-indigo-200">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{text}</p>
    </div>
  )
}
