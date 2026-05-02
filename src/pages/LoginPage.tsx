// ============================================================
// 🔐 LOGIN PAGE — À compléter par : Membre 3
// Branch : feature/auth
// Adapter le modèle Figma fourni par le prof :
// https://www.figma.com/design/bFrrspJiYGBb7ckJfpWzKd/...
// Champs : Email + Mot de passe + Se souvenir de moi
// Liens : "Mot de passe oublié" → /forgot-password
//         "S'inscrire" → /register
// ============================================================

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO : remplacer par vraie logique Auth
    localStorage.setItem('isLoggedIn', 'true')
    navigate('/dashboard')
  }

  return (
    <div className="w-full max-w-md">
      <div className="card p-8">
        <h2 className="font-display text-2xl font-bold text-slate-900 mb-2">Connexion</h2>
        <p className="text-slate-500 mb-6">🚧 Design à adapter depuis le modèle Figma</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="mon@email.com"
              className="input-field"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              className="input-field"
              required
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
              <input type="checkbox" className="rounded" />
              Se souvenir de moi
            </label>
            <Link to="/forgot-password" className="text-primary-600 hover:underline">
              Mot de passe oublié ?
            </Link>
          </div>
          <button type="submit" className="btn-primary w-full mt-2">
            Se connecter
          </button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-6">
          Pas encore de compte ?{' '}
          <Link to="/register" className="text-primary-600 font-semibold hover:underline">
            S'inscrire
          </Link>
        </p>
      </div>
    </div>
  )
}