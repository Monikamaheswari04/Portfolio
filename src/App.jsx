import React, { useState, useEffect } from "react";
// eslint-disable-next-line 
import { motion } from "framer-motion";


import profilePic from "./assets/profile.jpeg";
export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // keep dark mode class as before
    document.documentElement.classList.add("dark");
  }, []);

  /* ---------------------------
     Framer Motion Variants
     --------------------------- */
  const container = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.08, ease: "easeOut", duration: 0.45 },
    },
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  const cardHover = {
    rest: { scale: 1, boxShadow: "0 6px 18px rgba(2,6,23,0.6)" },
    hover: {
      scale: 1.03,
      boxShadow: "0 18px 40px rgba(59,130,246,0.12)",
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
  };

  const floatY = {
    animate: {
      y: [0, -10, 0],
      transition: { duration: 4.2, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const menuVariants = {
    closed: { opacity: 0, y: -8, scale: 0.98, transition: { duration: 0.18 } },
    open: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.22 } },
  };

  /* ---------------------------
     Projects Data (unchanged)
     --------------------------- */
  const projects = [
    {
      title: "SMART SHOP",
      desc:
        "A responsive React e-commerce frontend with interactive UI, dark/light mode, and mock cart & wishlist functionality.",
      github: "https://github.com/Monikamaheswari04/SmartShop-Frontend",
      live: "https://smart-shop-frontend-ten.vercel.app/",
    },
    {
      title: "E-commerce Dashboard",
      desc:
        "A responsive Next.js & TypeScript dashboard showcasing product catalog, cart/checkout flows, and interactive analytics with mock data.",
      github: "https://github.com/Monikamaheswari04/E-commerce-Dashboard",
      live: "https://e-commerce-dashboard-b5gb.vercel.app/",
    },
    {
      title: "Campus Drive Management System",
      desc:
        "A Django-based Campus Drive Management System that manages company drives, student registrations, and resume uploads with full admin control.",
      github: "https://github.com/Monikamaheswari04/Campus-Drive-Management",
      live: "https://campus-management-osuz.onrender.com",
    },
    {
      title: "Scientific Calculator",
      desc:
        "A fully functional Java Swing Scientific Calculator supporting advanced arithmetic, trigonometric, and logarithmic operations with a clean, modern UI.",
      github: "https://github.com/Monikamaheswari04/java-calculator",
    },
    {
      title: "Quiz Application ",
      desc:
        "A Java Swing–based Quiz Application with timed MCQs, automatic question flow, score calculation, and performance feedback.",
      github: "https://github.com/Monikamaheswari04/JAVA-Quiz",
    },
    {
      title: "SMS Spam Detection",
      desc:
        "An end-to-end Machine Learning pipeline for SMS Spam Detection using NLP preprocessing, vectorization, and multiple classification models.",
      github: "https://github.com/Monikamaheswari04/SPAM-SMS-DETECTION",
    },
    {
      title: "Bank Customer Churn Prediction",
      desc:
        "A machine learning-based Bank Customer Churn Prediction system that analyzes customer behavior and financial features to predict the likelihood of churn.",
      github: "https://github.com/Monikamaheswari04/Bank-Customer-Churn-Prediction",
    },
    {
      title: "Credit Card Fraud Detection",
      desc:
        "A machine learning-based Credit Card Fraud Detection system designed to identify rare fraudulent transactions using advanced preprocessing, imbalance handling, and model evaluation techniques.",
      github: "https://github.com/Monikamaheswari04/Credit-Card-Fraud-Detection",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans scroll-smooth">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="w-full p-4 shadow bg-gray-800/90 backdrop-blur-lg fixed top-0 left-0 z-50 border-b border-gray-700/50"
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Monika</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-blue-400 hover:scale-105 transition-transform duration-200">
              Home
            </a>
            <a href="#about" className="hover:text-blue-400 hover:scale-105 transition-transform duration-200">
              About
            </a>
            <a href="#projects" className="hover:text-blue-400 hover:scale-105 transition-transform duration-200">
              Projects
            </a>
            <a href="#achievements" className="hover:text-blue-400 hover:scale-105 transition-transform duration-200">
              Achievements
            </a>
            <a href="#contact" className="hover:text-blue-400 hover:scale-105 transition-transform duration-200">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle menu"
            className="md:hidden text-gray-200 text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Dropdown (animated) */}
        <motion.div
          initial="closed"
          animate={menuOpen ? "open" : "closed"}
          variants={menuVariants}
          className="md:hidden mt-3"
        >
          {menuOpen && (
            <motion.div
              variants={menuVariants}
              className="flex flex-col space-y-3 bg-gray-700 p-4 rounded-lg"
            >
              <a href="#home" className="hover:text-blue-400">Home</a>
              <a href="#about" className="hover:text-blue-400">About</a>
              <a href="#projects" className="hover:text-blue-400">Projects</a>
              <a href="#achievements" className="hover:text-blue-400">Achievements</a>
              <a href="#contact" className="hover:text-blue-400">Contact</a>
            </motion.div>
          )}
        </motion.div>
      </motion.nav>

      {/* Home Section */}
      <motion.section
        id="home"
        className="min-h-screen flex flex-col-reverse md:flex-row justify-center items-center gap-10 px-6 text-center md:text-left pt-28"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={container}
      >
        {/* Text */}
        <motion.div className="max-w-xl" variants={itemFadeUp}>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Hi, I'm Monika 👋
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
            AI & Software Developer who loves building real projects with
            Java, Python, React, and Machine Learning.
          </p>

          <motion.a
            href="#projects"
            className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.99 }}
          >
            View My Projects
          </motion.a>
        </motion.div>

        {/* Image */}
        <motion.div className="flex justify-center w-full md:w-2/4" variants={itemFadeUp}>
          <motion.img
            src={profilePic}
            alt="profile"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full shadow-2xl border-4 border-white/10 object-cover"
            initial={{ scale: 0.98 }}
            whileHover={{ scale: 1.02, boxShadow: "0 20px 45px rgba(59,130,246,0.08)" }}
            animate={floatY.animate}
          />
        </motion.div>
      </motion.section>

      {/* About + Skills */}
      <motion.section
        id="about"
        className="py-20 bg-gray-800 relative overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={container}
      >
        {/* subtle background glow (keeps content unchanged) */}
        <motion.div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.06 }}
        />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.h2 className="text-3xl font-bold text-white mb-4" variants={itemFadeUp}>
            About Me
          </motion.h2>

          <motion.p className="text-gray-300 leading-7" variants={itemFadeUp}>
            I’m a passionate Software Developer specializing in building real-world applications
            using Java, Python, React, and Machine Learning. I enjoy solving
            complex problems, turning ideas into usable products, and learning
            modern technologies that help me grow as a developer.
          </motion.p>

          <motion.p className="text-gray-300 leading-7 mt-4" variants={itemFadeUp}>
            My experience includes AI projects, web development, and data-driven
            applications. I focus on writing clean, efficient code and building
            user-friendly interfaces. I’m always excited to take on new challenges,
            collaborate with teams, and continuously improve my skills in both
            software development and AI.
          </motion.p>

          <motion.h4 className="text-2xl font-semibold mb-4 mt-8" variants={itemFadeUp}>
            Skills
          </motion.h4>

          <motion.div className="flex flex-wrap gap-4 text-gray-300" variants={itemFadeUp}>
            {[
              "Python",
              "Java",
              "HTML",
              "CSS",
              "Javascript",
              "Tailwindcss",
              "React",
              "Power BI",
              "SQL",
              "Scikit-Learn",
              "Pandas",
              "NumPy",
              "Data Visualization",
            ].map((skill) => (
              <motion.span
                key={skill}
                className="bg-gray-700 px-3 py-1 rounded-full text-sm"
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section
        id="projects"
        className="py-20 bg-gray-900"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={container}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.h3 className="text-3xl font-bold mb-8" variants={itemFadeUp}>
            Projects
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div key={project.title}
              className="p-6 bg-gray-800/90 shadow-2xl rounded-xl border border-gray-700/50"
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={{ ...itemFadeUp, ...cardHover }}>

                <h4 className="text-xl font-bold">{project.title}</h4>
                <p className="mt-2 text-gray-400">{project.desc}</p>

                <div className="mt-3 flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    GitHub →
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Achievements */}
      <motion.section
        id="achievements"
        className="py-20 bg-gray-800"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={container}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.h3 className="text-3xl font-bold mb-8" variants={itemFadeUp}>
            Achievements & Competitions
          </motion.h3>
          <motion.ul className="list-disc ml-6 text-gray-300 space-y-3" variants={itemFadeUp}>
            <li>
              Presented a research paper at the International Conference on Recent Advancements in
              Computational Sciences (ICRRACS-2023) held at Loyola College, Chennai.
            </li>
            <li>Earned a Certificate of Merit at Startup Surge 2025 for outstanding contributions in innovation and startup ideation.</li>
            <li>NCC Volunteer: Participated in drills, social awareness programs, and leadership activities, developing strong discipline, teamwork, and organizational skills.</li>
          </motion.ul>
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        className="py-24 bg-gray-900 text-center relative overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={container}
      >
        {/* Background Glow */}
        <motion.div
          className="absolute inset-0 bg-linear-to-b from-blue-900/20 to-transparent blur-3xl"
          aria-hidden
          variants={itemFadeUp}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />

        <motion.h3 className="text-4xl font-bold mb-10 text-white relative z-10" variants={itemFadeUp}>
          Contact Me
        </motion.h3>

        <motion.p className="text-lg text-gray-300 max-w-xl mx-auto relative z-10" variants={itemFadeUp}>
          Feel free to reach out for collaborations, project discussions, or any opportunities!
        </motion.p>

        {/* Contact Card */}
        <motion.div
          className="mt-12 max-w-xl mx-auto bg-gray-800/60 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-gray-700 relative z-10"
          variants={itemFadeUp}
          whileHover={{ scale: 1.01 }}
        >
          <div className="space-y-6 text-left">
            {/* Email */}
            <div className="flex items-center gap-4">
              <span className="text-blue-400 text-2xl">📩</span>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <a
                  href="mailto:admonikamaheswari@gmail.com"
                  className="text-lg text-gray-200 hover:text-blue-400 transition"
                >
                  admonikamaheswari@gmail.com
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-4">
              <span className="text-blue-400 text-2xl">🔗</span>
              <div>
                <p className="text-gray-400 text-sm">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/monikamaheswari04?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-gray-200 hover:text-blue-400 transition"
                >
                  linkedin.com/in/monikamaheswari
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="flex items-center gap-4">
              <span className="text-blue-400 text-2xl">💻</span>
              <div>
                <p className="text-gray-400 text-sm">GitHub</p>
                <a
                  href="https://github.com/Monikamaheswari04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-gray-200 hover:text-blue-400 transition"
                >
                  github.com/Monikamaheswari04
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Shapes */}
        <motion.div
          className="absolute left-10 bottom-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"
          aria-hidden
          variants={floatY}
          animate="animate"
        />
        <motion.div
          className="absolute right-10 top-10 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"
          aria-hidden
          variants={{
            animate: { y: [0, -8, 0], transition: { duration: 4.6, repeat: Infinity, ease: "easeInOut" } },
          }}
          animate="animate"
        />
      </motion.section>

      {/* Footer */}
      <motion.footer className="text-center py-6 bg-gray-800" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <p>© {new Date().getFullYear()} Monika — All Rights Reserved</p>
      </motion.footer>
    </div>
  );
}
