import ReactIcon from "../assets/react.svg";
import CSSIcon from "../assets/css3.svg";
import HTMLIcon from "../assets/html5.svg";
import MaterialIcon from "../assets/material-ui.svg";
import TypescriptIcon from "../assets/typescript.svg";
import MongoDBIcon from "../assets/mongo.svg";
import NodeJSIcon from "../assets/node-js.svg";
import GitIcon from "../assets/git.svg";
import SqlDbIcon from "../assets/sql-database.svg";
import DockerIcon from "../assets/docker.svg";
import GraphQLIcon from "../assets/apollographql.svg";
import TailwindCssIcon from "../assets/tailwind-css.svg";
import ExpressIcon from "../assets/express-js.svg";
import PythonIcon from "../assets/python.svg";
import FigmaIcon from "../assets/figma.svg";
import CPlusPlus from "../assets/c++.svg";

type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
};

type Skill = {
  name: String;
  icon: any;
};

const siteConfig = {
    name: "Rutuja Patel",
    title: "Full‑Stack Software Engineer",
    location: "Atlanta, GA, United States",
    email: "faldurutuja@gmail.com",
    resume: "/resume.pdf", // put your resume file in public/
    bio: `Full-stack engineer with experience building production-grade React apps, microfrontend architectures, and backend services. Passionate about clean code, performance, and mentoring teammates.`,
    //about:`I’m a passionate full-stack developer who loves crafting seamless user experiences and bringing ideas to life through code. With a strong foundation in both frontend and backend development, I enjoy transforming complex challenges into clean, elegant solutions. I’m driven by curiosity, always eager to learn new technologies, and committed to mentoring others to help them grow and excel as engineers.`,
    about: `Hi, I’m Rutuja — a curious and creative full-stack developer who loves turning ideas into interactive, meaningful digital experiences. I’m passionate about building intuitive UIs, writing clean and efficient code, and bringing designs to life with a touch of creativity. I enjoy tackling complex problems, simplifying them into elegant solutions, and sharing what I learn by mentoring others. When I’m not coding, you’ll probably find me exploring new tech tools or brainstorming ways to make products more user-friendly.`,
    skills: {
      frontend: [
        { name: "React", icon: ReactIcon },
        { name: "TypeScript", icon: TypescriptIcon },
        { name: "HTML5", icon: HTMLIcon },
        { name: "CSS3", icon: CSSIcon },
        { name: "TailwindCSS", icon: TailwindCssIcon },
        { name: "Material UI", icon: MaterialIcon },
      ],
      backend: [
        { name: "Node.js", icon: NodeJSIcon },
        { name: "Express", icon: ExpressIcon },
        { name: "Apollo GraphQL", icon: GraphQLIcon },
        { name: "C++", icon: CPlusPlus },
        { name: "Python", icon: PythonIcon },
      ],
      database: [
        { name: "MSSQL", icon: SqlDbIcon },
        { name: "MongoDB", icon: MongoDBIcon },
      ],
      tools: [
        { name: "Git", icon: GitIcon },
        { name: "Docker", icon: DockerIcon },
        { name: "Figma", icon: FigmaIcon },
      ],
    } as Record<string, Skill[]>,
    projects: [
      {
        id: "p1",
        title: "Portfolio Website",
        description:
          "Built a portfolio website using React and Tailwind CSS to showcase my work and deployed it on Azure.",
        tech: ["React", "TypeScript", "Tailwind CSS", "Azure"],
        github: "https://github.com/rutujafaldu",
      },
      {
        id: "p2",
        title: "Rider Tracking Application",
        description:
          "Developed a real-time rider tracking system to monitor participants’ locations during events by retrieving data from GPS trackers and mobile apps. Built RESTful web services using Node.js and MongoDB, and designed an Angular 4 front end with Bootstrap, HTML5, CSS, and the Leaflet API to visualize rider positions and information on an interactive map for spectators.",
        tech: [
          "Node JS",
          "Angular",
          "Bootstrap",
          "HTML",
          "CSS",
          "Mongo DB",
          "Leaflet API",
        ],
        github: "https://github.com/rutujafaldu94",
      },
      {
        id: "p3",
        title: "Mining Associations in Large Graphs",
        description:
          "Implemented graph partitioning algorithms on the DBLP database to enhance the Sense Making process by grouping similar nodes. Developed an optimized dynamic partitioning approach and integrated Neo4j as the graph database, implementing Min-Arborescence and Steiner Tree algorithms to improve efficiency and generate the core functionality.",
        tech: ["Python", "Machine Learning"],

      },
    ] as Project[],
    experiences: [
      {
        company: "T-Mobile",
        role: "Software Engineer",
        place: "Atlanta, GA",
        period: "May 2020 — April 2025",
        bullets: [
          "Designed and developed scalable web applications using React, TypeScript, HTML5, CSS, Material UI, and Recharts.",
          "Implemented microfrontend architecture with Module Federation using Webpack for modular and independent deployments.",
          "Built backend services with Node.js, TypeScript, and Apollo GraphQL, integrating optimized MSSQL databases and ETL pipelines.",
          "Collaborated with teams to gather requirements and create user-centric UI/UX designs in Figma.",
          "Led core microapp development, mentored interns, and enforced coding best practices.",
          "Automated CI/CD pipelines using Git and Docker for efficient testing and deployment.",
        ],
        tech: [
          "React",
          "TypeScript",
          "HTML5",
          "CSS",
          "Material UI",
          "Webpack",
          "GraphQL",
          "Node JS",
          "MS SQL",
          "Figma",
          "Gitlab",
          "CI/CD",
        ],
      },
      {
        company: "Environmental Systems Research Institute (ESRI)",
        role: "Software Development Engineer",
        place: "Redlands, CA",
        period: "June 2018 - September 2019",
        bullets: [
          "Developed and integrated modern C++ and Python components to expose APIs for network analysis in both Client and Server.",
          "Designed and implemented new backend features using REST, SOAP, and JSON frameworks in C++14.",
          "Enhanced performance and scalability by debugging and optimizing the C++ codebase.",
          "Delivered high-priority tasks within Agile/Scrum workflows and contributed to software architecture design.",
        ],
        tech: ["C++14", "Python"],
      },
      {
        company: "Environmental Systems Research Institute (ESRI)",
        role: "Software Engineering Intern",
        place: "Redlands, CA",
        period: "May 2017 - August 2017",
        bullets: [
          "Developed Geoprocessing Tool using C++11 and Python for the ESRI’s ArcGIS Pro software.",
          "Fixed bugs, optimized the code and documented the software for ESRI’s latest ArcGIS Pro Release.",
          "Participated in Scrum development process as an active, cross-trained team member.",
        ],
        tech: ["C++11", "Python"],
      },
      {
        company: "Physical Research Laboratory (PRL)",
        role: "Software Engineering Intern",
        place: "India",
        period: "January 2016 - April 2016",
        bullets: [
          "Developed an Instrument Control System enabling efficient user interaction with telescope hardware.",
          "Configured microcontrollers for telescope operation and synchronized hardware–software communication.",
          "Built console and GUI interfaces using C/C++, Visual Basic, and Arduino C within Visual Studio.",
        ],
        tech: ["C/C++", "Visual Basic", "Arduino C"],
      },
    ],
  };
  
  export default siteConfig;