
import { Project, Experience } from '../types';

export const PORTFOLIO_DATA = {
  name: "Nikhilesh Pal",
  title: "AI & ML Engineer | Computer Science Student",
  avatarUrl: "https://github.com/Nikhileshpal145.png",
  bio: "I’m Nikhilesh Pal, a Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning. I have a strong foundation in Python, SQL, and C++, along with experience using data tools for analysis and automation. I am passionate about building intelligent systems, exploring machine learning models, and applying technology to solve real-world problems. I’m eager to grow through internships, collaborative projects, and continuous learning.",
  social: {
    github: "https://github.com/Nikhileshpal145",
    linkedin: "https://www.linkedin.com/in/nikhilesh-pal-037604319/",
    email: "mailto:nikhileshpal5@gmail.com"
  },
  skills: [
    "Python", "C++", "SQL", "Machine Learning", "Data Analytics", "Tableau", "Data Structures", "Communication", "Public Speaking", "Leadership"
  ],
  projects: [
    {
      id: "new-1",
      title: "LTCE Attendance Tracker",
      description: "An automated attendance tracking system built for Lokmanya Tilak College of Engineering to streamline student record management and reporting.",
      techStack: ["Python", "Automation", "Database"],
      imageUrl: "https://opengraph.githubassets.com/1/Nikhileshpal145/ltce-attendance-tracker",
      repoUrl: "https://github.com/Nikhileshpal145/ltce-attendance-tracker"
    },
    {
      id: "new-2",
      title: "MediMate",
      description: "A healthcare companion application designed to assist users with medical resources, symptom tracking, or appointment management.",
      techStack: ["Python", "HealthTech", "AI/ML"],
      imageUrl: "https://opengraph.githubassets.com/1/Nikhileshpal145/medimate-1",
      repoUrl: "https://github.com/Nikhileshpal145/medimate-1"
    },
    {
      id: "2",
      title: "Metro Ticket & Pass System",
      description: "A system designed to streamline metro ticketing operations, managing user passes and ticket generation logic efficiently.",
      techStack: ["C++", "System Design"],
      imageUrl: "https://opengraph.githubassets.com/1/Nikhileshpal145/Metro-Ticket-System",
      repoUrl: "https://github.com/Nikhileshpal145/Metro-Ticket-System"
    },
    {
      id: "3",
      title: "Web Scraper",
      description: "A specialized tool developed to extract data from the web for analysis, demonstrating automation and data collection capabilities.",
      techStack: ["Python", "Automation", "Data Extraction"],
      imageUrl: "https://opengraph.githubassets.com/1/Nikhileshpal145/Web-Scraper",
      repoUrl: "https://github.com/Nikhileshpal145/Web-Scraper"
    },
    {
      id: "4",
      title: "Hangman GUI Game",
      description: "An interactive graphical version of the classic Hangman game, showcasing expertise in GUI development and logic implementation.",
      techStack: ["Python", "GUI", "Game Logic"],
      imageUrl: "https://opengraph.githubassets.com/1/Nikhileshpal145/Hangman-GUI",
      repoUrl: "https://github.com/Nikhileshpal145/Hangman-GUI"
    },
    {
      id: "5",
      title: "E-Store Database System",
      description: "A robust database management system for an e-commerce platform, handling inventory, sales, and customer data.",
      techStack: ["SQL", "Database Mgmt"],
      imageUrl: "https://opengraph.githubassets.com/1/Nikhileshpal145/E-Store-Database",
      repoUrl: "https://github.com/Nikhileshpal145/E-Store-Database"
    },
    {
      id: "6",
      title: "Banking Program",
      description: "A core banking simulation software capable of handling transactions, account management, and financial records.",
      techStack: ["C++", "Algorithms"],
      imageUrl: "https://opengraph.githubassets.com/1/Nikhileshpal145/Banking-System",
      repoUrl: "https://github.com/Nikhileshpal145/Banking-System"
    }
  ] as Project[],
  experience: [
    {
      id: "2",
      role: "Intern",
      company: "Deloitte Australia (Virtual)",
      period: "2024",
      description: [
        "Completed a virtual internship focused on data visualization and analytical storytelling using industry tools.",
        "Gained hands-on experience with dashboards, charts, and visual reports to interpret and present data insights.",
        "Learned key concepts in business intelligence, data communication, and visualization best practices."
      ]
    }
  ] as Experience[]
};
