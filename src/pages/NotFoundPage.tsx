import { Link } from 'react-router-dom'
import { BookOpen } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-center p-8 gap-4">
      <div className="text-8xl font-display font-bold text-primary-100">404</div>
      <BookOpen size={40} className="text-primary-400" />
      <h1 className="font-display text-2xl font-bold text-slate-900">Page introuvable</h1>
      <p className="text-slate-500 max-w-sm">
        La page que vous cherchez n'existe pas ou a été déplacée.
      </p>
      <Link to="/" className="btn-primary mt-2">
        Retour à l'accueil
      </Link>
    </div>
  )
}