import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, Check, ChevronDown, ChevronLeft, ChevronRight, Clock3, GraduationCap, Instagram, MapPin, Menu, Phone, Quote, Sparkles, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { courses, faqs, photos } from './data'

export const phoneOne = '+918376946269'
export const phoneTwo = '+919955724764'
export const whatsapp = '918376946269'
export const address = '2nd Floor, EDUZONE Building, near PNB Bank, Devli Road, Khanpur, New Delhi – 110062'

export function Button({ children, to, href, secondary = false, className = '' }: { children: ReactNode; to?: string; href?: string; secondary?: boolean; className?: string }) {
  const cls = `button ${secondary ? 'button-secondary' : 'button-primary'} ${className}`
  return to ? <Link className={cls} to={to}>{children}<ArrowRight size={16} /></Link> : <a className={cls} href={href || '#'}>{children}<ArrowRight size={16} /></a>
}

export function BrandLogo({ light = false }: { light?: boolean }) {
  return <Link to="/" className={`brand ${light ? 'brand-light' : ''}`} aria-label="EDUZONE home"><img src="/assets/eduzone-logo.jpg" alt="EDUZONE official logo" /><span><b>EDUZONE</b><small>LEARN WITH PURPOSE</small></span></Link>
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  useEffect(() => { setOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }, [location.pathname])
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 20); window.addEventListener('scroll', onScroll); return () => window.removeEventListener('scroll', onScroll) }, [])
  const links = [['Home', '/'], ['About Us', '/about'], ['Courses', '/courses'], ['Faculty', '/faculty'], ['Gallery', '/gallery'], ['Contact', '/contact']]
  return <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}><div className="header-inner container"><BrandLogo /><nav className="desktop-nav" aria-label="Main navigation">{links.map(([label, to]) => <NavLink end={to === '/'} key={to} to={to} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>{label}</NavLink>)}</nav><Button to="/contact" className="nav-cta">Enquire Now</Button><button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div><AnimatePresence>{open && <motion.nav className="mobile-nav" aria-label="Mobile navigation" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .25 }}>{links.map(([label, to]) => <NavLink end={to === '/'} key={to} to={to} className="mobile-link">{label}<ArrowUpRight size={16} /></NavLink>)}<Button to="/contact">Book free counselling</Button></motion.nav>}</AnimatePresence></header>
}

export function Footer() {
  return <footer className="footer"><div className="container footer-main"><div className="footer-brand"><BrandLogo light /><p>Thoughtful coaching for students preparing for JEE, NEET, school and beyond.</p><a className="social-link" href="https://www.instagram.com/eduzone_jeet/" target="_blank" rel="noreferrer"><Instagram size={17} /> Follow along <ArrowUpRight size={14} /></a></div><div><h4>Explore</h4><Link to="/about">Our story</Link><Link to="/courses">Courses</Link><Link to="/faculty">Faculty</Link><Link to="/gallery">Gallery</Link></div><div><h4>Programmes</h4>{courses.slice(0, 4).map(c => <Link key={c.slug} to={`/courses/${c.slug}`}>{c.title}</Link>)}</div><div className="footer-contact"><h4>Visit EDUZONE</h4><p><MapPin size={16} />{address}</p><a href={`tel:${phoneOne}`}><Phone size={16} />+91 83769 46269</a><a href={`tel:${phoneTwo}`}><Phone size={16} />+91 99557 24764</a><p><Clock3 size={16} />Mon–Sat, 9:00 AM–7:00 PM</p></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} EDUZONE. All rights reserved.</span><a href="https://www.eduzonejeet.com/" target="_blank" rel="noreferrer">Official website <ArrowUpRight size={13} /></a><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to top ↑</button></div></footer>
}

export function PageShell({ children }: { children: ReactNode }) { return <><Header /><main>{children}</main><Footer /></> }

export function Eyebrow({ children }: { children: ReactNode }) { return <div className="eyebrow"><span />{children}</div> }

export function PageHero({ label, title, text, image = photos.hero }: { label: string; title: ReactNode; text: string; image?: string }) {
  return <section className="page-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(28,13,29,.83), rgba(28,13,29,.28)), url(${image})` }}><div className="container page-hero-content"><Eyebrow>{label}</Eyebrow><h1>{title}</h1><p>{text}</p></div><span className="photo-credit-note">ILLUSTRATIVE PHOTOGRAPHY</span></section>
}

export function SectionHeading({ label, title, text, centered = false }: { label: string; title: ReactNode; text?: string; centered?: boolean }) { return <div className={`section-heading ${centered ? 'centered' : ''}`}><Eyebrow>{label}</Eyebrow><h2>{title}</h2>{text && <p>{text}</p>}</div> }

export function CourseCard({ course, index = 0 }: { course: typeof courses[number]; index?: number }) {
  return <motion.article className={`course-card course-card-${index % 3}`} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: .55, delay: index * .055 }}><Link to={`/courses/${course.slug}`} className="course-image"><img src={course.image} alt={`${course.title} — illustrative education photograph`} loading="lazy" /><span className="course-tag">{course.eyebrow}</span><span className="course-photo-label">ILLUSTRATIVE</span><span className="image-arrow"><ArrowUpRight size={18} /></span></Link><div className="course-body"><p className="course-class">{course.classes}</p><h3><Link to={`/courses/${course.slug}`}>{course.title}</Link></h3><p className="course-summary">{course.summary}</p><Link className="text-link" to={`/courses/${course.slug}`}>Explore course <ArrowRight size={15} /></Link></div></motion.article>
}

