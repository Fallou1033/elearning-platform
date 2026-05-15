import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, Mail, Lock, LogIn } from 'lucide-react';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 font-sans p-6">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">

        {/* Logo et Titre */}
        <div className="flex flex-col items-center mb-10">
          <div className="bg-primary-600 text-white p-3 rounded-2xl mb-4 shadow-lg shadow-primary-200">
            <BookOpen size={28} />
          </div>
          <h2 className="font-display text-2xl font-bold text-slate-900">Connexion LearnHub</h2>
          <p className="text-slate-400 text-sm mt-1">Bienvenue ! Connectez-vous à votre compte.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">
              Adresse Email
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                placeholder="nom@exemple.com"
              />
            </div>
          </div>

          {/* Mot de passe */}
          <div className="space-y-2">
            <div className="flex justify-between items-center px-1">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                Mot de passe
              </label>
              <Link
                to="/forgot-password"
                className="text-xs font-bold text-primary-600 hover:text-primary-700 transition-colors"
              >
                Oublié ?
              </Link>
            </div>
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
            className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary-200 flex items-center justify-center gap-2 group mt-2"
          >
            Se connecter
            <LogIn size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        {/* Lien inscription */}
        <div className="mt-10 pt-6 border-t border-slate-100 text-center">
          <p className="text-slate-500 text-sm">
            Pas encore de compte ?{' '}
            <Link to="/register" className="font-bold text-primary-600 hover:text-primary-700">
              Créer un compte
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;