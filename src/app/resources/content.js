import { Logo } from "@/once-ui/components";

const person = {
  firstName: "fairul", // Ganti dengan nama depan Anda
  lastName: "muhammad", // Ganti dengan nama belakang Anda
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Computer Science Student", 
  avatar: "/images/avatar.jpg",
  email: "muhammadfairul13@gmail.com", // Ganti dengan email Anda
  location: "Asia/Jakarta", // Jakarta timezone (same as Yogyakarta)
  languages: ["Indonesian", "English"], 
};

const newsletter = {
  display: false, // Set to true if you want to start a newsletter later
  title: <>Subscribe to {person.firstName}'s Learning Updates</>,
  description: (
    <>
      Follow my journey as I learn new technologies, work on projects, and share insights 
      about programming and software development.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/fairulmuhammad", // Replace with your GitHub
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/muhammad-fairul-b5aa37312/", // Replace with your LinkedIn
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/yourusername", // Replace with your X/Twitter
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my learning journey as a ${person.role}`,
  headline: <>Building digital solutions through code and curiosity</>,
  featured: {
    display: true,
    title: <>Latest: <strong className="ml-4">DevOps & Microservices Projects</strong></>,
    href: "/work/my-learning-journey",
  },
  subline: (
    <>
      I'm {person.firstName}, a Computer Science student at Universitas Amikom Yogyakarta with hands-on experience in 
      <br /> web development, Python programming, and modern DevOps practices.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false, // Set to true if you want to enable appointment scheduling
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a Computer Science student at Universitas Amikom Yogyakarta with a deep passion for 
        programming and technology. I enjoy exploring various aspects of software development 
        including front-end, back-end, and DevOps. My curiosity drives me to continuously learn 
        new technologies and apply them to solve real-world problems through academic projects 
        and personal experiments.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Learning & Projects",
    experiences: [
      {
        company: "Front-End Development",
        timeframe: "2023 - Present",
        role: "Web Development Learning",
        achievements: [
          <>
            Mastered core web technologies including HTML5, CSS3, and modern JavaScript 
            for building responsive and interactive user interfaces.
          </>,
          <>
            Gained experience with PHP web development using CodeIgniter 3 framework 
            for server-side programming and MVC architecture implementation.
          </>,
          <>
            Built various web projects combining front-end and back-end technologies 
            to create full-featured web applications.
          </>,
        ],
        images: [],
      },
      {
        company: "DevOps & Infrastructure",
        timeframe: "2024 - Present", 
        role: "DevOps Learning Journey",
        achievements: [
          <>
            Developed hands-on experience with microservices architecture, designing and 
            implementing distributed systems using containerization technologies.
          </>,
          <>
            Built CI/CD pipelines for automated testing and deployment, learning modern 
            software delivery practices and workflow automation.
          </>,
          <>
            Implemented monitoring and observability solutions using Grafana, Prometheus, 
            and Loki for system performance tracking and log management.
          </>,
          <>
            Containerized applications using Docker, gaining experience with container 
            orchestration and deployment strategies.
          </>,
        ],
        images: [],
      },
      {
        company: "Python & Database Development",
        timeframe: "2023 - Present",
        role: "Programming & Data Management",
        achievements: [
          <>
            Created Python applications including a simple calculator system, demonstrating 
            proficiency in Python programming fundamentals and problem-solving.
          </>,
          <>
            Learned database management with MySQL, understanding relational database design, 
            queries, and data manipulation for web applications.
          </>,
          <>
            Integrated Python scripts with database systems for data processing and 
            automation tasks in various academic projects.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Universitas Amikom Yogyakarta",
        description: <>Currently pursuing Bachelor's degree in Computer Science (Teknik Informatika), focusing on software engineering and modern web technologies.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills & Experience",
    skills: [
      {
        title: "Front-End Development",
        description: <>Proficient in HTML5, CSS3, JavaScript, and PHP. Experience with CodeIgniter 3 framework for MVC-based web development and creating dynamic user interfaces.</>,
        images: [],
      },
      {
        title: "Database & Back-End",
        description: <>Working knowledge of MySQL database management, including design, queries, and integration with web applications. Learning server-side development concepts.</>,
        images: [],
      },
      {
        title: "Python Programming",
        description: <>Developed Python applications including calculator systems and automation scripts. Comfortable with Python fundamentals and problem-solving approaches.</>,
        images: [],
      },
      {
        title: "DevOps & Infrastructure",
        description: <>Hands-on experience with Docker containerization, microservices architecture, CI/CD pipelines, and monitoring tools like Grafana, Prometheus, and Loki.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
