import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"


export default function Services() {
const navigate=useNavigate()
  return (
    <>
      {/* HERO SECTION */}
  <section
  className="h-screen bg-cover bg-center flex items-center relative"
  style={{
    backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/024/696/222/original/ai-generated-ai-generative-illustration-of-adventure-explore-mountain-mountaineering-lifestyle-graphic-art-photo.jpg")`,
  }}
>
  <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-7xl font-serif mb-4 text-teal-700 dark:text-indigo-200">
              Service
            </h1>
            <p className="italic text-lg text-gray-700 dark:text-gray-300">
              The Story Behind the Lens
            </p>
          </motion.div>
        </div>
      </section>


      {/* INTRO */}
      <section className="px-20 py-20 text-center max-w-3xl mx-auto bg-gradient-to-b from-teal-50 to-sky-100 dark:from-darkBg/60 dark:to-darkCard/40">
        <h2 className="text-3xl font-serif mb-4 text-teal-700 dark:text-indigo-200">
          What I Offer
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Each photography service is thoughtfully designed to capture real
          emotions, authentic moments, and timeless memories — tailored to
          your story and vision.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="px-20 pb-24 bg-gradient-to-b from-teal-50 to-sky-100 dark:from-darkBg/60 dark:to-darkCard/40">
        <div className="grid grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="group rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-[280px] object-cover"
              />

              <div className="p-6 bg-white dark:bg-darkCard">
                <h3 className="text-2xl font-serif mb-2 text-teal-700 dark:text-indigo-200">
                  {service.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {service.desc}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                  {service.note}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="bg-gradient-to-b from-teal-50 to-sky-100 dark:from-darkCard/50 dark:to-darkCard/30 py-20 px-20">
        <h2 className="text-3xl font-serif text-center mb-12 text-teal-700 dark:text-indigo-200">
          My Working Process
        </h2>

        <div className="grid grid-cols-4 gap-8 text-center">
          <Process step="01" title="Consultation" />
          <Process step="02" title="Planning" />
          <Process step="03" title="Photography" />
          <Process step="04" title="Editing & Delivery" />
        </div>
      </section>

      {/* CTA */}
      <section

       className="py-10 text-center bg-cover bg-center relative h-[70vh]"
  style={{
    backgroundImage:
      "url('https://www.hdwallpapers.in/download/photographer_sunset_4k-HD.jpg')",
  }}
>
     
        <div className="py-20">
          <h2 className="text-3xl font-serif mb-4 text-teal-700 dark:text-indigo-200">
            Ready to Capture Your Story?
          </h2>
          <p className="mb-6 italic text-gray-700 dark:text-gray-300">
            Let’s create something truly unforgettable
          </p>
          <button className="border border-teal-700 text-teal-700 dark:border-indigo-300 dark:text-indigo-200 px-8 py-3 rounded-lg
            hover:bg-teal-700 hover:text-white dark:hover:bg-indigo-300 dark:hover:text-white transition-all duration-300 shadow-md"
          onClick={() => navigate("/contact")}>
            Book a Session
          </button>
        </div>
      </section>
    </>
  )
}

/* SERVICE DATA */
const services = [
  {
    title: "Wedding Photography",
    desc:
      "Elegant and emotional wedding photography capturing every detail, from candid moments to timeless portraits.",
    note: "Full-day coverage • Pre-wedding shoots • High-end editing",
    img:
      "https://t3.ftcdn.net/jpg/11/97/52/00/360_F_1197520001_ymea6aXs1uUhBijweFiONUvpqjTULvzP.jpg",
  },
  {
    title: "Travel Photography",
    desc:
      "Breathtaking travel imagery that tells stories of places, cultures, and unforgettable adventures.",
    note: "Destination shoots • Landscapes • Story-driven visuals",
    img:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Lifestyle Sessions",
    desc:
      "Natural and relaxed lifestyle photography that reflects real emotions and genuine connections.",
    note: "Family • Personal branding • Creative portraits",
    img:
      "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?cs=srgb&dl=pexels-pixabay-237272.jpg&fm=jpg",
  },
]

function Process({ step, title }) {
  return (
    <div>
      <span className="text-4xl font-serif block mb-2 text-teal-700 dark:text-indigo-200">{step}</span>
      <h3 className="font-serif text-lg text-gray-700 dark:text-gray-300">{title}</h3>
    </div>
  )
}


