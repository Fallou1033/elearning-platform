import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Formations', href: '#formations' },
  { label: 'Avantages', href: '#avantages' },
  { label: 'Témoignages', href: '#temoignages' },
  { label: 'Tarifs', href: '#tarifs' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur shadow-sm border-b border-slate-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <div className="bg-primary-600 text-white p-2 rounded-xl">
            <BookOpen size={18} />
          </div>
          <span className="font-display font-bold text-xl text-primary-700">LearnHub</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/login" className="text-sm font-semibold text-slate-700 hover:text-primary-600 transition-colors px-4 py-2">
            Connexion
          </Link>
          <Link to="/register" className="btn-primary text-sm py-2 px-5">
            Commencer gratuitement
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-3">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm font-medium text-slate-700 hover:text-primary-600 py-2"
            >
              {label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <Link to="/login" className="btn-secondary text-center text-sm py-2.5">Connexion</Link>
            <Link to="/register" className="btn-primary text-center text-sm py-2.5">Commencer gratuitement</Link>
          </div>
        </div>
      )}
    </header>
  )
}