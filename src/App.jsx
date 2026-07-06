import { useState } from 'react'
import { motion } from 'framer-motion'

const profileImage = '/MYLINKEDIMG.jpg'
import {
  FiArrowUpRight,
  FiBriefcase,
  FiCode,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMenu,
  FiPhone,
  FiX,
} from 'react-icons/fi'

const navItems = [
  'Home',
  'About',
  'Skills',
  'Experience',
  'Projects',
  'Education',
  'Contact',
]

const skillGroups = [
  {
    title: 'Programming Languages',
    skills: ['Java', 'SQL', 'JavaScript'],
  },
  {
    title: 'Backend',
    skills: ['Spring Boot', 'Spring Security', 'JDBC', 'REST APIs', 'JWT Authentication'],
  },
  {
    title: 'Database',
    skills: ['MySQL'],
  },
  {
    title: 'Frontend',
    skills: ['HTML5', 'CSS3', 'React.js'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Maven', 'Postman', 'VS Code', 'Eclipse'],
  },
  {
    title: 'Core Concepts',
    skills: [
      'Object-Oriented Programming',
      'Collections Framework',
      'DBMS',
      'MVC Architecture',
      'Basic System Design',
    ],
  },
]

const experiences = [
  {
    role: 'Java Intern',
    company: 'IMAGECON INDIA PVT LTD',
    date: 'July 2025',
    points: [
      'Learned and applied Core Java concepts.',
      'Worked with JDBC and MySQL.',
      'Strengthened OOP, Collections Framework, and Exception Handling concepts.',
      'Gained practical software development experience.',
    ],
  },
  {
    role: 'MERN Stack Intern',
    company: 'Aalan Infotech',
    date: 'December 2025 - January 2026',
    points: [
      'Built REST APIs using Node.js and Express.js.',
      'Developed React components.',
      'Performed CRUD operations using MongoDB.',
      'Integrated frontend with backend APIs.',
    ],
  },
]

const projects = [
  {
    name: 'AttendEase',
    label: 'Featured Project',
    subtitle: 'Role-Based Attendance Management System',
    description:
      'Developed a secure role-based attendance management system for educational institutions using Java and Spring Boot.',
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'REST APIs',
      'JDBC',
      'MySQL',
      'HTML5',
      'CSS3',
      'JavaScript',
    ],
    features: [
      'Role-Based Access Control',
      'JWT Authentication',
      'Student Management',
      'Teacher Management',
      'Attendance Management',
      'RESTful APIs',
      'Secure Login System',
    ],
    github: 'https://github.com/KARPAGARAMAN-M',
    demo: '#contact',
  },
  {
    name: 'Life Link',
    label: 'Project Two',
    subtitle: 'Blood Donor Web Application',
    description:
      'Developed a web application that connects blood donors with people in need through a simple and user-friendly platform.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    features: [
      'Donor Registration',
      'Blood Group Search',
      'User Authentication',
      'Donor Management',
      'Responsive Design',
    ],
    github: 'https://github.com/KARPAGARAMAN-M',
    demo: '#contact',
  },
]

const contactItems = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'karpagaraman1605@gmail.com',
    href: 'mailto:karpagaraman1605@gmail.com',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+91 8072871661',
    href: 'tel:+918072871661',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Salem, Tamil Nadu, India',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/karpagaraman-m',
    href: 'https://linkedin.com/in/karpagaraman-m',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/KARPAGARAMAN-M',
    href: 'https://github.com/KARPAGARAMAN-M',
  },
]

