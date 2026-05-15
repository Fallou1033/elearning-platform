import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, Mail, Lock, User } from 'lucide-react';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex bg-white">

      {/* Panneau gauche bleu */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary-600 flex-col justify-center px-14 text-white">
        <div className="flex items-center gap-3 mb-12">
          <div className="bg-white/20 p-2.5 rounded-xl">
            <BookOpen size={24} />
          </div>
          <span className="font-display font-bold text-2xl">LearnHub</span>
        </div>
        <h2 className="font-display text-3xl font-bold mb-6 leading-tight">
          Commencez votre voyage vers l'excellence.
        </h2>
        <ul className="space-y-4">
          {['Accès illimité à +150 cours', 'Certificats reconnus', 'Support 24/7'].map((item) => (
            <li key={item} className="flex items-center gap-3 text-primary-100">
              <div className="w-5 h-5 rounded-full border-2 border-primary-300 flex items-center justify-center shrink-0">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Panneau droit — formulaire */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 bg-slate-50">
        <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">

          {/* Mobile logo */}
          <div className="flex items-center gap-2 mb-8 lg:hidden">
            <div className="bg-primary-600 text-white p-2 rounded-xl">
              <BookOpen size={20} />
            </div>
            <span className="font-display font-bold text-xl text-primary-700">LearnHub</span>
          </div>

          <h2 className="font-display text-2xl font-bold text-slate-900 mb-1">Créer un compte</h2>
          <p className="text-slate-400 text-sm mb-8">Rejoignez la communauté LearnHub.</p>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Prénom + Nom */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">
                  Prénom
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full pl-10 pr-3 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-sm"
                    placeholder="Jean"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">
                  Nom
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full pl-10 pr-3 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-sm"
                    placeholder="Dupont"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="exemple@email.com"
                />
              </div>
            </div>

            {/* Mot de passe */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">
                Mot de passe
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Bouton */}
            <button
              type="submit"
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary-200 mt-2"
            >
              Créer mon compte
            </button>
          </form>

          {/* Lien connexion */}
          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="text-slate-500 text-sm">
              Déjà un compte ?{' '}
              <Link to="/login" className="font-bold text-primary-600 hover:text-primary-700">
                Se connecter
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Register;