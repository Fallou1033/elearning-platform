import { Outlet, Link } from 'react-router-dom'
import { BookOpen } from 'lucide-react'

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-blue-50 flex flex-col">
      {/* Header minimal */}
      <header className="px-6 py-4">
        <Link to="/" className="flex items-center gap-2 w-fit">
          <div className="bg-primary-600 text-white p-2 rounded-xl">
            <BookOpen size={20} />
          </div>
          <span className="font-display font-bold text-xl text-primary-700">LearnHub</span>
        </Link>
      </header>

      {/* Auth form content */}
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <Outlet />
      </main>

      {/* Footer minimal */}
      <footer className="text-center py-4 text-sm text-slate-400">
        © 2025 LearnHub — Tous droits réservés
      </footer>
    </div>
  )
}