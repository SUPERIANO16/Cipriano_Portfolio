import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  ArrowUpRight,
  Mail,
  Menu,
  Moon,
  Sun,
  X,
} from 'lucide-react'

const GithubIcon = ({ size = 20 }) => (
  <svg
    aria-hidden="true"
    fill="none"
    height={size}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width={size}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4" />
  </svg>
)

const LinkedinIcon = ({ size = 20 }) => (
  <svg
    aria-hidden="true"
    fill="none"
    height={size}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width={size}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect height="12" width="4" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Resume', href: '/resume.pdf', external: true },
  { label: 'Contact', href: '#contact' },
]

const skills = [
  'React',
  'Next.js',
  'JavaScript',
  'TypeScript',
  'Tailwind CSS',
  'Framer Motion',
  'Flutter',
  'Redux Toolkit',
  'Supabase',
  'REST APIs',
  'Git',
  'Accessibility',
]

const projects = [
  {
    title: 'Note2Quiz',
    description:
      'AI-powered study tool for DLSU-D students, turning handwritten notes into quizzes and flashcards through an OCR-first interface.',
    tech: ['Flutter', 'Python', 'OCR', 'Gemini'],
  },
  {
    title: 'AutomataLab',
    description:
      'Interactive learning tool for testing strings against DFA, CFG, and PDA models with visual feedback for theory-of-computation practice.',
    tech: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Private Client Portal',
    description:
      'Freelance React portal concept for project tracking, client workflows, and clean dashboard interaction patterns.',
    tech: ['React', 'Tailwind CSS', 'Supabase'],
  },
]

const contactEmail = 'terrencecipriano@gmail.com'
const githubUrl = 'https://github.com/SUPERIANO16'
const linkedinUrl = 'https://www.linkedin.com/in/jaedrian-terrence-cipriano-715294399'

const revealVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
}

function getInitialDarkMode() {
  if (typeof window === 'undefined') return true

  const savedTheme = window.localStorage.getItem('theme')
  if (savedTheme === 'light') return false
  if (savedTheme === 'dark') return true

  return true
}

