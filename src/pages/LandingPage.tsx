// ============================================================
// 🎨 LANDING PAGE — À compléter par : Membre 2
// Branch : feature/landing
// Sections à faire :
//   - Navbar (logo + liens + CTA)
//   - Hero (titre, sous-titre, image, boutons)
//   - Section Formations (liste de cours)
//   - Section Avantages (icônes + textes)
//   - Section Témoignages
//   - Footer
// ============================================================

import { Link } from 'react-router-dom'
import { BookOpen } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary-50 to-white gap-6 p-8">
      <div className="bg-primary-600 text-white p-4 rounded-2xl">
        <BookOpen size={40} />
      </div>
      <h1 className="font-display text-4xl font-bold text-primary-700 text-center">
        LearnHub
      </h1>
      <p className="text-slate-500 text-lg text-center max-w-md">
        🚧 Landing Page en cours de construction — Membre 2 (feature/landing)
      </p>
      <div className="flex gap-4 mt-4">
        <Link to="/login" className="btn-primary">Se connecter</Link>
        <Link to="/register" className="btn-secondary">S'inscrire</Link>
      </div>
    </div>
  )
}