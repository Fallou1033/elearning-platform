// ============================================================
// 📝 REGISTER PAGE — À compléter par : Membre 3
// Branch : feature/auth
// Adapter le modèle Figma fourni par le prof
// Champs : Prénom, Nom, Email, Mot de passe, Confirmer MDP
// Lien : "Déjà un compte ?" → /login
// ============================================================

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function RegisterPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO : logique d'inscription réelle
    localStorage.setItem('isLoggedIn', 'true')
    navigate('/dashboard')
  }

  return (
    <div className="w-full max-w-md">
      <div className="card p-8">
        <h2 className="font-display text-2xl font-bold text-slate-900 mb-2">Créer un compte</h2>
        <p className="text-slate-500 mb-6">🚧 Design à adapter depuis le modèle Figma</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Nom complet</label>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Prénom Nom"
              className="input-field"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="mon@email.com"
              className="input-field"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Mot de passe</label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="input-field"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Confirmer le mot de passe</label>
            <input
              name="confirm"
              type="password"
              value={form.confirm}
              onChange={handleChange}
              placeholder="••••••••"
              className="input-field"
              required
            />
          </div>
          <button type="submit" className="btn-primary w-full mt-2">
            Créer mon compte
          </button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-6">
          Déjà un compte ?{' '}
          <Link to="/login" className="text-primary-600 font-semibold hover:underline">
            Se connecter
          </Link>
        </p>
      </div>
    </div>
  )
}