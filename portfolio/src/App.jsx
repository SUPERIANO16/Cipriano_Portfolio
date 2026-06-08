import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
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
    title: 'Hybrids Team Client Portal',
    description:
      'Freelance React portal concept for project tracking, client workflows, and clean dashboard interaction patterns.',
    tech: ['React', 'Tailwind CSS', 'Supabase'],
  },
]

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

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    document.documentElement.style.colorScheme = darkMode ? 'dark' : 'light'
    window.localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const themeLabel = darkMode ? 'Switch to light mode' : 'Switch to dark mode'

  const sectionVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 24 },
      show: { opacity: 1, y: 0 },
    }),
    [],
  )

  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,var(--glow),transparent_32%),linear-gradient(135deg,var(--grid)_1px,transparent_1px)] bg-[length:auto,28px_28px]" />
      <Navbar
        darkMode={darkMode}
        mobileOpen={mobileOpen}
        navLinks={navLinks}
        setDarkMode={setDarkMode}
        setMobileOpen={setMobileOpen}
        themeLabel={themeLabel}
      />

      <main>
        <section
          id="home"
          className="mx-auto grid min-h-dvh w-full max-w-7xl items-center gap-12 px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10"
        >
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.11, delayChildren: 0.08 },
              },
            }}
          >
            <motion.p
              variants={sectionVariants}
              className="mb-5 inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 font-mono text-xs uppercase tracking-[0.28em] text-[var(--accent)] shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_22px_var(--accent)]" />
              Frontend Developer Portfolio
            </motion.p>

            <motion.h1
              variants={sectionVariants}
              className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.08em] text-[var(--heading)] sm:text-6xl lg:text-8xl"
            >
              Jaedrian Terrence T. Cipriano
            </motion.h1>

            <motion.p
              variants={sectionVariants}
              className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]"
            >
              Computer Science student focused on frontend engineering, clean
              user experiences, accessible interaction design, and real-world
              web applications.
            </motion.p>

            <motion.div
              variants={sectionVariants}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <a className="button-primary" href="#contact">
                Contact Me
                <ArrowUpRight aria-hidden="true" size={18} />
              </a>
              <a className="button-secondary" href="#about">
                About Me
              </a>
              <a
                className="button-secondary"
                href="/resume.pdf"
                rel="noopener noreferrer"
                target="_blank"
              >
                Resume
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            aria-label="Profile photo area"
            className="relative mx-auto w-full max-w-[26rem] lg:max-w-none"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.55, ease: 'easeOut' }}
          >
            <div className="absolute -inset-6 rounded-[2.5rem] border border-[var(--border)] opacity-60" />
            <div className="absolute -right-4 top-10 h-24 w-24 rounded-full bg-[var(--accent)] opacity-20 blur-3xl" />
            <div className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-[var(--border-strong)] bg-[var(--surface-strong)] shadow-[0_30px_100px_var(--shadow)]">
              <img
                alt="Portrait of Jaedrian Terrence T. Cipriano"
                className={`h-full w-full object-cover transition-opacity duration-500 ${photoLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                onLoad={() => setPhotoLoaded(true)}
                src="/profile.jpg"
              />
              {!photoLoaded && (
                <div aria-hidden="true" className="absolute inset-0 grid place-items-center p-8">
                  <div className="w-full rounded-[1.5rem] border border-dashed border-[var(--border-strong)] bg-[var(--surface)] p-8 text-center">
                    <div className="mx-auto mb-6 h-28 w-28 rounded-full border border-[var(--border)] bg-[linear-gradient(135deg,var(--surface-strong),var(--bg))]" />
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
                      /public/profile.jpg
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                      Add your photo here. Layout already reserves space beside
                      hero section.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </section>

        <Section id="about" eyebrow="About" title="Frontend craft, sharpened by real projects.">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <p className="section-copy">
              I am a frontend developer and Computer Science student pursuing
              the Intelligent Systems track at De La Salle University
              Dasmarinas. I like turning complex requirements into interfaces
              that feel clear, responsive, and useful.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ['Focus', 'React interfaces, portfolio systems, app dashboards'],
                ['Strength', 'Clean UI structure, accessibility, fast iteration'],
                ['Approach', 'Design-minded engineering with maintainable code'],
                ['Goal', 'Frontend developer internship and production projects'],
              ].map(([label, value]) => (
                <article className="info-card" key={label}>
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--accent)]">
                    {label}
                  </p>
                  <p className="mt-3 text-[var(--heading)]">{value}</p>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section id="skills" eyebrow="Skills" title="Tools I use to build polished interfaces.">
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span className="skill-chip" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Selected Projects"
          title="Project work with frontend decisions front and center."
        >
          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <h3 className="text-xl font-semibold text-[var(--heading)]">
                  {project.title}
                </h3>
                <p className="mt-4 leading-7 text-[var(--muted)]">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
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

      <footer id="contact" className="border-t border-[var(--border)] px-5 py-12 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[var(--heading)]">
              Let&apos;s build something clear and useful.
            </h2>
            <p className="mt-3 text-[var(--muted)]">
              Frontend developer intern applicant &middot; BS Computer Science student
            </p>
          </div>
          <div className="flex items-center gap-3">
            <SocialLink href="mailto:terrencecipriano@gmail.com" label="Email">
              <Mail size={20} />
            </SocialLink>
            <SocialLink href="https://github.com/SUPERIANO16" label="GitHub">
              <GithubIcon size={20} />
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/jaedrian-terrence-cipriano-715294399"
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
  setDarkMode,
  setMobileOpen,
  themeLabel,
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--nav)] backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10"
      >
        <a className="group flex items-center gap-3" href="#home">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_22px_var(--accent)]" />
          <span className="font-mono text-sm font-semibold uppercase tracking-[0.24em] text-[var(--heading)]">
            JT Cipriano
          </span>
        </a>

        <div className="hidden items-center gap-2 md:flex">
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
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="grid h-11 w-11 place-items-center rounded-full border border-[var(--border)] text-[var(--heading)] transition hover:border-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] md:hidden"
          onClick={() => setMobileOpen((value) => !value)}
          type="button"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="border-t border-[var(--border)] bg-[var(--nav)] px-5 py-5 shadow-2xl md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
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
      className="rounded-full px-4 py-2 text-sm font-medium text-[var(--muted)] transition hover:bg-[var(--surface)] hover:text-[var(--heading)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
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
      className="mt-2 inline-grid h-11 w-11 place-items-center rounded-full border border-[var(--border-strong)] bg-[var(--surface)] text-[var(--heading)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] md:ml-2 md:mt-0"
      onClick={onClick}
      type="button"
    >
      {darkMode ? <Sun aria-hidden="true" size={19} /> : <Moon aria-hidden="true" size={19} />}
    </button>
  )
}

function Section({ children, eyebrow, id, title }) {
  return (
    <motion.section
      className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10"
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <div className="mb-10 max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
          {eyebrow}
        </p>
        <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.06em] text-[var(--heading)] sm:text-5xl">
          {title}
        </h2>
      </div>
      {children}
    </motion.section>
  )
}

function SocialLink({ children, href, label }) {
  return (
    <a
      aria-label={label}
      className="grid h-12 w-12 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
      href={href}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      target={href.startsWith('http') ? '_blank' : undefined}
    >
      {children}
    </a>
  )
}

export default App