const fadeIn = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45, ease: 'easeOut' },
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const subject = encodeURIComponent(`Portfolio contact from ${data.get('name')}`)
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`,
    )
    window.location.href = `mailto:karpagaraman1605@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-teal-400/30 bg-slate-950/90 text-slate-100 shadow-lg shadow-slate-950/50 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <a
            href="#home"
            className="text-lg font-bold tracking-wide text-slate-100 sm:text-xl"
            aria-label="Go to home"
          >
            KARPAGARAMAN M
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-slate-300 transition hover:text-teal-300"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <ResumeButton compact />
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-teal-400/30 text-slate-200 lg:hidden"
            onClick={() => setIsMenuOpen((value) => !value)}
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="border-t border-teal-400/30 bg-slate-950/95 px-5 py-4 lg:hidden">
            <div className="mx-auto grid max-w-6xl gap-3">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="py-1 text-sm font-medium text-slate-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <ResumeButton />
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="scroll-mt-20 border-b border-teal-400/30 bg-slate-950 pt-28">
          <div className="mx-auto grid min-h-[calc(100svh-7rem)] max-w-6xl items-center gap-12 rounded-[2rem] border border-teal-400/30 bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950 px-5 py-10 shadow-2xl shadow-slate-950/50 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
            <motion.div {...fadeIn}>
              <p className="mb-4 text-sm font-semibold uppercase text-teal-300">
                Java Backend Developer
              </p>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight text-slate-100 sm:text-5xl lg:text-6xl">
                KARPAGARAMAN M
              </h1>
              <div className="mt-5 space-y-2">
                <p className="text-xl font-semibold uppercase text-slate-200">
                  Java Backend Developer
                </p>
                <p className="text-base font-medium uppercase text-teal-200/90">
                  Computer Science Student
                </p>
              </div>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Building secure and scalable backend applications using Java, Spring Boot, REST
                APIs, and MySQL.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ResumeButton />
                <ButtonLink href="#projects" variant="secondary">
                  View Projects
                </ButtonLink>
                <ButtonLink href="#contact" variant="ghost">
                  Contact
                </ButtonLink>
              </div>
            </motion.div>

            <motion.div
              {...fadeIn}
              className="flex items-center justify-center"
            >
              <div className="profile-container" aria-label="Profile photo">
                <div className="profile-gradient-border"></div>
                <div className="profile-image-wrapper">
                  <img
                    src={profileImage}
                    alt="Karpagaraman M"
                    className="profile-img"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Section id="about" eyebrow="About Me" title="Focused on practical backend engineering">
          <div className="max-w-3xl space-y-5 rounded-2xl border border-teal-400/20 bg-slate-900/70 p-6 text-base leading-8 text-slate-300 shadow-lg shadow-slate-950/30">
            <p>
              I am a Computer Science and Engineering student passionate about Java backend
              development. I enjoy building secure, scalable, and maintainable applications using
              Java, Spring Boot, REST APIs, JDBC, and MySQL.
            </p>
            <p>
              I have hands-on experience through internships and academic projects, where I
              developed backend applications, worked with databases, and implemented authentication
              and role-based access control.
            </p>
            <p>
              Currently, I am seeking Java Backend Developer internship and full-time opportunities
              where I can contribute, continue learning, and grow as a software engineer.
            </p>
          </div>
        </Section>

        <Section id="skills" eyebrow="Skills" title="Technical toolkit">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <motion.article
                key={group.title}
                {...fadeIn}
                className="rounded-lg border border-violet-400/20 bg-slate-900/80 p-6 shadow-md shadow-slate-950/30 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-base font-semibold text-slate-100">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-teal-400/20 bg-slate-800/80 px-3 py-1.5 text-sm font-medium text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="experience" eyebrow="Experience" title="Internship experience">
          <div className="grid gap-5 lg:grid-cols-2">
            {experiences.map((item) => (
              <motion.article
                key={`${item.role}-${item.company}`}
                {...fadeIn}
                className="rounded-lg border border-violet-400/20 bg-slate-900/80 p-6 shadow-md shadow-slate-950/30 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-teal-400/30 bg-slate-800/80 text-teal-300">
                    <FiBriefcase aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-100">{item.role}</h3>
                    <p className="mt-1 text-sm font-medium text-slate-300">{item.company}</p>
                    <p className="mt-1 text-sm text-teal-200/80">{item.date}</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-300">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="projects" eyebrow="Projects" title="Selected backend projects">
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </Section>

        <Section id="education" eyebrow="Education" title="Academic background">
          <motion.article
            {...fadeIn}
            className="max-w-3xl rounded-lg border border-violet-400/20 bg-slate-900/80 p-6 shadow-md shadow-slate-950/30"
          >
            <p className="text-sm font-semibold uppercase text-teal-300">Bachelor of Engineering</p>
            <h3 className="mt-3 text-2xl font-bold text-slate-100">
              Computer Science and Engineering
            </h3>
            <p className="mt-3 text-base font-medium text-slate-300">
              The Kavery Engineering College
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-300">
              <span className="rounded-md border border-teal-400/20 bg-slate-800/80 px-3 py-1.5 text-slate-200">
                2023 - 2027
              </span>
              <span className="rounded-md border border-violet-400/20 bg-slate-800/80 px-3 py-1.5 text-slate-200">
                CGPA: 7.50
              </span>
            </div>
          </motion.article>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Let us connect">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.div {...fadeIn} className="space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon
                const content = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-teal-400/30 bg-slate-800/80 text-teal-300">
                      <Icon aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-slate-100">
                        {item.label}
                      </span>
                      <span className="mt-1 block break-words text-sm text-slate-300">
                        {item.value}
                      </span>
                    </span>
                  </>
                )

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="flex items-center gap-4 rounded-lg border border-violet-400/20 bg-slate-900/80 p-4 shadow-md shadow-slate-950/30 transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 rounded-lg border border-violet-400/20 bg-slate-900/80 p-4 shadow-md shadow-slate-950/30"
                  >
                    {content}
                  </div>
                )
              })}
            </motion.div>

            <motion.form
              {...fadeIn}
              onSubmit={handleSubmit}
              className="rounded-lg border border-teal-400/20 bg-slate-900/80 p-6 shadow-lg shadow-slate-950/40"
            >
              <div className="grid gap-5">
                <label className="grid gap-2 text-sm font-medium text-slate-300">
                  Name
                  <input
                    name="name"
                    type="text"
                    required
                    className="h-11 rounded-md border border-teal-400/30 bg-slate-800/80 px-3 text-slate-100 outline-none transition focus:border-teal-300 focus:ring-4 focus:ring-teal-400/20"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-slate-300">
                  Email
                  <input
                    name="email"
                    type="email"
                    required
                    className="h-11 rounded-md border border-teal-400/30 bg-slate-800/80 px-3 text-slate-100 outline-none transition focus:border-teal-300 focus:ring-4 focus:ring-teal-400/20"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-slate-300">
                  Message
                  <textarea
                    name="message"
                    required
                    rows="6"
                    className="resize-none rounded-md border border-teal-400/30 bg-slate-800/80 px-3 py-3 text-slate-100 outline-none transition focus:border-teal-300 focus:ring-4 focus:ring-teal-400/20"
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-teal-500 px-5 text-sm font-semibold text-white transition hover:bg-teal-400 focus:outline-none focus:ring-4 focus:ring-teal-400/30"
                >
                  Send Message
                </button>
              </div>
            </motion.form>
          </div>
        </Section>
      </main>

      <footer className="border-t border-teal-400/30 bg-slate-950/90 px-5 py-8 text-center">
        <p className="text-sm font-bold text-slate-100">KARPAGARAMAN M</p>
        <p className="mt-1 text-sm text-slate-300">Java Backend Developer</p>
        <p className="mt-4 text-sm text-teal-200/80">© 2026 All Rights Reserved.</p>
      </footer>
    </div>
  )
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="scroll-mt-20 border-b border-teal-400/20 bg-slate-950/70 py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <motion.div {...fadeIn} className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase text-teal-300">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-100 sm:text-4xl">
            {title}
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  )
}

