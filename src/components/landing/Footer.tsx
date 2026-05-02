import { Link } from 'react-router-dom'
import { BookOpen, Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  Formations: ['Développement Web', 'Design UI/UX', 'Data Science', 'DevOps', 'Mobile'],
  Plateforme:  ['Comment ça marche', 'Tarifs', 'Blog', 'Carrières', 'Partenaires'],
  Support:     ['Centre d\'aide', 'Contact', 'Politique de confidentialité', 'CGU'],
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="bg-primary-500 text-white p-2 rounded-xl">
                <BookOpen size={18} />
              </div>
              <span className="font-display font-bold text-xl text-white">LearnHub</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              La plateforme e-learning pensée pour les talents africains. Apprenez, progressez, réussissez.
            </p>
            <div className="space-y-2 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Mail size={14} /> <span>contact@learnhub.sn</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} /> <span>+221 77 000 00 00</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} /> <span>Dakar, Sénégal</span>
              </div>
            </div>
            {/* Social */}
            <div className="flex gap-3">
              {['G', 'T', 'Li'].map((name, i) => (
                <a key={i} href="#" className="w-9 h-9 bg-slate-800 hover:bg-primary-600 rounded-xl flex items-center justify-center transition-colors text-xs font-bold">
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white mb-4 text-sm">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© 2025 LearnHub. Tous droits réservés.</p>
          <p>Fait avec ❤️ au Sénégal · Projet UNIPRO 2025-2026</p>
        </div>
      </div>
    </footer>
  )
}