export function CourseGrid({ items = courses }: { items?: typeof courses }) { return <div className="course-grid">{items.map((course, i) => <CourseCard key={course.slug} course={course} index={i} />)}</div> }

export function Faq({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState<number | null>(0)
  return <div className={`faq-list ${compact ? 'faq-compact' : ''}`}>{faqs.slice(0, compact ? 4 : 6).map((item, i) => <div className={`faq-item ${active === i ? 'faq-open' : ''}`} key={item.q}><button aria-expanded={active === i} onClick={() => setActive(active === i ? null : i)}><span>{item.q}</span><ChevronDown size={19} /></button><AnimatePresence initial={false}>{active === i && <motion.div className="faq-answer" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}><p>{item.a}</p></motion.div>}</AnimatePresence></div>)}</div>
}

export function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [ready, setReady] = useState(false)
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); const f = new FormData(e.currentTarget); const next: Record<string, string> = {}
    if (String(f.get('name') || '').trim().length < 2) next.name = 'Please enter your name.'
    const phone = String(f.get('phone') || '').replace(/\D/g, '')
    if (phone.length < 10) next.phone = 'Enter a valid phone number.'
    if (!f.get('course')) next.course = 'Choose a course to continue.'
    const email = String(f.get('email') || '').trim()
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Enter a valid email address.'
    setErrors(next); if (Object.keys(next).length) return
    const message = `Hello EDUZONE, I am ${f.get('name')}. I am interested in ${f.get('course')}. My phone number is ${f.get('phone')}.${f.get('email') ? ` Email: ${f.get('email')}.` : ''}${f.get('message') ? ` Message: ${f.get('message')}` : ''}`
    setReady(true); window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }
  return <form className="contact-form" onSubmit={submit} noValidate><div className="form-intro"><p className="eyebrow">LET’S TALK</p><h2>Tell us what you’re working towards.</h2><p>Share a few details and we’ll help you find the right next step.</p></div><div className="form-row"><label>Your name<input name="name" placeholder="e.g. Aanya Sharma" autoComplete="name" />{errors.name && <small>{errors.name}</small>}</label><label>Phone number<input name="phone" placeholder="+91" inputMode="tel" autoComplete="tel" />{errors.phone && <small>{errors.phone}</small>}</label></div><div className="form-row"><label>Email <em>(optional)</em><input name="email" type="email" placeholder="you@example.com" autoComplete="email" />{errors.email && <small>{errors.email}</small>}</label><label>Interested course<select name="course" defaultValue=""><option value="" disabled>Select a programme</option>{courses.map(c => <option key={c.slug}>{c.title}</option>)}</select>{errors.course && <small>{errors.course}</small>}</label></div><label>What would you like to know?<textarea name="message" rows={4} placeholder="Tell us a little about your goals…" /></label><button className="button button-primary form-submit" type="submit">{ready ? 'Open WhatsApp again' : 'Continue on WhatsApp'} <ArrowRight size={16} /></button><p className="form-note">Your message opens in WhatsApp. It is sent only when you choose to send it there.</p>{ready && <p className="form-success"><Check size={16} /> Your enquiry is ready in WhatsApp.</p>}</form>
}

export function GalleryLightbox({ items, initialIndex, onClose }: { items: typeof import('./data').galleryItems; initialIndex: number; onClose: () => void }) {
  const [index, setIndex] = useState(initialIndex)
  const touchStartX = useRef<number | null>(null)
  const move = (delta: number) => setIndex((index + delta + items.length) % items.length)
  useEffect(() => { const key = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); if (e.key === 'ArrowRight') move(1); if (e.key === 'ArrowLeft') move(-1) }; window.addEventListener('keydown', key); document.body.style.overflow = 'hidden'; return () => { window.removeEventListener('keydown', key); document.body.style.overflow = '' } })
  const item = items[index]
  return <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} onTouchStart={e => { touchStartX.current = e.touches[0]?.clientX ?? null }} onTouchEnd={e => { const start = touchStartX.current; const end = e.changedTouches[0]?.clientX; if (start !== null && end !== undefined && Math.abs(end - start) > 45) move(end < start ? 1 : -1); touchStartX.current = null }}><button className="lightbox-close" onClick={onClose} aria-label="Close gallery"><X /></button><button className="lightbox-arrow lightbox-prev" onClick={e => { e.stopPropagation(); move(-1) }} aria-label="Previous image"><ChevronLeft /></button><figure onClick={e => e.stopPropagation()}><img src={item.image} alt={item.caption} /><figcaption>{item.caption} <span>{String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</span></figcaption></figure><button className="lightbox-arrow lightbox-next" onClick={e => { e.stopPropagation(); move(1) }} aria-label="Next image"><ChevronRight /></button></motion.div>
}

export const icons = { BookOpen, GraduationCap, Sparkles, Quote, ArrowDown }