function ResumeButton({ compact = false }) {
  return (
    <a
      href="/Karpagaraman-M-Resume.html"
      download
      className={`inline-flex h-11 items-center justify-center gap-2 rounded-md bg-teal-500 px-5 text-sm font-semibold text-white transition hover:bg-teal-400 focus:outline-none focus:ring-4 focus:ring-teal-400/30 ${
        compact ? 'h-10 px-4' : ''
      }`}
    >
      <FiDownload aria-hidden="true" />
      Download Resume
    </a>
  )
}

function ButtonLink({ href, children, variant = 'primary' }) {
  const styles = {
    primary: 'bg-teal-500 text-white hover:bg-teal-400 focus:ring-teal-400/30',
    secondary:
      'border border-violet-400/30 bg-violet-950/70 text-slate-100 hover:border-teal-400 hover:text-teal-200 focus:ring-teal-400/30',
    ghost: 'bg-slate-800/80 text-slate-200 hover:bg-slate-700/80 focus:ring-teal-400/20',
  }

  return (
    <a
      href={href}
      className={`inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-semibold transition focus:outline-none focus:ring-4 ${styles[variant]}`}
    >
      {children}
    </a>
  )
}

function ProjectCard({ project }) {
  return (
    <motion.article
      {...fadeIn}
      className="overflow-hidden rounded-lg border border-violet-400/20 bg-slate-900/80 shadow-md shadow-slate-950/30 transition hover:-translate-y-1 hover:shadow-lg"
    >
      <ProjectPreview title={project.name} />
      <div className="p-6">
        <p className="text-sm font-semibold uppercase text-teal-300">{project.label}</p>
        <h3 className="mt-2 text-2xl font-bold text-slate-100">{project.name}</h3>
        <p className="mt-1 text-sm font-semibold text-slate-300">{project.subtitle}</p>
        <p className="mt-4 leading-7 text-slate-300">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-teal-400/20 bg-slate-800/80 px-3 py-1.5 text-xs font-semibold text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6">
          <p className="text-sm font-semibold text-slate-100">Key Features</p>
          <ul className="mt-3 grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-2">
                <FiCode className="mt-0.5 shrink-0 text-teal-300" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-teal-500 px-4 text-sm font-semibold text-white transition hover:bg-teal-400 focus:outline-none focus:ring-4 focus:ring-teal-400/30"
          >
            <FiGithub aria-hidden="true" />
            GitHub
          </a>
          <a
            href={project.demo}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-violet-400/30 bg-violet-950/70 px-4 text-sm font-semibold text-slate-100 transition hover:border-teal-400 hover:text-teal-200 focus:outline-none focus:ring-4 focus:ring-teal-400/20"
          >
            <FiArrowUpRight aria-hidden="true" />
            Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  )
}

