// ============================================================
// 🔑 FORGOT PASSWORD PAGE — À compléter par : Membre 3
// Branch : feature/auth
// Adapter le modèle Figma fourni par le prof
// Champ : Email
// Afficher un message de confirmation après soumission
// Lien retour : "Retour à la connexion" → /login
// ============================================================

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO : appel API réel
    setSent(true)
  }

  return (
    <div className="w-full max-w-md">
      <div className="card p-8">
        {sent ? (
          <div className="text-center space-y-4">
            <CheckCircle size={48} className="text-green-500 mx-auto" />
            <h2 className="font-display text-xl font-bold text-slate-900">Email envoyé !</h2>
            <p className="text-slate-500">
              Vérifiez votre boîte mail et suivez les instructions pour réinitialiser votre mot de passe.
            </p>
            <Link to="/login" className="btn-primary inline-block mt-2">
              Retour à la connexion
            </Link>
          </div>
        ) : (
          <>
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-2">
              Mot de passe oublié
            </h2>
            <p className="text-slate-500 mb-6">
              🚧 Design à adapter depuis le modèle Figma. Entrez votre email pour recevoir un lien de réinitialisation.
            </p>
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
              <button type="submit" className="btn-primary w-full">
                Envoyer le lien
              </button>
            </form>
            <p className="text-center text-sm text-slate-500 mt-6">
              <Link to="/login" className="text-primary-600 hover:underline">
                ← Retour à la connexion
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  )
}