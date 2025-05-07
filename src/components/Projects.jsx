import React from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
  {
    "title": "village seva chatbot",
    "description": "A machine learning-based system that detects intruders using computer vision, recognizes known faces, and sends alerts via Telegram.",
    "tags": ["Python", "OpenCV", "Machine Learning", "Computer Vision", "Flask"],
    "githubUrl": "https://github.com/Nithingowdabk/Village-Seva-ChatBot",
    "imageUrl": "src/assets/chatbot.webp"
  },
  {
    title: "School Management system",
    description: "This block of code is designed to manage the process of sending out fee payment reminders. It starts by connecting to the database to identify which pending fees have received the fewest reminders so far. This ensures that reminders are sent out in a fair, round-robin fashion. Once these specific fee records are fetched, the code prepares to iterate through them to actually send the reminders, while also being ready to handle any database-related errors that might occur. It also sets up some initial variables to keep track of the date and how many reminders are processed and sent.",
    tags: ["Python", "Flask", "MySql","ReactJS"],
    githubUrl: "https://github.com/Nithingowdabk/school_management",
    imageUrl: "src/assets/school.webp",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 text-black">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative group"
            >
              <div className="h-full overflow-hidden transition-shadow hover:shadow-lg bg-white rounded-2xl border border-gray-300">
                {/* White Blur Effect on Hover */}
                <div className="absolute inset-0 bg-white bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-2xl backdrop-blur-md">
                  <button
                    className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 flex items-center text-xs sm:text-sm md:text-base cursor-pointer"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    <span className="hidden sm:inline">View on GitHub</span>
                    <span className="sm:hidden">View</span>
                  </button>
                </div>

                <div className="group-hover:blur-sm transition-all duration-300 rounded-2xl">
                  <div className="relative h-48 w-full">
                    <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover rounded-t-2xl" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-black">{project.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="bg-gray-200 text-xs px-2 py-1 rounded-md text-black">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