function App() {
  const [darkMode, setDarkMode] = useState(getInitialDarkMode)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [photoLoaded, setPhotoLoaded] = useState(false)
  const menuButtonRef = useRef(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    document.documentElement.style.colorScheme = darkMode ? 'dark' : 'light'
    window.localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  useEffect(() => {
    if (!mobileOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMobileOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [mobileOpen])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = mobileOpen ? 'hidden' : previousOverflow

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [mobileOpen])

  const themeLabel = darkMode ? 'Switch to light mode' : 'Switch to dark mode'

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <div aria-hidden="true" className="site-background" />

      <Navbar
        darkMode={darkMode}
        mobileOpen={mobileOpen}
        navLinks={navLinks}
        reduceMotion={reduceMotion}
        menuButtonRef={menuButtonRef}
        setDarkMode={setDarkMode}
        setMobileOpen={setMobileOpen}
        themeLabel={themeLabel}
      />

      <main id="main-content">
        <section className="hero-shell" id="home">
          <motion.div
            animate={reduceMotion ? undefined : 'show'}
            className="hero-copy"
            initial={reduceMotion ? false : 'hidden'}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.08 },
              },
            }}
          >
            <motion.p className="eyebrow status-line" variants={revealVariants}>
              Open to internship opportunities
            </motion.p>

            <motion.div variants={revealVariants}>
              <h1 className="hero-title">
                <span>Jaedrian Terrence</span>
                <span className="hero-title-line">T. Cipriano</span>
              </h1>
            </motion.div>

            <motion.p className="hero-description" variants={revealVariants}>
              Computer Science student focused on frontend engineering, clean
              user experiences, accessible interaction design, and real-world
              web applications.
            </motion.p>

            <motion.div className="hero-actions" variants={revealVariants}>
              <a className="button button-primary" href="#contact">
                Contact me
                <ArrowUpRight aria-hidden="true" size={18} />
              </a>
              <a className="button button-secondary" href="#about">
                About me
              </a>
              <a
                className="button button-secondary"
                href="/resume.pdf"
                rel="noopener noreferrer"
                target="_blank"
              >
                Resume
              </a>
            </motion.div>

            <motion.div
              aria-label="Profile summary"
              className="hero-context"
              variants={revealVariants}
            >
              <div>
                <span className="context-label">Focus</span>
                <span>Frontend engineering</span>
              </div>
              <div>
                <span className="context-label">Track</span>
                <span>Intelligent Systems</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.figure
            animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            className="hero-portrait"
            initial={reduceMotion ? false : { opacity: 0, x: 18 }}
            transition={
              reduceMotion
                ? undefined
                : { delay: 0.2, duration: 0.6, ease: 'easeOut' }
            }
          >
            <div className="portrait-frame">
              <img
                alt="Portrait of Jaedrian Terrence T. Cipriano"
                className={photoLoaded ? 'portrait-image' : 'portrait-image is-loading'}
                decoding="async"
                fetchPriority="high"
                onLoad={() => setPhotoLoaded(true)}
                src="/profile.png"
              />
              {!photoLoaded && (
                <div aria-hidden="true" className="portrait-placeholder">
                  <span>Loading portrait</span>
                </div>
              )}
            </div>
            <figcaption>
              <span>Portrait / profile.png</span>
              <span>JT / profile</span>
            </figcaption>
          </motion.figure>
        </section>

        <Section
          eyebrow="About / profile"
          id="about"
          reduceMotion={reduceMotion}
          title="Frontend craft, sharpened by real projects."
        >
          <div className="about-grid">
            <p className="section-copy">
              I am a frontend developer and Computer Science student pursuing
              the Intelligent Systems track at De La Salle University
              Dasmarinas. I like turning complex requirements into interfaces
              that feel clear, responsive, and useful.
            </p>
            <dl className="detail-list">
              <div className="detail-row">
                <dt>Focus</dt>
                <dd>React interfaces, portfolio systems, app dashboards</dd>
              </div>
              <div className="detail-row">
                <dt>Strength</dt>
                <dd>Clean UI structure, accessibility, fast iteration</dd>
              </div>
              <div className="detail-row">
                <dt>Approach</dt>
                <dd>Design-minded engineering with maintainable code</dd>
              </div>
              <div className="detail-row">
                <dt>Goal</dt>
                <dd>Frontend developer internship and production projects</dd>
              </div>
            </dl>
          </div>
        </Section>

        <Section
          eyebrow="Skills / toolkit"
          id="skills"
          reduceMotion={reduceMotion}
          title="Tools I use to build polished interfaces."
        >
          <ul className="skills-list">
            {skills.map((skill) => (
              <li key={skill}>
                {skill}
              </li>
            ))}
          </ul>
        </Section>

        <Section
          eyebrow="Work / selected projects"
          id="work"
          reduceMotion={reduceMotion}
          title="Project work with frontend decisions front and center."
        >
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-item" key={project.title}>
                <div className="project-label">
                  <span>Project</span>
                  <span aria-hidden="true" className="project-mark">
                    ↗
                  </span>
                </div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="project-tech-list">
                  {project.tech.map((tech) => (
                    <span className="project-tech" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>
      </main>

      <footer className="contact-section" id="contact">
        <div className="contact-inner">
          <div className="contact-copy">
            <p className="eyebrow">Contact / next</p>
            <h2>Let&apos;s build something clear and useful.</h2>
            <p>
              Frontend developer intern applicant · BS Computer Science student
            </p>
            <a className="contact-email" href={`mailto:${contactEmail}`}>
              {contactEmail}
              <ArrowUpRight aria-hidden="true" size={18} />
            </a>
          </div>
          <div className="social-list">
            <SocialLink href={`mailto:${contactEmail}`} label="Email">
              <Mail size={20} />
            </SocialLink>
            <SocialLink href={githubUrl} label="GitHub">
              <GithubIcon size={20} />
            </SocialLink>
            <SocialLink
              href={linkedinUrl}
              label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </SocialLink>
          </div>
        </div>
      </footer>
    </div>
  )
}

function Navbar({
  darkMode,
  mobileOpen,
  navLinks,
  reduceMotion,
  menuButtonRef,
  setDarkMode,
  setMobileOpen,
  themeLabel,
}) {
  return (
    <header className="site-header">
      <nav aria-label="Primary navigation" className="site-header-inner">
        <a className="brand" href="#home">
          <span>JT / Cipriano</span>
        </a>

        <div className="desktop-nav">
          {navLinks.map((link) => (
            <NavLink key={link.label} link={link} />
          ))}
          <ThemeToggle
            darkMode={darkMode}
            label={themeLabel}
            onClick={() => setDarkMode((value) => !value)}
          />
        </div>

        <button
          ref={menuButtonRef}
          aria-controls="mobile-nav"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="mobile-trigger"
          onClick={() => setMobileOpen((value) => !value)}
          type="button"
        >
          {mobileOpen ? (
            <X aria-hidden="true" size={20} />
          ) : (
            <Menu aria-hidden="true" size={20} />
          )}
        </button>
      </nav>

      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.div
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            className="mobile-panel"
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            id="mobile-nav"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
          >
            <div className="mobile-nav-inner">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  link={link}
                  onClick={() => setMobileOpen(false)}
                />
              ))}
              <ThemeToggle
                darkMode={darkMode}
                label={themeLabel}
                onClick={() => setDarkMode((value) => !value)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function NavLink({ link, onClick }) {
  return (
    <a
      className="nav-link"
      href={link.href}
      onClick={onClick}
      rel={link.external ? 'noopener noreferrer' : undefined}
      target={link.external ? '_blank' : undefined}
    >
      {link.label}
    </a>
  )
}

function ThemeToggle({ darkMode, label, onClick }) {
  return (
    <button
      aria-label={label}
      aria-pressed={darkMode}
      className="theme-toggle"
      onClick={onClick}
      title={label}
      type="button"
    >
      {darkMode ? (
        <Sun aria-hidden="true" size={18} />
      ) : (
        <Moon aria-hidden="true" size={18} />
      )}
    </button>
  )
}

function Section({ children, eyebrow, id, reduceMotion, title }) {
  return (
    <motion.section
      className="content-section"
      id={id}
      initial={reduceMotion ? false : 'hidden'}
      variants={revealVariants}
      viewport={{ once: true, margin: '-100px' }}
      whileInView={reduceMotion ? undefined : 'show'}
    >
      <div className="section-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {children}
    </motion.section>
  )
}

function SocialLink({ children, href, label }) {
  const external = href.startsWith('http')

  return (
    <a
      aria-label={label}
      className="social-link"
      href={href}
      rel={external ? 'noopener noreferrer' : undefined}
      target={external ? '_blank' : undefined}
    >
      {children}
    </a>
  )
}

export default App
