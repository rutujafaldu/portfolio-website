import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import DarkModeIcon from "./assets/dark-mode.svg";
import LightModeIcon from "./assets/light-mode.svg";
import MyImage from "./assets/my-picture.jpg";
import LocationPin from "./assets/location-pin.svg";
import GmailIcon from "./assets/gmail.svg";
import DownloadIcon from "./assets/download.svg";
import UpArrowDark from "./assets/up-arrow-dark.svg";
import UpArrowLight from "./assets/up-arrow-light.svg";
import pdf from "./assets/resume.pdf";

import EducationTimeline from "./EducationTimeline";
import SidebarMenu from "./SideBarMenu";
import siteConfig from "./utils/config";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

function Hero() {
  return (
    <motion.section
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      //viewport={{ amount: 0.3 }}
      id="home"
      className="min-h-screen flex"
      aria-label="Hero"
    >
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="flex flex-col-reverse md:flex-row md:items-center gap-8">
          <div className="flex-1">
            <p className="text-xl uppercase text-accent tracking-widest mb-2">
              Hi, I’m {siteConfig.name}
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              {siteConfig.title}
            </h1>
            <p className="mt-6 text-lg dark:text-muted text-gray-800 max-w-xl">
              {siteConfig.bio}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={pdf}
                download="Rutuja_Patel_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-accent/10 border border-accent text-accent hover:scale-[1.02] transition"
              >
                <img src={DownloadIcon} alt="Download" className="h-6 w-6" />
                Resume
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm dark:text-muted text-gray-800">
              <div className="flex items-center gap-2">
                <img src={LocationPin} className="w-6 h-6" />
                <span>{siteConfig.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={GmailIcon} className="w-6 h-6" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:underline"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>

          {/* <div className="w-56 md:w-72 lg:w-80"> */}
          <div className="w-72 lg:w-80">
            <div className="rounded-2xl bg-gradient-to-tr from-accent to-accent/60 p-1 shadow-xl hover:scale-105 transform transition">
              <div className="dark:bg-dark-700 bg-white rounded-xl p-6">
                <div className="h-48 w-full  rounded-md flex items-center justify-center">
                  <img src={MyImage} alt="My Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold mb-4 border-l-4 pl-4 border-accent">
      {children}
    </h2>
  );
}

function About() {
  return (
    <motion.section
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      // viewport={{ once: true }}
      id="about"
      className="py-20 bg-gray-100 dark:bg-dark-900"
    >
      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle>About Me</SectionTitle>
        <p className="text-lg dark:text-muted text-gray-800">
          {siteConfig.about}
        </p>
        <EducationTimeline />
      </div>
    </motion.section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-dark-900">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle>Skills</SectionTitle>
        <div className="grid grid-rows-4 gap-6 mt-6">
          {Object.entries(siteConfig.skills).map(([category, list]) => (
            <motion.div
              key={category}
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              // className="flex flex-col p-4 rounded-lg bg-dark-700 border border-dark-500"
              className="flex flex-col p-4 rounded-lg bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="font-semibold mb-3 capitalize">{category}</h3>
              <div className="flex flex-wrap space-x-8 text-md dark:text-muted text-gray-800">
                {list.map((s) => (
                  <div key={s.icon} className="flex items-center gap-2">
                    <img src={s.icon} alt="React Icon" className="w-6 h-6" />
                    <span>{s.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-dark-900">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle>Projects</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {siteConfig.projects.map((p) => (
            <motion.article
              key={p.id}
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              //className="p-6 rounded-2xl bg-dark-700 border border-dark-500"
              className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 dark:text-muted text-gray-800">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    //className="px-3 py-1 rounded-lg bg-accent/20 text-white text-sm"
                    className="px-3 py-1 rounded-lg bg-gray-200 dark:bg-gray-800 dark:text-white text-gray-800 text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                {p.github && (
                  <a
                    href={p.github}
                    className="text-sm border border-accent text-accent px-3 py-2 rounded-lg"
                  >
                    GitHub
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    className="text-sm border border-accent text-accent px-3 py-2 rounded-lg"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-20  bg-gray-100 dark:bg-dark-900">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle>Experience</SectionTitle>
        <div className="mt-6 space-y-6">
          {siteConfig.experiences.map((e: any, i: number) => (
            <motion.div
              key={i}
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              //className="p-4 rounded-lg bg-dark-700 border border-dark-500"
              className="p-4 rounded-lg bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">
                    {e.role} — <span className="text-accent">{e.company}</span>
                  </div>
                  <div className="text-sm dark:text-muted text-gray-800 italic">
                    {e.place}
                  </div>
                  <div className="text-sm dark:text-white">{e.period}</div>
                </div>
              </div>
              <ul className="mt-3 list-disc list-inside dark:text-muted text-gray-800">
                {e.bullets.map((b: string, idx: number) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {e.tech.map((t: string) => (
                  <span
                    key={t}
                    //className="px-3 py-1 rounded-lg bg-accent/20 text-white text-sm"
                    className="px-3 py-1 rounded-lg bg-gray-200 dark:bg-gray-800 dark:text-white text-gray-800 text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <motion.section
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      id="contact"
      className="py-20 bg-gray-100 dark:bg-dark-900"
    >
      <div className="max-w-3xl mx-auto px-6">
        <SectionTitle>Contact</SectionTitle>
        <p className="dark:text-muted text-gray-800">
          I'm open to job opportunities. Send me a message or email me directly.
        </p>

        <form className="mt-6 grid grid-cols-1 gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              className="p-3 rounded-lg dark:bg-gray-900 bg-white shadow-md placeholder:text-gray-500 focus:outline-accent"
              placeholder="Your name"
            />
            <input
              className="p-3 rounded-lg dark:bg-gray-900 bg-white shadow-md placeholder:text-gray-500 focus:outline-accent"
              placeholder="Your email"
            />
          </div>
          <textarea
            className="p-3 rounded-lg dark:bg-gray-900 bg-white shadow-md placeholder:text-gray-500 focus:outline-accent"
            rows={6}
            placeholder="Message"
          />
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="px-5 py-3 rounded-lg bg-accent text-white font-semibold"
            >
              Send Message
            </button>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm dark:text-muted text-gray-800"
            >
              Or email: {siteConfig.email}
            </a>
          </div>
        </form>

        <div className="mt-8 flex gap-4">
          <a href="#" className="px-4 py-2 rounded-lg border">
            GitHub
          </a>
          <a href="#" className="px-4 py-2 rounded-lg border">
            LinkedIn
          </a>
        </div>
      </div>
    </motion.section>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const darkModeHandler = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  // Show button after scrolling down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="dark:bg-gray-950 dark:text-white bg-gray-50 text-gray-900 transition-colors duration-500">
      <header className="sticky top-0 z-40 backdrop-blur dark:bg-gray-800 bg-accent text-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="hidden md:flex w-10 h-10 rounded-lg bg-gradient-to-br from-black to-black/60 dark:from-accent dark:to-accent/60 flex items-center justify-center font-bold dark:text-black text-gray-50">
              RP
            </div>
            <div className="hidden md:block">
              <div className="font-semibold">{siteConfig.name}</div>
              <div className="text-xs dark:text-muted">{siteConfig.title}</div>
            </div>
            <SidebarMenu darkMode={darkMode} />
            <div className="md:hidden font-semibold ">{siteConfig.name}</div>
          </div>
          <nav className="hidden md:flex items-center gap-4 text-md dark:text-muted">
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#skills" className="hover:text-white">
              Skills
            </a>
            <a href="#experience" className="hover:text-white">
              Experience
            </a>
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </nav>
          <button onClick={() => darkModeHandler()} className="cursor-pointer">
            <img
              src={darkMode ? LightModeIcon : DarkModeIcon}
              className="h-6 w-6"
            />
          </button>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer className="py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm dark:text-muted text-gray-800">
          © {new Date().getFullYear()} {siteConfig.name} — Built with React +
          Tailwind
        </div>
      </footer>

      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gray-600 text-white shadow-lg hover:bg-gray-800 dark:bg-gray-300 dark:hover:bg-white transition-all duration-300 cursor-pointer"
          aria-label="Scroll to top"
        >
          <img
            src={darkMode ? UpArrowDark : UpArrowLight}
            alt="Top"
            className="w-4 h-4"
          />
        </button>
      )}
    </div>
  );
}

export default App;