function ProjectPreview({ title }) {
  return (
    <div className="border-b border-teal-400/20 bg-slate-950/80 p-5" aria-label={`${title} preview`}>
      <div className="overflow-hidden rounded-md border border-violet-400/20 bg-slate-900/80 shadow-sm">
        <div className="flex h-9 items-center gap-2 border-b border-teal-400/20 px-4">
          <span className="h-2.5 w-2.5 rounded-full bg-teal-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-violet-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-400/80" />
        </div>
        <div className="grid min-h-48 gap-4 p-5 sm:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-md border border-teal-400/20 bg-slate-800/80 p-4">
            <div className="h-3 w-24 rounded bg-teal-400" />
            <div className="mt-5 grid gap-3">
              <div className="h-3 rounded bg-slate-300/80" />
              <div className="h-3 w-4/5 rounded bg-slate-300/80" />
              <div className="h-3 w-3/5 rounded bg-slate-300/80" />
            </div>
          </div>
          <div className="grid gap-3">
            <div className="rounded-md border border-violet-400/20 p-3">
              <div className="h-3 w-1/2 rounded bg-violet-400/80" />
              <div className="mt-3 h-8 rounded bg-slate-800/80" />
            </div>
            <div className="rounded-md border border-violet-400/20 p-3">
              <div className="h-3 w-2/3 rounded bg-violet-400/80" />
              <div className="mt-3 h-8 rounded bg-slate-800/80" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
