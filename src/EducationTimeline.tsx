import { motion } from "framer-motion";

export default function EducationTimeline() {
  const education = [
    {
      degree: "Master of Science in Software Engineering",
      school: "Arizona State University, Tempe, AZ",
      duration: "Aug 2016 – May 2018",
    },
    {
      degree: "Bachelor of Technology in Information Technology",
      school: "Dharmsinh Desai University, India",
      duration: "Aug 2012 – May 2016",
    },
  ];

  return (
    <section
      id="education"
      className="px-10 py-6 my-6 rounded-lg bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto px-2">
        <div className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Education
        </div>
        <div className="relative border-l-2 border-accent dark:border-accent">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              //   viewport={{ once: true }}
              className="mb-10 ml-6"
            >
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-accent dark:bg-accent ring-8 ring-white dark:ring-gray-900"></span>
              <div className="bg-white dark:bg-gray-800 shadow-md p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="text-xl font-semibold text-gray-800 dark:text-white">
                  {item.degree}
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.school}
                </p>
                <span className="text-sm text-accent dark:text-accent font-medium">
                  {item.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
