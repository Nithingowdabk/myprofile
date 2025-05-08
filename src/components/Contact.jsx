import { motion } from "framer-motion"
import { FaGithub, FaDiscord, FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa"

const ContactLink = ({ href, icon: Icon, text, bgColor, textColor }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex flex-col items-center gap-2 group ${bgColor} p-4 rounded-lg`}
    whileHover={{ scale: 1.05 }}
  >
    <Icon size={40} className={`${textColor} transition-transform group-hover:scale-110`} />
    <span className={`text-sm font-medium ${textColor}`}>{text}</span>
  </motion.a>
)

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const message = e.target.message.value
    window.location.href = `mailto:nithinkempegowda2003@gmail.com?subject=Portfolio Contact&body=${encodeURIComponent(message)}`
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gray-100 p-8"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 font-handwriting text-center">Leave a Message</h1>

        <div className="bg-white shadow-lg rounded-lg p-6 mb-12">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Write your thoughts..."
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              ></textarea>
            </div>
            <div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          <ContactLink
            href="https://github.com/NithinGowdabk"
            icon={FaGithub}
            text="NITHINGOWDABK"
            bgColor="bg-gray-800"
            textColor="text-white"
          />
          <ContactLink
            href="mailto:nithinkempegowda2003@gmail.com"
            icon={FaEnvelope}
            text="nithinkempegowda2003@gmail.com"
            bgColor="bg-red-500"
            textColor="text-white"
          />
          <ContactLink
            href="https://www.linkedin.com/in/nithingowdabk"
            icon={FaLinkedin}
            text="NITHINGOWDABK"
            bgColor="bg-blue-700"
            textColor="text-white"
          />
    
        </div>
      </div>
    </motion.div>
  )
}

export default Contact